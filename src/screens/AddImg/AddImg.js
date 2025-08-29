import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  Platform,
  Dimensions,
  ScrollView,
  StatusBar,
  KeyboardAvoidingView,
  Image,
  Alert,
} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import {GetCatalogAction} from '../../store/action/action';
import {Styles} from '../../styles/Styles';
import {t} from '../../components/lang';
import {ClearCreatPost} from '../../store/action/clearAction';
import {
  AddImage,
  CloseSvg1,
  FontFemalySvg,
  SelectColor,
  TextSvg2,
} from '../../assets/svg/Svgs';
import {Status} from './component/status';
import {AppColors} from '../../styles/AppColors';
import {CommonActions, useFocusEffect} from '@react-navigation/native';
import {launchImageLibrary} from 'react-native-image-picker';

import FastImage from 'react-native-fast-image';
import {Header} from './component/header';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const windowWidth = Dimensions.get('window').width;

export const AddImg = ({navigation}) => {
  const insets = useSafeAreaInsets();
  const [descriptionColor, setDescriptionColor] = useState('white');
  const [descriptionFontFamily, setDescriptionFontFamily] = useState();
  const user = useSelector(st => st.userData);
  const [activeTab, setActiveTab] = useState(1);

  // const [keyboardVisible, setKeyboardVisible] = useState(false);
  const ref = useRef();
  // useEffect(() => {
  //   const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
  //     setKeyboardVisible(true);
  //   });

  //   const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
  //     setKeyboardVisible(false);
  //   });

  //   // Cleanup listeners on unmount
  //   return () => {
  //     keyboardDidHideListener.remove();
  //     keyboardDidShowListener.remove();
  //   };
  // }, []);

  const fontFamily = [
    'Montserrat-Regular',
    'PlaywriteGBS-Regular',
    'RussoOne-Regular',
    'Agdasima-Regular',
    'Caveat-Regular',
    'Comfortaa-Regular',
    'CormorantGaramond-Regular',
    'Jost-Regular',
    'Lobster-Regular',
    'NotoSansHK-Regular',
    'Pacifico-Regular',
    'Tiny5-Regular',
    'AdventPro_Expanded-Regular',
    'Alice-Regular',
    'AmaticSC-Regular',
    'BadScript-Regular',
    'DelaGothicOne-Regular',
    'Geologica_Auto-Regular',
    'PlayfairDisplaySC-Regular',
    'RubikMonoOne-Regular',
    'Unbounded-Regular',
    'YanoneKaffeesatz-Regular',
    'AlegreyaSansSC-Regular',
    'BalsamiqSans-Regular',
    'CormorantInfant-Regular',
    'DaysOne-Regular',
    'MarckScript-Regular',
    'Pattaya-Regular',
    'ProstoOne-Regular',
    'RubikSprayPaint-Regular',
    'SofiaSansExtraCondensed-Regular',

    'RubikLines-Regular',
    'RubikDoodleTriangles-Regular',
    'RubikBrokenFax-Regular',
    'RubikBeastly-Regular',
    'Monomakh-Regular',

    'RubikPuddles-Regular',
    'RubikPixels-Regular',
    'RubikMicrobe-Regular',
    'RubikMaze-Regular',
    'RubikMaps-Regular',
    'RubikLines-Regular',
    'RubikGemstones-Regular',
    'RubikDoodleTriangles-Regular',
    'RubikDistressed-Regular',
    'RubikBurned-Regular',
    'RubikBrokenFax-Regular',
    'RubikBeastly-Regular',
    'Oi-Regular',
    'AlumniSansCollegiateOne-Regular',
  ];

  const color = [
    // { title: '#000000', id: 1 },
    {title: '#808080', id: 3},
    {title: '#FF5733', id: 4},
    {title: '#1E90FF', id: 6},
    {title: '#4682B4', id: 7},
    {title: '#4CAF50', id: 8},
    {title: '#FFD700', id: 9},
    {title: '#FF69B4', id: 10},
    {title: '#800080', id: 11},
    {title: '#8B0000', id: 12},

    {title: '#FFA500', id: 13},
    {title: '#87CEEB', id: 14},
    {title: '#FF4500', id: 16},
    {title: '#32CD32', id: 17},
    {title: '#DA70D6', id: 18},
    {title: '#708090', id: 19},
    {title: '#221b63', id: 20},

    {title: '#147558', id: 21},
    {title: '#147558', id: 22},
    {title: '#753414', id: 23},
    {title: '#753414', id: 24},
    {title: '#5d1475', id: 25},
  ];
  const color2 = [
    {title: '#8B0000', id: 12},

    {title: '#FFA500', id: 13},
    {title: '#DA70D6', id: 18},
    {title: '#708090', id: 19},
    {title: '#FF5733', id: 4},
    {title: '#1E90FF', id: 6},
    {title: '#32CD32', id: 17},
    {title: '#808080', id: 3},
    {title: '#FF4500', id: 16},
    {title: '#4682B4', id: 7},
    {title: '#4CAF50', id: 8},
    {title: '#87CEEB', id: 14},

    {title: '#FFD700', id: 9},
    {title: '#FF69B4', id: 10},
    {title: '#800080', id: 11},
  ];

  const color3 = [
    {title: '#FFA500', id: 13},
    {title: '#DA70D6', id: 18},
    {title: '#4682B4', id: 7},
    {title: '#4CAF50', id: 8},
    {title: '#800080', id: 11},
    {title: '#FFD700', id: 9},
    {title: '#FF69B4', id: 10},
    {title: '#87CEEB', id: 14},

    {title: '#708090', id: 19},
    {title: '#FF5733', id: 4},
    {title: '#8B0000', id: 12},
    {title: '#1E90FF', id: 6},
    {title: '#32CD32', id: 17},
    {title: '#808080', id: 3},
    {title: '#FF4500', id: 16},
  ];

  const mainData = useSelector(st => st.mainData);
  const [uri, setUri] = useState([]);
  const [description, setDescription] = useState([
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
  ]);
  const createPost = useSelector(st => st.createPost);
  const staticData = useSelector(st => st.static);
  const [selectedCatalog, setSelectedCatalog] = useState([]);
  const [active, setActive] = useState(0);
  const flatListRef = useRef(null);

  const [localheight, setLocalHeight] = useState([]);

  const [showError, setShowError] = useState(false);

  const [error, setError] = useState('');
  const [first, setFirst] = useState(false);
  const dispatch = useDispatch();

  const [font, setFont] = useState(['', '', '', '', '', '', '', '', '', '']);
  const [activecolor, setActiveColor] = useState([
    'white',
    'white',
    'white',
    'white',
    'white',
    'white',
    'white',
    'white',
  ]);
  const [begraund, setBegraund] = useState([
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
  ]);
  const [fonColor, setFonColor] = useState([
    'rgba(0,0,0,0.5)',
    'rgba(0,0,0,0.5)',
    'rgba(0,0,0,0.5)',
    'rgba(0,0,0,0.5)',
    'rgba(0,0,0,0.5)',
    'rgba(0,0,0,0.5)',
    'rgba(0,0,0,0.5)',
    'rgba(0,0,0,0.5)',
    'rgba(0,0,0,0.5)',
    'rgba(0,0,0,0.5)',
  ]);
  const [postOrientation, setPostOrientation] = useState('vertical'); // 'vertical' or 'horizontal'

  const handleOrientationChange = orientation => {
    setPostOrientation(orientation);
    // Reset images if current count exceeds new limit
    const newLimit = orientation === 'vertical' ? 4 : 3;
    if (uri.length > newLimit) {
      setUri(uri.slice(0, newLimit));
      setDescription(description.slice(0, newLimit));
      setFont(font.slice(0, newLimit));
      setActiveColor(activecolor.slice(0, newLimit));
      setBegraund(begraund.slice(0, newLimit));
      setFonColor(fonColor.slice(0, newLimit));
      setLocalHeight(localheight.slice(0, newLimit));
      Alert.alert(
        'Лимит фото изменен',
        `Для ${orientation} постов разрешено только ${newLimit} фото`,
      );
    }
  };

  useEffect(() => {
    dispatch(GetCatalogAction(staticData.token));
  }, []);

  useFocusEffect(
    useCallback(() => {
      setError('');
      setShowError(false);
      dispatch(ClearCreatPost());
      setSelectedCatalog([]);
      setUri([]);
      addPhoto([], 0);
      setActive(0);
    }, []),
  );

  useFocusEffect(
    useCallback(() => {
      StatusBar.setTranslucent = true;
      StatusBar.setBackgroundColor('black');
      StatusBar.setBarStyle('light-content');
      return () => {
        StatusBar.setBackgroundColor('white');
        StatusBar.setBarStyle('dark-content');
      };
    }, []),
  );

  useEffect(() => {
    if (createPost.status) {
      dispatch(ClearCreatPost());
      setUri([]);
      setDescription([]);
    }
  }, [createPost.status]);

  const addPhoto = async (data, i) => {
    setFirst(true);

    try {
      const options = {
        mediaType: 'photo',
        quality: 1,
        selectionLimit: 4,
        includeBase64: false,
      };

      launchImageLibrary(options, response => {
        console.log('22');
        let item = [...data];
        if (response.didCancel) {
          if (uri.length == 0) {
            navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [{name: 'TabNavigation'}],
              }),
            );
            setFirst(false);
          }
        } else if (response.errorMessage) {
          console.log('ImagePicker Error: ', response.errorMessage);
          Close();
          setFirst(false);
        } else if (response.assets) {
          if (response.assets.length) {
            setFirst(true);
          }
          const maxPhotos = postOrientation === 'vertical' ? 4 : 3;
          response.assets.forEach(asset => {
            if (item.length < maxPhotos) {
              item.push({uri: asset.uri, mime: asset.type});
            }
          });
          setUri(item);
        }
      });
    } catch (error) {
      Close();
      setFirst(false);
      navigation.navigate('TabNavigation');
    }
  };

  const delateFoto = index => {
    let item = [...uri];
    let temp = [...description];
    temp.splice(index, 1);
    item.splice(index, 1);
    let newIndex = 0;
    if (index == uri.length - 1) {
      newIndex = index > 0 ? index - 1 : 0;
    } else if (index > 0) {
      newIndex = index - 1;
    }
    if (item.length == 0) {
      addPhoto([], 0);
    }
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({index: newIndex, animated: true});
    }
    setUri(item);
    setDescription(temp);
  };

  const addDescription = (e, i) => {
    let item = [...description];
    item[i] = e;
    setDescription(item);
  };

  const handleMomentumScrollEnd = event => {
    const index = Math.floor(
      Math.floor(event.nativeEvent.contentOffset.x) /
        Math.floor(event.nativeEvent.layoutMeasurement.width),
    );
    setActive(index);
  };

  const Close = () => {
    setFirst(false);
    setUri([]);
  };

  const changeColor = (e, i) => {
    let item = [...activecolor];
    item[i] = e;
    setActiveColor(item);
  };
  const changeFontColor = (e, i) => {
    let item = [...fonColor];
    item[i] = e;
    setFonColor(item);
  };

  const changeFont = (e, i) => {
    let item = [...font];
    item[i] = e;
    setFont(item);
  };
  const chnageBegraund = (e, i) => {
    let item = [...begraund];
    item[i] = e;
    setBegraund(item);
  };
  if (first) {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1, backgroundColor: 'black'}}>
        <ScrollView
          style={[
            {backgroundColor: 'black'},
            insets.top ? {paddingTop: insets.top} : Styles.statusBar,
          ]}
          contentContainerStyle={{flexGrow: 1}}>
          <Status
            setShowError={e => setShowError(e)}
            showError={showError}
            error={error}
          />
          <Header
            uri={uri}
            selectedCatalog={selectedCatalog}
            description={description}
            setSelectedCatalog={e => setSelectedCatalog(e)}
            error={error}
            setFirst={e => setFirst(e)}
            Close={() => Close()}
            color={JSON.stringify(activecolor)}
            background={JSON.stringify(begraund)}
            font_family={JSON.stringify(font)}
            cveta={JSON.stringify(fonColor)}
            postOrientation={postOrientation}
            setPostOrientation={handleOrientationChange}
          />
          <View style={{alignItems: 'center', marginTop: 10}}>
            {/* <View
              style={{
                // flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 10,
              }}>
              <Text
                style={[
                  Styles.whiteMedium9,
                  {
                    textAlign: 'center',
                    zIndex: 99999,
                    color: '#FFC24B',
                    borderWidth: 1,
                    borderColor: 'white',
                    paddingHorizontal: 5,
                  },
                ]}>
                {t(mainData.lang).Yourcontent}
              </Text>
              <Text
                style={[
                  Styles.whiteMedium9,
                  {
                    textAlign: 'center',
                    zIndex: 99999,
                    color: '#FFC24B',
                    borderWidth: 1,
                    borderColor: 'white',
                    paddingHorizontal: 5,
                  },
                ]}>
                {uri.length}/{postOrientation === 'vertical' ? '4' : '3'} photos
              </Text>
            </View> */}
          </View>
          <Text
            style={[
              Styles.whiteMedium9,
              {
                textAlign: 'center',
                marginTop: 10,
                zIndex: 99999,
                color: '#FFC24B',
                borderWidth: 1,
                borderColor: 'white',
                paddingHorizontal: 5,
              },
            ]}>
            {t(mainData.lang).Yourcontent}
          </Text>
          <View style={styles.centeredView}>
            <View style={[styles.selectImage, {paddingVertical: 10}]}>
              {postOrientation === 'horizontal' ? (
                // Horizontal layout: Show all photos stacked vertically
                <View style={styles.horizontalStackContainer}>
                  <View style={styles.hover}>
                    {/* <View activeOpacity={1} style={[Styles.flexAlignItems]}>
                      <View>
                        <Image
                          style={styles.userImg}
                          source={{
                            uri: `https://chambaonline.pro/uploads/${user.avatar}`,
                          }}
                        />
                      </View>
                      <View style={styles.nameBlock}>
                        <View
                          style={[
                            Styles.flexAlignItems,
                            {width: '100%', gap: 8},
                          ]}>
                          {(() => {
                            function canParseJSON(jsonString) {
                              try {
                                JSON.parse(jsonString);
                                return (
                                  <Text
                                    style={[
                                      Styles.whiteSemiBold14,
                                      {
                                        color: JSON.parse(jsonString)?.color
                                          ?.title
                                          ? JSON.parse(jsonString)?.color?.title
                                          : 'black',
                                        fontFamily:
                                          JSON.parse(jsonString)?.font,
                                        marginTop: -2,
                                      },
                                    ]}>
                                    {JSON.parse(jsonString).name}
                                  </Text>
                                );
                              } catch (error) {
                                return (
                                  <Text
                                    style={[
                                      Styles.whiteSemiBold14,
                                      {marginTop: -2},
                                    ]}>
                                    {jsonString}
                                  </Text>
                                );
                              }
                            }
                            return canParseJSON(user?.name);
                          })()}
                        </View>
                      </View>
                    </View> */}
                  </View>
                  <ScrollView
                    style={styles.photoStackContainer}
                    showsVerticalScrollIndicator={true}
                    bounces={true}
                    scrollEventThrottle={16}
                    contentContainerStyle={{paddingBottom: 50}}
                    nestedScrollEnabled={true}>
                    {uri.map((item, index) => (
                      <TouchableOpacity
                        key={index}
                        style={[
                          styles.stackedPhotoContainer,
                          active === index && styles.selectedStackedContainer,
                        ]}
                        onPress={() => setActive(index)}
                        activeOpacity={0.8}>
                        <FastImage
                          style={styles.stackedPhoto}
                          source={{uri: item.uri}}
                          resizeMode={FastImage.resizeMode.cover}
                        />
                        {description[index]?.length > 0 && (
                          <View
                            style={[
                              styles.stackedPhotoDescription,
                              {
                                backgroundColor:
                                  fonColor[index] || 'rgba(0,0,0,0.5)',
                              },
                            ]}>
                            <Text
                              style={{
                                color: activecolor[index] ?? 'white',
                                fontFamily: font[index],
                              }}>
                              {description[index]}
                            </Text>
                          </View>
                        )}
                        <TouchableOpacity
                          onPress={e => {
                            e.stopPropagation();
                            delateFoto(index);
                          }}
                          style={styles.stackedPhotoDelete}>
                          <CloseSvg1 />
                        </TouchableOpacity>
                      </TouchableOpacity>
                    ))}
                    {uri.length < 3 && (
                      <TouchableOpacity
                        style={styles.addPhotoButton}
                        onPress={() => addPhoto(uri, 1)}>
                        <AddImage />
                        <Text style={styles.addPhotoText}>
                          Add Photo {uri.length + 1}/3
                        </Text>
                      </TouchableOpacity>
                    )}
                  </ScrollView>
                </View>
              ) : (
                // Vertical layout: Show all photos in 2x2 grid
                <View style={styles.verticalGridContainer}>
                  <View style={styles.photoGridContainer}>
                    <View style={styles.gridRow}>
                      {/* Top Left */}
                      {uri[0] ? (
                        <TouchableOpacity
                          style={[
                            styles.gridPhotoContainer,
                            active === 0 && styles.selectedPhotoContainer,
                          ]}
                          onPress={() => setActive(0)}
                          activeOpacity={0.8}>
                          <FastImage
                            style={styles.gridPhoto}
                            source={{uri: uri[0].uri}}
                            resizeMode={FastImage.resizeMode.cover}
                          />
                          {/*  */}
                          {description[0]?.length > 0 && (
                            <View
                              style={[
                                styles.gridPhotoDescription,
                                {
                                  backgroundColor:
                                    fonColor[0] || 'rgba(0,0,0,0.5)',
                                },
                              ]}>
                              <Text
                                style={{
                                  color: activecolor[0] ?? 'white',
                                  fontFamily: font[0],
                                  fontSize: 10,
                                }}>
                                {description[0]}
                              </Text>
                            </View>
                          )}
                          <TouchableOpacity
                            onPress={() => delateFoto(0)}
                            style={styles.gridPhotoDelete}>
                            <CloseSvg1 />
                          </TouchableOpacity>
                        </TouchableOpacity>
                      ) : (
                        <TouchableOpacity
                          style={styles.addGridPhotoButton}
                          onPress={() => addPhoto(uri, 1)}>
                          <AddImage />
                          <Text style={styles.addGridPhotoText}>фото 1</Text>
                        </TouchableOpacity>
                      )}

                      {/* Top Right */}
                      {uri[1] ? (
                        <TouchableOpacity
                          style={[
                            styles.gridPhotoContainer,
                            active === 1 && styles.selectedPhotoContainer,
                          ]}
                          onPress={() => setActive(1)}
                          activeOpacity={0.8}>
                          <FastImage
                            style={styles.gridPhoto}
                            source={{uri: uri[1].uri}}
                            resizeMode={FastImage.resizeMode.cover}
                          />
                          {description[1]?.length > 0 && (
                            <View
                              style={[
                                styles.gridPhotoDescription,
                                {
                                  backgroundColor:
                                    fonColor[1] || 'rgba(0,0,0,0.5)',
                                },
                              ]}>
                              <Text
                                style={{
                                  color: activecolor[1] ?? 'white',
                                  fontFamily: font[1],
                                  fontSize: 10,
                                }}>
                                {description[1]}
                              </Text>
                            </View>
                          )}
                          <TouchableOpacity
                            onPress={() => delateFoto(1)}
                            style={styles.gridPhotoDelete}>
                            <CloseSvg1 />
                          </TouchableOpacity>
                        </TouchableOpacity>
                      ) : (
                        <TouchableOpacity
                          style={styles.addGridPhotoButton}
                          onPress={() => addPhoto(uri, 1)}>
                          <AddImage />
                          <Text style={styles.addGridPhotoText}>фото 2</Text>
                        </TouchableOpacity>
                      )}
                    </View>

                    <View style={styles.gridRow}>
                      {/* Bottom Left */}
                      {uri[2] ? (
                        <TouchableOpacity
                          style={[
                            styles.gridPhotoContainer,
                            active === 2 && styles.selectedPhotoContainer,
                          ]}
                          onPress={() => setActive(2)}
                          activeOpacity={0.8}>
                          <FastImage
                            style={styles.gridPhoto}
                            source={{uri: uri[2].uri}}
                            resizeMode={FastImage.resizeMode.cover}
                          />
                          {description[2]?.length > 0 && (
                            <View
                              style={[
                                styles.gridPhotoDescription,
                                {
                                  backgroundColor:
                                    fonColor[2] || 'rgba(0,0,0,0.5)',
                                },
                              ]}>
                              <Text
                                style={{
                                  color: activecolor[2] ?? 'white',
                                  fontFamily: font[2],
                                  fontSize: 10,
                                }}>
                                {description[2]}
                              </Text>
                            </View>
                          )}
                          <TouchableOpacity
                            onPress={() => delateFoto(2)}
                            style={styles.gridPhotoDelete}>
                            <CloseSvg1 />
                          </TouchableOpacity>
                        </TouchableOpacity>
                      ) : (
                        <TouchableOpacity
                          style={styles.addGridPhotoButton}
                          onPress={() => addPhoto(uri, 1)}>
                          <AddImage />
                          <Text style={styles.addGridPhotoText}>фото 3</Text>
                        </TouchableOpacity>
                      )}

                      {/* Bottom Right */}
                      {uri[3] ? (
                        <TouchableOpacity
                          style={[
                            styles.gridPhotoContainer,
                            active === 3 && styles.selectedPhotoContainer,
                          ]}
                          onPress={() => setActive(3)}
                          activeOpacity={0.8}>
                          <FastImage
                            style={styles.gridPhoto}
                            source={{uri: uri[3].uri}}
                            resizeMode={FastImage.resizeMode.cover}
                          />
                          {description[3]?.length > 0 && (
                            <View
                              style={[
                                styles.gridPhotoDescription,
                                {
                                  backgroundColor:
                                    fonColor[3] || 'rgba(0,0,0,0.5)',
                                },
                              ]}>
                              <Text
                                style={{
                                  color: activecolor[3] ?? 'white',
                                  fontFamily: font[3],
                                  fontSize: 10,
                                }}>
                                {description[3]}
                              </Text>
                            </View>
                          )}
                          <TouchableOpacity
                            onPress={() => delateFoto(3)}
                            style={styles.gridPhotoDelete}>
                            <CloseSvg1 />
                          </TouchableOpacity>
                        </TouchableOpacity>
                      ) : (
                        <TouchableOpacity
                          style={styles.addGridPhotoButton}
                          onPress={() => addPhoto(uri, 1)}>
                          <AddImage />
                          <Text style={styles.addGridPhotoText}>фото 4</Text>
                        </TouchableOpacity>
                      )}
                    </View>
                  </View>
                </View>
              )}
            </View>
            {/* Pagination removed since we show all photos at once */}
          </View>
        </ScrollView>
        {/* <Text
          style={[
            Styles.whiteMedium9,
            {
              textAlign: 'center',
              marginTop: 10,
              zIndex: 99999,
              color: '#FFC24B',
            },
          ]}>
          Добавь эмоциональности к описанию публикации особенным шрифтом и
          цветом.
        </Text> */}

        <View style={{width: '100%', marginTop: 20}}>
          {activeTab == 1 && (
            <View style={{width: '100%'}}>
              <View>
                <Text style={styles.selectedPhotoLabel}>
                  Editing: Photo {active + 1}{' '}
                  {uri[active] ? '✓' : '(Not added yet)'}
                </Text>
                <TextInput
                  style={styles.input}
                  placeholder={`${t(mainData.lang).adddescription} для фото ${
                    active + 1
                  }`}
                  placeholderTextColor={'black'}
                  value={description[active] || ''}
                  onChangeText={e => addDescription(e, active)}
                />
              </View>
            </View>
          )}
          {activeTab == 2 && (
            <View>
              {postOrientation === 'vertical' && uri.length > 0 && (
                <View style={styles.photoSelector}>
                  {uri.map((_, index) => (
                    <TouchableOpacity
                      key={index}
                      style={[
                        styles.photoSelectorButton,
                        active === index && styles.photoSelectorActive,
                      ]}
                      onPress={() => setActive(index)}>
                      <Text
                        style={[
                          styles.photoSelectorText,
                          active === index && styles.photoSelectorTextActive,
                        ]}>
                        Photo {index + 1}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
              <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal
                contentContainerStyle={{
                  gap: 10,
                  paddingHorizontal: 10,
                  height: 50,
                  alignItems: 'center',
                }}>
                {fontFamily.map((elm, i) => {
                  return (
                    <Text
                      onPress={() => {
                        if (postOrientation === 'horizontal') {
                          // Apply to all photos in horizontal mode
                          uri.forEach((_, index) => changeFont(elm, index));
                        } else {
                          // Apply to selected photo in vertical mode
                          changeFont(elm, active);
                        }
                      }}
                      key={i}
                      style={[
                        Styles.darkMedium12,
                        {color: 'white', fontFamily: elm},
                      ]}>
                      {elm}
                    </Text>
                  );
                })}
              </ScrollView>
            </View>
          )}
          {activeTab == 3 && (
            <View>
              {postOrientation === 'vertical' && uri.length > 0 && (
                <View style={styles.photoSelector}>
                  {uri.map((_, index) => (
                    <TouchableOpacity
                      key={index}
                      style={[
                        styles.photoSelectorButton,
                        active === index && styles.photoSelectorActive,
                      ]}
                      onPress={() => setActive(index)}>
                      <Text
                        style={[
                          styles.photoSelectorText,
                          active === index && styles.photoSelectorTextActive,
                        ]}>
                        Photo {index + 1}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
              <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal
                contentContainerStyle={{
                  gap: 10,
                  paddingHorizontal: 10,
                  height: 50,
                  alignItems: 'center',
                }}>
                {color.map((elm, i) => {
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        if (postOrientation === 'horizontal') {
                          // Apply to all photos in horizontal mode
                          uri.forEach((_, index) =>
                            changeColor(elm.title, index),
                          );
                        } else {
                          // Apply to selected photo in vertical mode
                          changeColor(elm.title, active);
                        }
                      }}
                      key={i}
                      style={{
                        width: 20,
                        height: 20,
                        borderRadius: 30,
                        backgroundColor: elm.title,
                      }}
                    />
                  );
                })}
              </ScrollView>
            </View>
          )}
          {activeTab == 4 && (
            <View>
              <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal
                contentContainerStyle={{
                  gap: 10,
                  paddingHorizontal: 10,
                  height: 50,
                  alignItems: 'center',
                }}>
                {color2.map((elm, i) => {
                  return (
                    <TouchableOpacity
                      onPress={() => chnageBegraund(elm.title, active)}
                      key={i}
                      style={{
                        width: 20,
                        height: 20,
                        borderRadius: 30,
                        backgroundColor: elm.title,
                      }}
                    />
                  );
                })}
              </ScrollView>
            </View>
          )}
          {activeTab == 5 && (
            <View>
              {postOrientation === 'vertical' && uri.length > 0 && (
                <View style={styles.photoSelector}>
                  {uri.map((_, index) => (
                    <TouchableOpacity
                      key={index}
                      style={[
                        styles.photoSelectorButton,
                        active === index && styles.photoSelectorActive,
                      ]}
                      onPress={() => setActive(index)}>
                      <Text
                        style={[
                          styles.photoSelectorText,
                          active === index && styles.photoSelectorTextActive,
                        ]}>
                        Photo {index + 1}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
              <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal
                contentContainerStyle={{
                  gap: 10,
                  paddingHorizontal: 10,
                  height: 50,
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  style={{
                    borderWidth: 1,
                    borderColor: 'white',
                    padding: 8,
                    borderRadius: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  onPress={() => {
                    if (postOrientation === 'horizontal') {
                      // Apply to all photos in horizontal mode
                      uri.forEach((_, index) =>
                        changeFontColor('rgba(0,0,0,0.5)', index),
                      );
                    } else {
                      // Apply to selected photo in vertical mode
                      changeFontColor('rgba(0,0,0,0.5)', active);
                    }
                  }}>
                  <Text style={{color: 'white', fontSize: 15}}>x</Text>
                </TouchableOpacity>
                {color3.map((elm, i) => {
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        if (postOrientation === 'horizontal') {
                          // Apply to all photos in horizontal mode
                          uri.forEach((_, index) =>
                            changeFontColor(elm.title, index),
                          );
                        } else {
                          // Apply to selected photo in vertical mode
                          changeFontColor(elm.title, active);
                        }
                      }}
                      key={i}
                      style={{
                        width: 20,
                        height: 20,
                        borderRadius: 30,
                        backgroundColor: elm.title,
                      }}
                    />
                  );
                })}
              </ScrollView>
            </View>
          )}

          <View horizontal showsHorizontalScrollIndicator={false}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 10,
                gap: 10,
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                onPress={() => setActiveTab(1)}
                style={[
                  styles.editItem,
                  activeTab == 1 && {backgroundColor: '#FFC24B'},
                ]}>
                <TextSvg2 />
                <Text style={styles.textStyle}>Текст</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setActiveTab(2)}
                style={[
                  styles.editItem,
                  activeTab == 2 && {backgroundColor: '#FFC24B'},
                ]}>
                <FontFemalySvg />
                <Text style={styles.textStyle}>Шрифт</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setActiveTab(3)}
                style={[
                  styles.editItem,
                  activeTab == 3 && {backgroundColor: '#FFC24B'},
                ]}>
                <SelectColor />
                <Text style={styles.textStyle}>Цвет</Text>
              </TouchableOpacity>
              {/* <TouchableOpacity onPress={() => setActiveTab(4)} style={[styles.editItem, activeTab == 4 && { backgroundColor: "#FFC24B" }]}>
                <SelectColor />
                <Text style={[styles.textStyle]}>Подч.</Text>
              </TouchableOpacity> */}
              <TouchableOpacity
                onPress={() => setActiveTab(5)}
                style={[
                  styles.editItem,
                  activeTab == 5 && {backgroundColor: '#FFC24B'},
                ]}>
                <SelectColor />
                <Text style={styles.textStyle}>Маркер</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  } else {
    return;
  }
};

const styles = StyleSheet.create({
  pagination: {
    width: 6,
    height: 6,
    backgroundColor: '#CCD6DF',
    marginHorizontal: 5,
    borderRadius: 50,
  },
  close: {
    position: 'absolute',
    top: 0,
    right: 2,
    zIndex: 9999,
  },
  paginationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
    height: 20,
    width: '100%',
    position: 'absolute',
    bottom: 20,
  },
  centeredView: {
    alignItems: 'center',
    backgroundColor: 'black',
    minHeight: 350,
    flex: 1,
    justifyContent: 'flex-start',
  },
  editItem: {
    backgroundColor: 'white',
    width: 50,
    height: 50,
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 5,
    borderRadius: 10,
  },
  textStyle: {
    fontSize: 10,
    textAlign: 'center',
    color: 'black',
    marginBottom: 3,
  },
  img: {
    borderRadius: 11,
  },
  previewContainer: {
    borderWidth: 2,
    borderColor: '#FFC24B',
    borderStyle: 'dashed',
    borderRadius: 15,
    overflow: 'hidden',
    alignSelf: 'center',
    marginHorizontal: 10,
  },
  horizontalStackContainer: {
    width: windowWidth - 20,
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: '#FFC24B',
    borderStyle: 'dashed',
    borderRadius: 15,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    height: 600,
  },
  photoStackContainer: {
    height: 500,
    flex: 1,
  },
  stackedPhotoContainer: {
    position: 'relative',
    marginBottom: 15,
    marginHorizontal: 10,
  },
  stackedPhoto: {
    width: '100%',
    height: 340,
    borderRadius: 8,
  },
  stackedPhotoDescription: {
    position: 'absolute',
    alignItems: 'center',
    bottom: 10,
    // left: 10,
    maxWidth: '80%',
    paddingVertical: 5,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginRight: 59,
  },
  stackedPhotoDelete: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 999,
  },
  addPhotoButton: {
    height: 340,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FFC24B',
    borderStyle: 'dashed',
    borderRadius: 8,
    backgroundColor: 'rgba(255, 194, 75, 0.1)',
    marginBottom: 10,
  },
  addPhotoText: {
    color: '#FFC24B',
    marginTop: 5,
    fontSize: 12,
  },
  verticalGridContainer: {
    width: windowWidth - 20,
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: '#FFC24B',
    borderStyle: 'dashed',
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  photoGridContainer: {
    padding: 10,
  },
  gridRow: {
    flexDirection: 'row',
    marginBottom: 10,
    gap: 10,
  },
  gridPhotoContainer: {
    flex: 1,
    position: 'relative',
  },
  gridPhoto: {
    width: '100%',
    height: 150,
    borderRadius: 8,
  },
  gridPhotoDescription: {
    position: 'absolute',
    top: 5,
    left: 5,
    maxWidth: '80%',
    // right: 25,
    paddingVertical: 3,
    paddingHorizontal: 6,
    borderRadius: 6,
  },
  gridPhotoDelete: {
    position: 'absolute',
    top: 5,
    right: 5,
    zIndex: 999,
  },
  addGridPhotoButton: {
    flex: 1,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FFC24B',
    borderStyle: 'dashed',
    borderRadius: 8,
    backgroundColor: 'rgba(255, 194, 75, 0.1)',
  },
  addGridPhotoText: {
    color: '#FFC24B',
    marginTop: 5,
    fontSize: 10,
  },
  photoSelector: {
    flexDirection: 'row',
    marginBottom: 10,
    gap: 5,
  },
  photoSelectorButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  photoSelectorActive: {
    backgroundColor: '#FFC24B',
  },
  photoSelectorText: {
    color: 'white',
    fontSize: 12,
  },
  photoSelectorTextActive: {
    color: 'black',
  },
  selectedPhotoContainer: {
    borderWidth: 3,
    borderColor: '#FFC24B',
    borderRadius: 10,
  },
  selectedStackedContainer: {
    borderWidth: 3,
    borderColor: '#FFC24B',
    borderRadius: 8,
  },
  selectedPhotoOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(255, 194, 75, 0.8)',
    paddingVertical: 4,
    alignItems: 'center',
  },
  selectedStackedOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(255, 194, 75, 0.8)',
    paddingVertical: 6,
    alignItems: 'center',
  },
  selectedPhotoText: {
    color: 'black',
    fontSize: 10,
    fontWeight: 'bold',
  },
  selectedPhotoLabel: {
    color: '#FFC24B',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  Vidio: {
    height: 550,
    width: windowWidth,
    borderRadius: 11,
  },
  input: {
    borderColor: 'red',
    marginTop: 30,
    width: '100%',
    height: 40,
    backgroundColor: 'rgba(225,225,225,1)',
    position: 'absolute',
    bottom: 10,
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 12,
    color: '#000',
  },
  selectImage: {
    height: 'auto',
    width: '100%',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  addPhoto: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
    borderRadius: 7,
    width: 220,
    height: 30,
    marginTop: 10,
    backgroundColor: '#FFD953',
  },
  editor: {
    flex: 1,
    padding: 0,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 5,
    fontSize: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },

  hover: {
    padding: 5,
    paddingLeft: 7,
    position: 'relative',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    position: 'absolute',
    zIndex: 999999,
    height: 50,
  },
  userImg: {
    width: 40,
    height: 40,
    marginRight: 10,
    borderRadius: 50,
  },
  nameBlock: {
    // gap: 2,
    width: '75%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 40,
  },
});
