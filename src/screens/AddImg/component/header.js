import {
  Alert,
  Image,
  Keyboard,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  ChecboxUNchekedSvg,
  CheckedChexbox,
  CheckMarkSvg,
  CloseSvg1,
} from '../../../assets/svg/Svgs';
import {BootomModal} from '../../../components/BootomSheet';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {useCallback, useMemo, useRef, useState} from 'react';
import {t} from '../../../components/lang';
import {Styles} from '../../../styles/Styles';
import {CreatePostLocal, CreatPostAction} from '../../../store/action/action';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {check, PERMISSIONS, RESULTS, request} from 'react-native-permissions';

export const Header = ({
  setSelectedCatalog,
  selectedCatalog,
  description,
  uri,
  error,
  setFirst,
  Close,
  color,
  font_family,
  background,
  cveta,
  postOrientation,
  setPostOrientation,
}) => {
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ['50%'], []);
  const mainData = useSelector(st => st.mainData);
  const createPost = useSelector(st => st.createPost);
  const [errorCatalog, setErrorCatalog] = useState(false);
  const dispatch = useDispatch();
  const staticData = useSelector(st => st.static);
  const navigation = useNavigation();
  const [selectedCatalogName, setSelectedCatalogName] = useState([]);
  const getCatalog = useSelector(st => st.getCatalog);
  const userData = useSelector(st => st.userData);

  const handlePresentModalPress = useCallback(() => {
    Keyboard.dismiss();
    bottomSheetRef.current?.present();
  }, []);

  const Camera = async () => {
    const cameraPermission =
      Platform.OS === 'android' && PERMISSIONS.ANDROID.CAMERA;
    const photoLibraryPermission =
      Platform.OS === 'android' && PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE;
    const cameraPermissionStatus = await check(cameraPermission);
    const photoLibraryPermissionStatus = await check(photoLibraryPermission);
    if (
      cameraPermissionStatus !== RESULTS.GRANTED &&
      photoLibraryPermissionStatus !== RESULTS.GRANTED
    ) {
      request(cameraPermission);
      request(photoLibraryPermission);
    }
  };

  const creatPost = () => {
    setErrorCatalog(false);
    let form = new FormData();
    uri.length &&
      uri.forEach((el, i) => {
        console.log(el)
        form.append('photos[]', {
          uri: el.uri,
          type: el.mime,
          name: 'photo',
        });
        // if (!el.mime.includes('video')) {
        // }
        // else {
        //   form.append(`video[][video]`, {
        //     uri: el.uri,
        //     type: 'video/mp4',
        //     name: 'video.mp4',
        //   })
        // }
      });
    color && form.append('color', color);
    font_family && form.append('font_family', font_family);
    // Include orientation in description data that backend already handles
    const descriptionWithOrientation = {
      descriptions: description,
      layout: postOrientation, // vertical or horizontal
    };
    form.append('description', JSON.stringify(descriptionWithOrientation));
    background && form.append('podcherknuti', background);
    cveta && form.append('cveta', cveta);
    selectedCatalog.forEach(id => form.append('category_ids[]', id));

    if (selectedCatalog != '' && error == '') {
      dispatch(CreatePostLocal(uri[0]));
      navigation.navigate('TabNavigation', {
        screen: 'Home',
        params: {param: 'add_image'},
      });
      setFirst(false);

      dispatch(CreatPostAction(form, staticData.token, userData.data?.id));
    } else if (selectedCatalog == '') {
      setErrorCatalog(true);
    }
  };

  useFocusEffect(
    useCallback(() => {
      setSelectedCatalogName([]);
      setErrorCatalog(false);
      Camera();
    }, []),
  );

  const Select = elm => {
    let item = [...selectedCatalog];
    let photo = [...selectedCatalogName];
    let index = item.findIndex(el => el == elm.id);
    let index1 = photo.findIndex(el => el == elm.photo);
    if (index >= 0) {
      item.splice(index, 1);
    } else {
      if (item.length < 4) {
        item.push(elm.id);
      } else {
        Alert.alert('Вы можете выбрать максимум 4 рубрики');
      }
    }

    if (index1 >= 0) {
      photo.splice(index1, 1);
    } else {
      if (photo.length < 4) {
        photo.push(elm.photo);
      }
    }
    setSelectedCatalog(item);
    setSelectedCatalogName(photo);
    // handlePresentModalClose()
    setErrorCatalog('');
  };

  return (
    <View>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <View style={styles.orientationContainer}>
          <TouchableOpacity
            style={[
              styles.orientationButton,
              postOrientation === 'vertical' && styles.orientationButtonActive,
            ]}
            onPress={() => setPostOrientation('vertical')}>
            <Text
              style={[
                styles.orientationText,
                postOrientation === 'vertical' && styles.orientationTextActive,
              ]}>
              Вертикальный
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.orientationButton,
              postOrientation === 'horizontal' &&
                styles.orientationButtonActive,
            ]}
            onPress={() => setPostOrientation('horizontal')}>
            <Text
              style={[
                styles.orientationText,
                postOrientation === 'horizontal' &&
                  styles.orientationTextActive,
              ]}>
              Горизонтальный
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Layout Preview Grid */}
      <View style={styles.layoutPreviewContainer}>
        <View
          style={[
            styles.layoutPreview,
            postOrientation === 'vertical'
              ? styles.verticalPreview
              : styles.horizontalPreview,
          ]}>
          {postOrientation === 'vertical' ? (
            // Vertical layout: 2x2 grid
            <>
              <View style={styles.previewRow}>
                <View
                  style={[
                    styles.previewCell,
                    uri.length >= 1 && styles.previewCellFilled,
                  ]}
                />
                <View
                  style={[
                    styles.previewCell,
                    uri.length >= 2 && styles.previewCellFilled,
                  ]}
                />
              </View>
              <View style={styles.previewRow}>
                <View
                  style={[
                    styles.previewCell,
                    uri.length >= 3 && styles.previewCellFilled,
                  ]}
                />
                <View
                  style={[
                    styles.previewCell,
                    uri.length >= 4 && styles.previewCellFilled,
                  ]}
                />
              </View>
            </>
          ) : (
            // Horizontal layout: 3x1 grid (stacked vertically)
            <View style={styles.previewColumnHorizontal}>
              <View
                style={[
                  styles.previewCellHorizontal,
                  uri.length >= 1 && styles.previewCellFilled,
                ]}
              />
              <View
                style={[
                  styles.previewCellHorizontal,
                  uri.length >= 2 && styles.previewCellFilled,
                ]}
              />
              <View
                style={[
                  styles.previewCellHorizontal,
                  uri.length >= 3 && styles.previewCellFilled,
                ]}
              />
            </View>
          )}
        </View>
        {/* <Text
          style={[Styles.whiteMedium9, {color: 'white', marginTop: 5}]}>
          {postOrientation === 'vertical'
            ? 'Vertical Layout (2x2)'
            : 'Horizontal Layout (3x1 stacked)'}
        </Text> */}
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 10,
          marginTop: 10,
        }}>
        <TouchableOpacity
          style={{width: 35, height: 26}}
          onPress={() => {
            Close();
            navigation.goBack();
          }}></TouchableOpacity>

        <TouchableOpacity
          activeOpacity={1}
          onPress={() => handlePresentModalPress()}
          style={[
            styles.category,
            {borderColor: errorCatalog ? 'red' : 'white'},
          ]}>
          {selectedCatalogName?.length == 0 && (
            <Text
              style={[
                Styles.whiteMedium12,
                {color: errorCatalog ? 'red' : 'white', textAlign: 'center'},
              ]}>
              {t(mainData.lang).Choosecatalog}
            </Text>
          )}
          {selectedCatalogName?.map((elm, i) => {
            return (
              <Image
                key={i}
                style={styles.image}
                source={{uri: `https://chambaonline.pro/uploads/${elm}`}}
              />
            );
          })}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => creatPost()}
          disabled={createPost.loading || uri.length === 0}>
          <CheckMarkSvg />
        </TouchableOpacity>
      </View>
      <BootomModal ref={bottomSheetRef} snapPoints={snapPoints}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{marginBottom: 30}}>
            {getCatalog.data.map((elm, i) => {
              return (
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => Select(elm)}
                  style={styles.CheckMark}
                  key={i}>
                  <Text
                    numberOfLines={1}
                    style={[
                      {padding: 10, paddingHorizontal: 15, width: '90%'},
                      Styles.darkMedium13,
                    ]}>
                    {elm.name}
                  </Text>
                  {selectedCatalog?.findIndex(e => elm.id == e) >= 0 ? (
                    <CheckedChexbox />
                  ) : (
                    <ChecboxUNchekedSvg />
                  )}
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      </BootomModal>
    </View>
  );
};

const styles = StyleSheet.create({
  category: {
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
    borderRadius: 7,
    // width: 220,
    marginLeft: 5,
    flexDirection: 'row',
    gap: 3,
  },
  CheckMark: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 10,
  },
  image: {
    width: 20,
    height: 10,
    objectFit: 'contain',
    // height: 50,
  },
  orientationContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 20,
    overflow: 'hidden',
  },
  orientationButton: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: 'transparent',
  },
  orientationButtonActive: {
    backgroundColor: '#FFC24B',
  },
  orientationText: {
    fontSize: 12,
    color: 'white',
  },
  orientationTextActive: {
    color: 'black',
  },
  layoutPreviewContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  layoutPreview: {
    borderWidth: 1,
    borderColor: '#FFC24B',
    borderRadius: 8,
    padding: 4,
  },
  verticalPreview: {
    width: 60,
    height: 80,
  },
  horizontalPreview: {
    width: 50,
    height: 90,
  },
  previewRow: {
    flexDirection: 'row',
    flex: 1,
    gap: 2,
  },
  previewColumnHorizontal: {
    flexDirection: 'column',
    flex: 1,
    gap: 2,
  },
  previewCell: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 4,
    margin: 1,
  },
  previewCellHorizontal: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 4,
    margin: 1,
  },
  previewCellFilled: {
    backgroundColor: '#FFC24B',
  },
});
