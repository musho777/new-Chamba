import React from 'react';
import { Animated, Dimensions, Easing, FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, PixelRatio } from 'react-native';
import { NotLineSvgWhite, ShearSvg } from '../../assets/svg/Svgs';
import { Styles } from '../../styles/Styles';
import { CommentWhite, WhiteHeart, WhiteViewSvg } from '../../assets/svg/TabBarSvg';
import FastImage from 'react-native-fast-image';
import { useCallback, useEffect, useRef, useState } from 'react';
import { AppColors } from '../../styles/AppColors';
import { useDispatch, useSelector } from 'react-redux';
import { GetFollowerAction, GetPostLikeAction, LikePostAction } from '../../store/action/action';
import { PostHeader } from './postHeader';
import LottieView from 'lottie-react-native';
import { SliderModal } from '../SliderModal';
import { useFocusEffect } from '@react-navigation/native';

const width = Dimensions.get('window').width;

export const Posts = ({
  photos,
  comment_count,
  like_count,
  view_count,
  id,
  liked,
  avatar,
  name,
  auth_user_book,
  created_at,
  userID,
  font_family,
  color,
  description,
  deletData,
  setSelectidId,
  setShowShare,
  setShowLike,
  setShowView,
  setCommentData,
  background,
  big = false,
  font_size,
  setShowStatistic = () => { },
  setShowComment = () => { },
  many_category,
  podcherknuti,
  my,
  showStatisitc,
  cveta
}) => {
  const [active, setActive] = useState(0)
  const [like, setLike] = useState({ liked, like_count })
  const dispatch = useDispatch()
  const staticdata = useSelector(st => st.static);
  const user = useSelector(st => st.userData);
  const animation = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [height, setHeight] = useState(565)
  const [showLikeIcone, setShowLikeICone] = useState(false)
  const MAX_Height = 40;
  const heightAnim = useRef(new Animated.Value(0)).current;
  const [showText, setShowText] = useState(false)
  const [visable, setVisable] = useState(false)
  const [flatListKey, setFlatListKey] = useState(Date.now());

  useFocusEffect(
    useCallback(() => {
      setFlatListKey(Date.now());
    }, [])
  );

  useEffect(() => {
    setLike({ liked, like_count })
  }, [liked, like_count])

  const fone = [
    require('../../assets/img/fon/1.jpg'),
    require('../../assets/img/fon/2.jpg'),
    require('../../assets/img/fon/3.jpg'),
    require('../../assets/img/fon/4.jpg'),
    require('../../assets/img/fon/5.jpg'),



    require('../../assets/img/fon/6.jpg'),
    require('../../assets/img/fon/10.jpg'),
    require('../../assets/img/fon/11.jpg'),
    require('../../assets/img/fon/12.jpg'),
    require('../../assets/img/fon/13.jpg'),
    require('../../assets/img/fon/14.jpg'),
    require('../../assets/img/fon/15.jpg'),
    require('../../assets/img/fon/20.jpg'),
    require('../../assets/img/fon/21.jpg'),
    require('../../assets/img/fon/23.webp'),
    require('../../assets/img/fon/24.webp'),
    require('../../assets/img/fon/26.webp'),
    require('../../assets/img/fon/27.webp'),
    require('../../assets/img/fon/30.webp'),
    require('../../assets/img/fon/35.jpeg'),
    require('../../assets/img/fon/36.jpeg'),
    require('../../assets/img/fon/37.jpeg'),
    require('../../assets/img/fon/38.jpeg'),
    require('../../assets/img/fon/39.jpeg'),
    require('../../assets/img/fon/40.jpeg'),
    require('../../assets/img/fon/41.jpeg'),
    require('../../assets/img/fon/42.jpeg'),
    require('../../assets/img/fon/43.jpeg'),
    require('../../assets/img/fon/44.jpeg'),
    require('../../assets/img/fon/45.jpeg'),
    require('../../assets/img/fon/46.jpeg'),
    require('../../assets/img/fon/47.jpeg'),
    require('../../assets/img/fon/48.jpeg'),
    require('../../assets/img/fon/49.jpeg'),
    require('../../assets/img/fon/50.jpeg'),
    require('../../assets/img/fon/51.jpeg'),
    require('../../assets/img/fon/52.jpeg'),
    require('../../assets/img/fon/53.jpeg'),
    require('../../assets/img/fon/54.jpeg'),
    require('../../assets/img/fon/55.jpeg'),
    require('../../assets/img/fon/56.jpeg'),
    require('../../assets/img/fon/57.jpeg'),
    require('../../assets/img/fon/58.jpeg'),
    require('../../assets/img/fon/59.jpeg'),
    require('../../assets/img/fon/60.jpeg'),
    require('../../assets/img/fon/61.jpeg'),
    require('../../assets/img/fon/62.jpeg'),
    require('../../assets/img/fon/63.jpeg'),
    require('../../assets/img/fon/64.jpeg'),
    require('../../assets/img/fon/65.jpeg'),
    require('../../assets/img/fon/66.jpeg'),
    require('../../assets/img/fon/67.jpeg'),
    require('../../assets/img/fon/68.jpeg'),
    require('../../assets/img/fon/69.jpeg'),
    require('../../assets/img/fon/70.jpeg'),
    require('../../assets/img/fon/71.jpeg'),
    require('../../assets/img/fon/72.jpeg'),
    require('../../assets/img/fon/73.jpeg'),
    require('../../assets/img/fon/74.jpeg'),
    require('../../assets/img/fon/75.jpeg'),
    require('../../assets/img/fon/76.jpeg'),
    require('../../assets/img/fon/77.jpeg'),
    require('../../assets/img/fon/78.jpeg'),
    require('../../assets/img/fon/80.jpeg'),
    require('../../assets/img/fon/81.jpeg'),
    require('../../assets/img/fon/82.jpeg'),
    require('../../assets/img/fon/83.jpeg'),
    require('../../assets/img/fon/84.jpeg'),
    require('../../assets/img/fon/86.jpeg'),
    require('../../assets/img/fon/87.jpeg'),
    require('../../assets/img/fon/88.jpeg'),
    require('../../assets/img/fon/89.jpeg'),
    require('../../assets/img/fon/90.jpeg'),
    require('../../assets/img/fon/91.jpeg'),
    require('../../assets/img/fon/92.jpeg'),
    require('../../assets/img/fon/93.jpeg'),
    require('../../assets/img/fon/94.jpeg'),
    require('../../assets/img/fon/95.jpeg'),
    require('../../assets/img/fon/96.jpeg'),
    require('../../assets/img/fon/97.jpeg'),
    require('../../assets/img/fon/98.jpeg'),
    require('../../assets/img/fon/99.jpeg'),
    require('../../assets/img/fon/100.jpeg'),
  ]

  const handleMomentumScrollEnd = (event) => {
    setActive(Math.floor(
      Math.floor(event.nativeEvent.contentOffset.x) /
      Math.floor(event.nativeEvent.layoutMeasurement.width)
    ));
  };
  const handleClick = (event, item) => {
<<<<<<< HEAD
    setVisable(true);
=======
    setVisable(true)
    // const now = new Date().getTime();
    // if (lastClickTime.current && now - lastClickTime.current < DOUBLE_CLICK_DELAY) {
    //   if (clickTimeout.current) {
    //     clearTimeout(clickTimeout.current);
    //     clickTimeout.current = null;
    //   }
    //   const { locationX, locationY } = event.nativeEvent;
    //   setPosition({ x: locationX - 180, y: locationY - 180 });
    //   setShowLikeICone(true);
    //   animation?.current?.play();
    //   Like();
    // } else {
    //   lastClickTime.current = now;
    //   clickTimeout.current = setTimeout(() => {
    //     setVisable(true)
    //     clickTimeout.current = null;
    //   }, DOUBLE_CLICK_DELAY);
    // }
>>>>>>> 3ae3e5ce07e82409c0b0e19a787090959bacc2ff
  };


  const Like = () => {
    let item = { ...like };
    item.liked = !item.liked;
    if (item.liked) {
      item.like_count += 1;
    }
    else {
      item.like_count -= 1;
    }
    setLike(item);
    dispatch(LikePostAction({
      'post_id': id,
    },
      staticdata.token,
      user.data.id
    ));
  };
  const startAnimation = (show) => {
    setShowText(!showText);
    Animated.timing(heightAnim, {
      toValue: show ? (height > 500 ? 450 - 70 : 240) : 0,
      duration: 400,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  };
<<<<<<< HEAD
  const GetColor = (color, active) => {
    console.log(color)
    if (!color) {
      return "white"
=======
  const renderItem = ({ item, index }) => {
    const GetColor = (color) => {
      if (!color) {
        return "white"
      }
      else if (color[0] == '[') {
        let newColor = JSON.parse(color)
        return newColor[active]
      }
      return color
>>>>>>> 3ae3e5ce07e82409c0b0e19a787090959bacc2ff
    }
    else if (color[0] == '[') {
      let newColor = JSON.parse(color)
      return newColor[active]
    }
    return color
  }

  const GetFont = (font, active) => {
    if (!font) {
      return ""
    }
    else if (font[0] == '[') {
      let newFont = JSON.parse(font)
      return newFont[active]
    }
    return font
  }

  const GetBegraund = (bg, active) => {
    if (!bg) {
      return "transparent"
    }
    else if (bg[0] == '[') {
      let newColor = JSON.parse(bg)
      return newColor[active]
    }
    return bg
  }
  const GetCveta = (bg, active) => {
    if (!bg) {
      return "rgba(0,0,0,0.5)"
    }
<<<<<<< HEAD
    else if (bg[0] == '[') {
      let newCvet = JSON.parse(cveta)
      return newCvet[active]
    }
    return "rgba(0,0,0,0.5)"
  }
  const renderItem = ({ item, index }) => {
=======
>>>>>>> 3ae3e5ce07e82409c0b0e19a787090959bacc2ff
    if (item.height - 200 > item.width) {
      if (active == index) {
        setHeight(565)
      }
    }
    else {
      if (active == index) {
        setHeight(320)
      }
    }
    return (
      <TouchableOpacity
        onPress={(e) => handleClick(e, item)}
        activeOpacity={1}>
        <Image
          style={{ width: width, height: height, }}
          source={{
            uri: `https://chambaonline.pro/uploads/${item.photo}`,
            priority: FastImage.priority.high,
            cache: FastImage.cacheControl.immutable
          }}
        />
        {showLikeIcone && <View style={{ position: 'absolute', left: position.x, top: position.y }}>
          <LottieView
            ref={animation}
            source={require('../../assets/img/Animation.json')}
            autoPlay={true}
            loop={false}
            style={{ width: 350, height: 350 }}
            onAnimationFinish={(e) => { setShowLikeICone(false) }}
          />
        </View>}
        {description != "[]" &&
          <View style={{ marginVertical: 10, position: 'absolute', top: 45, backgroundColor: GetCveta(cveta, active), borderRadius: 5, marginHorizontal: 5, }}>
            {description?.length > 0 && description[active] &&
              <View style={[{ paddingHorizontal: 10, }]}>
                <View>
                  {description?.length > 0 && description[active] &&
                    <Text style={[Styles.darkMedium13, { color: GetColor(color, active), fontFamily: GetFont(font_family, active), backgroundColor: GetBegraund(podcherknuti, active), marginTop: 3, paddingHorizontal: 5 }]}>
                      {`${description[active].slice(0, MAX_Height)}`}
                    </Text>
                  }
                  <View style={{ marginBottom: 3, paddingHorizontal: 5 }}>
                    {description[active].length > MAX_Height && <TouchableOpacity
                      onPress={() => startAnimation(true)}
                    >
                      <Text style={[Styles.balihaiMedium13, { color: 'white' }]}>Показать больше</Text>
                    </TouchableOpacity>}
                  </View>
                </View>
              </View>
            }
          </View>}

        <Animated.View style={[{ position: 'absolute', bottom: 0, backgroundColor: 'white', width: '100%', borderTopRightRadius: 10, borderTopLeftRadius: 10, zIndex: 9999999 }, { height: heightAnim }]}>
          <ScrollView
            nestedScrollEnabled={true}
            scrollEventThrottle={16}
            showsVerticalScrollIndicator={false}
            style={styles.textScrollContainer}>
            {description?.length > 0 && description && <TouchableOpacity style={{ padding: 10 }} activeOpacity={1}>
              {description[active] &&
                <Text style={[Styles.darkMedium13, { color: "black", fontFamily: GetFont(font_family, active), backgroundColor: GetBegraund(podcherknuti, active) }]}>
                  {description[active]}
                </Text>
              }
              {description?.length > 0 && description[active] && <TouchableOpacity onPress={() => startAnimation(false)}>
                <Text style={[Styles.balihaiMedium13]}>
                  Cвернуть
                </Text>
              </TouchableOpacity>}
            </TouchableOpacity>}
          </ScrollView>
        </Animated.View>

      </TouchableOpacity>
    );
  }

  if (big) {
    if (description.layout === 'vertical') {
      return <View style={{ marginBottom: 10, }}>
        <SliderModal
          activePhoto={active}
          modalVisible={visable}
          close={() => setVisable(false)}
          photo={photos}
        />
        <View style={styles.header}>
          <PostHeader
            avatar={avatar}
            name={name}
            created_at={created_at}
            podcherknuti={podcherknuti}
            userID={userID}
            activeImage={active}
            cveta={cveta}
            id={id}
            auth_user_book={auth_user_book}
            photo={photos}
            font_family={font_family}
            color={color}
            deletData={(e) => deletData(e)}
            description={description}
          />
        </View>
        <View>
          {photos.length === 1 ? (
            // Макет 1x1 для одного фото
            <View style={styles.gridRow}>
              <TouchableOpacity
                style={styles.gridPhotoContainer}
                onPress={() => {
                  setActive(0);
                  setVisable(true);
                }}
              >
                {description.descriptions[0] &&
                  <View style={{ marginVertical: 10, position: 'absolute', top: 45, backgroundColor: GetCveta(cveta, 0), borderRadius: 5, marginHorizontal: 5, zIndex: 999 }}>
                    {
                      <View style={[{ paddingHorizontal: 10, }]}>
                        <View>
                          {description.descriptions[0] &&
                            <Text style={[Styles.darkMedium13, { color: GetColor(color, 0), fontFamily: GetFont(font_family, 0), backgroundColor: GetBegraund(podcherknuti, 0), marginTop: 3, paddingHorizontal: 5 }]}>
                              {`${description.descriptions[0].slice(0, MAX_Height)}`}
                            </Text>
                          }
                          <View style={{ marginBottom: 3, paddingHorizontal: 5 }}>
                            {description.descriptions[0].length > MAX_Height && <TouchableOpacity
                              onPress={() => {
                                setActive(0)
                                startAnimation(true)
                              }}
                            >
                              <Text style={[Styles.balihaiMedium13, { color: 'white' }]}>Показать больше</Text>
                            </TouchableOpacity>}
                          </View>
                        </View>
                      </View>
                    }
                  </View>}
                <FastImage
                  source={{ uri: `https://chambaonline.pro/uploads/${photos[0].photo}` }}
                  style={[styles.gridPhoto, { height: 560 }]}
                />
              </TouchableOpacity>
            </View>
          ) : photos.length === 2 ? (
            // Макет для 2 фото: оба 100% высоты 50% ширины
            <>
              <View style={[styles.gridRow, { gap: 5 }]}>
                <TouchableOpacity
                  style={[styles.gridPhotoContainer, { width: '50%' }]}
                  onPress={() => {
                    setActive(0);
                    setVisable(true);
                  }}
                >
                  {description.descriptions[0] &&
                    <View style={{ marginVertical: 10, position: 'absolute', top: 45, backgroundColor: GetCveta(cveta, 0), borderRadius: 5, marginHorizontal: 5, zIndex: 999 }}>
                      {
                        <View style={[{ paddingHorizontal: 10, }]}>
                          <View>
                            {description.descriptions[0] &&
                              <Text style={[Styles.darkMedium13, { color: GetColor(color, 0), fontFamily: GetFont(font_family, 0), backgroundColor: GetBegraund(podcherknuti, 0), marginTop: 3, paddingHorizontal: 5 }]}>
                                {`${description.descriptions[0].slice(0, MAX_Height)}`}
                              </Text>
                            }
                            <View style={{ marginBottom: 3, paddingHorizontal: 5 }}>
                              {description.descriptions[0].length > MAX_Height && <TouchableOpacity
                                onPress={() => {
                                  setActive(0)
                                  startAnimation(true)
                                }}
                              >
                                <Text style={[Styles.balihaiMedium13, { color: 'white' }]}>Показать больше</Text>
                              </TouchableOpacity>}
                            </View>
                          </View>
                        </View>
                      }
                    </View>}
                  <FastImage
                    source={{ uri: `https://chambaonline.pro/uploads/${photos[0].photo}` }}
                    style={[styles.gridPhoto, { height: 560 }]}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.gridPhotoContainer, { width: '50%' }]}
                  onPress={() => {
                    setActive(1);
                    setVisable(true);
                  }}
                >
                  {description.descriptions[1] &&
                    <View style={{ marginVertical: 10, position: 'absolute', top: 45, backgroundColor: GetCveta(cveta, 1), borderRadius: 5, marginHorizontal: 5, zIndex: 999 }}>
                      {
                        <View style={[{ paddingHorizontal: 10, }]}>
                          <View>
                            {description.descriptions[1] &&
                              <Text style={[Styles.darkMedium13, { color: GetColor(color, 1), fontFamily: GetFont(font_family, 1), backgroundColor: GetBegraund(podcherknuti, 1), marginTop: 3, paddingHorizontal: 5 }]}>
                                {`${description.descriptions[1].slice(0, MAX_Height)}`}
                              </Text>
                            }
                            <View style={{ marginBottom: 3, paddingHorizontal: 5 }}>
                              {description.descriptions[1].length > MAX_Height && <TouchableOpacity
                                onPress={() => {
                                  setActive(1)
                                  startAnimation(true)
                                }}
                              >
                                <Text style={[Styles.balihaiMedium13, { color: 'white' }]}>Показать больше</Text>
                              </TouchableOpacity>}
                            </View>
                          </View>
                        </View>
                      }
                    </View>}
                  <FastImage
                    source={{ uri: `https://chambaonline.pro/uploads/${photos[1].photo}` }}
                    style={[styles.gridPhoto, { height: 560 }]}
                  />
                </TouchableOpacity>
              </View>
            </>
          ) : photos.length === 3 ? (
            // Макет 1x2 для 3 фото: 1-е фото 100% высоты 50% ширины, 2-е и 3-е фото 50% высоты 50% ширины
            <>
              <View style={[styles.gridRow, { gap: 5 }]}>
                <TouchableOpacity
                  style={[styles.gridPhotoContainer, { width: '50%' }]}
                  onPress={() => {
                    setActive(0);
                    setVisable(true);
                  }}
                >
                  {description.descriptions[0] &&
                    <View style={{ marginVertical: 10, position: 'absolute', top: 45, backgroundColor: GetCveta(cveta, 0), borderRadius: 5, marginHorizontal: 5, zIndex: 999 }}>
                      {
                        <View style={[{ paddingHorizontal: 10, }]}>
                          <View>
                            {description.descriptions[0] &&
                              <Text style={[Styles.darkMedium13, { color: GetColor(color, 0), fontFamily: GetFont(font_family, 0), backgroundColor: GetBegraund(podcherknuti, 0), marginTop: 3, paddingHorizontal: 5 }]}>
                                {`${description.descriptions[0].slice(0, MAX_Height)}`}
                              </Text>
                            }
                            <View style={{ marginBottom: 3, paddingHorizontal: 5 }}>
                              {description.descriptions[0].length > MAX_Height && <TouchableOpacity
                                onPress={() => {
                                  setActive(0)
                                  startAnimation(true)
                                }}
                              >
                                <Text style={[Styles.balihaiMedium13, { color: 'white' }]}>Показать больше</Text>
                              </TouchableOpacity>}
                            </View>
                          </View>
                        </View>
                      }
                    </View>}
                  <FastImage
                    source={{ uri: `https://chambaonline.pro/uploads/${photos[0].photo}` }}
                    style={[styles.gridPhoto, { height: 560 }]}
                  />
                </TouchableOpacity>
                <View style={{ width: '50%', flexDirection: 'column',gap:5 }}>
                  <TouchableOpacity
                    style={[styles.gridPhotoContainer, { height: 277.5 }]}
                    onPress={() => {
                      setActive(1);
                      setVisable(true);
                    }}
                  >
                    {description.descriptions[1] &&
                      <View style={{ marginVertical: 10, position: 'absolute', top: 45, backgroundColor: GetCveta(cveta, 1), borderRadius: 5, marginHorizontal: 5, zIndex: 999 }}>
                        {
                          <View style={[{ paddingHorizontal: 10, }]}>
                            <View>
                              {description.descriptions[1] &&
                                <Text style={[Styles.darkMedium13, { color: GetColor(color, 1), fontFamily: GetFont(font_family, 1), backgroundColor: GetBegraund(podcherknuti, 1), marginTop: 3, paddingHorizontal: 5 }]}>
                                  {`${description.descriptions[1].slice(0, MAX_Height)}`}
                                </Text>
                              }
                              <View style={{ marginBottom: 3, paddingHorizontal: 5 }}>
                                {description.descriptions[1].length > MAX_Height && <TouchableOpacity
                                  onPress={() => {
                                    setActive(1)
                                    startAnimation(true)
                                  }}
                                >
                                  <Text style={[Styles.balihaiMedium13, { color: 'white' }]}>Показать больше</Text>
                                </TouchableOpacity>}
                              </View>
                            </View>
                          </View>
                        }
                      </View>}
                    <FastImage
                      source={{ uri: `https://chambaonline.pro/uploads/${photos[1].photo}` }}
                          style={[styles.gridPhoto, { height: 277.5, borderBottomLeftRadius: 10 }]}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                        style={[styles.gridPhotoContainer, { height: 277.5 }]}
                    onPress={() => {
                      setActive(2);
                      setVisable(true);
                    }}
                  >
                    {description.descriptions[2] &&
                      <View style={{ marginVertical: 10, position: 'absolute', top: 0, backgroundColor: GetCveta(cveta, 2), borderRadius: 5, marginHorizontal: 5, zIndex: 999 }}>
                        {
                          <View style={[{ paddingHorizontal: 10, }]}>
                            <View>
                              {description.descriptions[2] &&
                                <Text style={[Styles.darkMedium13, { color: GetColor(color, 2), fontFamily: GetFont(font_family, 2), backgroundColor: GetBegraund(podcherknuti, 2), marginTop: 3, paddingHorizontal: 5 }]}>
                                  {`${description.descriptions[2].slice(0, MAX_Height)}`}
                                </Text>
                              }
                              <View style={{ marginBottom: 3, paddingHorizontal: 5 }}>
                                {description.descriptions[2].length > MAX_Height && <TouchableOpacity
                                  onPress={() => {
                                    setActive(2)
                                    startAnimation(true)
                                  }}
                                >
                                  <Text style={[Styles.balihaiMedium13, { color: 'white' }]}>Показать больше</Text>
                                </TouchableOpacity>}
                              </View>
                            </View>
                          </View>
                        }
                      </View>}
                    <FastImage
                      source={{ uri: `https://chambaonline.pro/uploads/${photos[2].photo}` }}
                          style={[styles.gridPhoto, { height: 277.4, borderTopLeftRadius: 10 }]}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </>
          ) : (
            // Стандартный макет 2x2 для 4+ фото
            <>
              <View style={[styles.gridRow, { gap: 5, marginBottom: 5 }]}>
                <TouchableOpacity
                  style={styles.gridPhotoContainer}
                  onPress={() => {
                    setActive(0);
                    setVisable(true);
                  }}
                >
                  {description.descriptions[0] &&
                    <View style={{ marginVertical: 10, position: 'absolute', top: 45, backgroundColor: GetCveta(cveta, 0), borderRadius: 5, marginHorizontal: 5, zIndex: 999 }}>
                      {
                        <View style={[{ paddingHorizontal: 10, }]}>
                          <View>
                            {description.descriptions[0] &&
                              <Text style={[Styles.darkMedium13, { color: GetColor(color, 0), fontFamily: GetFont(font_family, 0), backgroundColor: GetBegraund(podcherknuti, 0), marginTop: 3, paddingHorizontal: 5 }]}>
                                {`${description.descriptions[0].slice(0, MAX_Height)}`}
                              </Text>
                            }
                            <View style={{ marginBottom: 3, paddingHorizontal: 5 }}>
                              {description.descriptions[0].length > MAX_Height && <TouchableOpacity
                                onPress={() => {
                                  setActive(0)
                                  startAnimation(true)
                                }}
                              >
                                <Text style={[Styles.balihaiMedium13, { color: 'white' }]}>Показать больше</Text>
                              </TouchableOpacity>}
                            </View>
                          </View>
                        </View>
                      }
                    </View>}
                  <FastImage
                    source={{ uri: `https://chambaonline.pro/uploads/${photos[0].photo}` }}
                    style={[styles.gridPhoto, { borderBottomRightRadius: 10 }]}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.gridPhotoContainer}
                  onPress={() => {
                    setActive(1);
                    setVisable(true);
                  }}
                >
                  {description.descriptions[1] &&
                    <View style={{ marginVertical: 10, position: 'absolute', top: 45, backgroundColor: GetCveta(cveta, 1), borderRadius: 5, marginHorizontal: 5, zIndex: 999 }}>
                      {
                        <View style={[{ paddingHorizontal: 10, }]}>
                          <View>
                            {description.descriptions[1] &&
                              <Text style={[Styles.darkMedium13, { color: GetColor(color, 1), fontFamily: GetFont(font_family, 1), backgroundColor: GetBegraund(podcherknuti, 1), marginTop: 3, paddingHorizontal: 5 }]}>
                                {`${description.descriptions[1].slice(0, MAX_Height)}`}
                              </Text>
                            }
                            <View style={{ marginBottom: 3, paddingHorizontal: 5 }}>
                              {description.descriptions[1].length > MAX_Height && <TouchableOpacity
                                onPress={() => {
                                  setActive(1)
                                  startAnimation(true)
                                }}
                              >
                                <Text style={[Styles.balihaiMedium13, { color: 'white' }]}>Показать больше</Text>
                              </TouchableOpacity>}
                            </View>
                          </View>
                        </View>
                      }
                    </View>}
                  <FastImage
                    source={{ uri: `https://chambaonline.pro/uploads/${photos[1]?.photo}` }}
                    style={[styles.gridPhoto, { borderBottomLeftRadius: 10 }]}
                  />
                </TouchableOpacity>
              </View>
              <View style={[styles.gridRow, { gap: 5 }]}>
                <TouchableOpacity
                  style={styles.gridPhotoContainer}
                  onPress={() => {
                    setActive(2);
                    setVisable(true);
                  }}
                >
                  {description.descriptions[2] &&
                    <View style={{ marginVertical: 10, position: 'absolute', top: 0, backgroundColor: GetCveta(cveta, 2), borderRadius: 5, marginHorizontal: 5, zIndex: 999 }}>
                      {
                        <View style={[{ paddingHorizontal: 10, }]}>
                          <View>
                            {description.descriptions[2] &&
                              <Text style={[Styles.darkMedium13, { color: GetColor(color, 2), fontFamily: GetFont(font_family, 2), backgroundColor: GetBegraund(podcherknuti, 2), marginTop: 3, paddingHorizontal: 5 }]}>
                                {`${description.descriptions[2].slice(0, MAX_Height)}`}
                              </Text>
                            }
                            <View style={{ marginBottom: 3, paddingHorizontal: 5 }}>
                              {description.descriptions[2].length > MAX_Height && <TouchableOpacity
                                onPress={() => {
                                  setActive(2)
                                  startAnimation(true)
                                }}
                              >
                                <Text style={[Styles.balihaiMedium13, { color: 'white' }]}>Показать больше</Text>
                              </TouchableOpacity>}
                            </View>
                          </View>
                        </View>
                      }
                    </View>}
                  <FastImage
                    source={{ uri: `https://chambaonline.pro/uploads/${photos[2]?.photo}` }}
                    style={[styles.gridPhoto, { borderTopRightRadius: 10 }]}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.gridPhotoContainer}
                  onPress={() => {
                    setActive(3);
                    setVisable(true);
                  }}
                >
                  {description.descriptions[3] &&
                    <View style={{ marginVertical: 10, position: 'absolute', top: 0, backgroundColor: GetCveta(cveta, 3), borderRadius: 5, marginHorizontal: 5, zIndex: 999 }}>
                      {
                        <View style={[{ paddingHorizontal: 10, }]}>
                          <View>
                            {description.descriptions[3] &&
                              <Text style={[Styles.darkMedium13, { color: GetColor(color, 3), fontFamily: GetFont(font_family, 3), backgroundColor: GetBegraund(podcherknuti, 3), marginTop: 3, paddingHorizontal: 5 }]}>
                                {`${description.descriptions[3].slice(0, MAX_Height)}`}
                              </Text>
                            }
                            <View style={{ marginBottom: 3, paddingHorizontal: 5 }}>
                              {description.descriptions[3].length > MAX_Height && <TouchableOpacity
                                onPress={() => {
                                  setActive(3)
                                  startAnimation(true)
                                }}
                              >
                                <Text style={[Styles.balihaiMedium13, { color: 'white' }]}>Показать больше</Text>
                              </TouchableOpacity>}
                            </View>
                          </View>
                        </View>
                      }
                    </View>}
                  <FastImage
                    source={{ uri: `https://chambaonline.pro/uploads/${photos[3]?.photo}` }}
                    style={[styles.gridPhoto, { borderTopLeftRadius: 10 }]}
                  />
                </TouchableOpacity>
              </View>
            </>
          )}

          <Animated.View style={[{ position: 'absolute', bottom: 0, backgroundColor: 'white', width: '100%', borderTopRightRadius: 10, borderTopLeftRadius: 10, zIndex: 9999999 }, { height: heightAnim }]}>
            <ScrollView
              nestedScrollEnabled={true}
              scrollEventThrottle={16}
              showsVerticalScrollIndicator={false}
              style={styles.textScrollContainer}>
              {<TouchableOpacity style={{ padding: 10 }} activeOpacity={1}>
                {description.descriptions[active] &&
                  <Text style={[Styles.darkMedium13, { color: "black", fontFamily: GetFont(font_family, active), backgroundColor: GetBegraund(podcherknuti, active) }]}>
                    {description.descriptions[active]}
                  </Text>
                }
                {description.descriptions[active] && <TouchableOpacity onPress={() => startAnimation(false)}>
                  <Text style={[Styles.balihaiMedium13]}>
                    Cвернуть
                  </Text>
                </TouchableOpacity>}
              </TouchableOpacity>}
            </ScrollView>
          </Animated.View>
        </View>

        {!showText && <View style={styles.bodyWrapper}>
          <TouchableOpacity
            activeOpacity={1}
            onLongPress={(e) => {
              e.preventDefault()
              dispatch(GetPostLikeAction({ post_id: id }, staticdata.token, 1));
              setShowLike(true)
            }}
            onPress={(e) => {
              e.preventDefault()
              Like()
            }}

            style={styles.hover}>
            {like.liked ? <WhiteHeart /> : <NotLineSvgWhite />}
            <Text style={[Styles.darkMedium14, { color: 'white' }]}>{like.like_count}</Text>
          </TouchableOpacity>


          <TouchableOpacity
            onPress={() => {
              setShowComment(true)
              setCommentData({ parentId: id, categoryId: many_category })
            }}
            style={styles.hover}>
            <CommentWhite />
            <Text style={[Styles.darkMedium14, { color: 'white' }]}>{comment_count}</Text>
          </TouchableOpacity>


          <TouchableOpacity
            onPress={() => {
              dispatch(GetFollowerAction({ search: "", user_id: user.allData.data.id }, staticdata.token, 1));
              setShowShare(true)
              setSelectidId(id)
            }} style={styles.hover}>
            <ShearSvg />
          </TouchableOpacity>

          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 1, right: 0 }}>
            {(showStatisitc == 1 && my && view_count > 0) &&
              <TouchableOpacity onPress={() => {
                setShowView(true)
                setSelectidId(id)
                setShowStatistic(0)
              }} style={[styles.hover, { position: 'absolute', right: 50, height: 36 }]}>
                <Text style={[Styles.whiteRegular12]}>Посмотреть статистику?</Text>
              </TouchableOpacity>
            }
            <TouchableOpacity
              activeOpacity={my ? 0 : 1}
              onPress={() => {
                if (my && view_count > 0) {
                  setShowStatistic(0)
                  setShowView(true)
                  setSelectidId(id)
                }
              }}
              style={styles.hover}>
              <View style={styles.hoverItem}>
                <View style={{ marginTop: 1 }}>
                  <WhiteViewSvg />
                </View>
                <Text style={[Styles.balihaiRegular14, { color: 'white' }]}>{view_count}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>}
      </View>;
    }
    else if (description.layout === 'horizontal') {
      return <View style={{ marginBottom: 10, }}>
        <SliderModal
          activePhoto={active}
          modalVisible={visable}
          close={() => setVisable(false)}
          photo={photos}
        />
        <View style={styles.header}>
          <PostHeader
            avatar={avatar}
            name={name}
            created_at={created_at}
            podcherknuti={podcherknuti}
            userID={userID}
            activeImage={active}
            cveta={cveta}
            id={id}
            auth_user_book={auth_user_book}
            photo={photos}
            font_family={font_family}
            color={color}
            deletData={(e) => deletData(e)}
            description={description}
          />
        </View>
        {photos.map((elm, i) => {
          const getBorderStyle = () => {
            if (photos.length === 2) {
              if (i === 0) return { borderBottomLeftRadius: 10, borderBottomRightRadius: 10 };
              if (i === 1) return { borderTopLeftRadius: 10, borderTopRightRadius: 10 };
            } else if (photos.length === 3) {
              if (i === 0) return { borderBottomLeftRadius: 10, borderBottomRightRadius: 10 };
              if (i === 1) return { borderBottomLeftRadius: 10, borderBottomRightRadius: 10, borderTopLeftRadius: 10, borderTopRightRadius: 10 };
              if (i === 2) return { borderTopLeftRadius: 10, borderTopRightRadius: 10 };
            }
            return {};
          };

          return <View key={i} style={[styles.gridRow, { marginBottom: i < photos.length - 1 ? 5 : 0 }]}>

            <TouchableOpacity
              style={styles.gridPhotoContainer}
              onPress={() => {
                setActive(i);
                setVisable(true);
              }}
            >
              {description.descriptions[i] &&
                <View style={{ marginVertical: 10, position: 'absolute', top: i === 0 ? 45 : 0, backgroundColor: GetCveta(cveta, i), borderRadius: 5, marginHorizontal: 5, zIndex: 999 }}>
                  {
                    <View style={[{ paddingHorizontal: 10, }]}>
                      <View>
                        {description.descriptions[i] &&
                          <Text style={[Styles.darkMedium13, { color: GetColor(color, i), fontFamily: GetFont(font_family, i), backgroundColor: GetBegraund(podcherknuti, i), marginVertical: 3, paddingHorizontal: 5 }]}>
                            {`${description.descriptions[i].slice(0, MAX_Height)}`}
                          </Text>
                        }
                        <View style={{ marginBottom: 3, paddingHorizontal: 5 }}>
                          {description.descriptions[i].length > MAX_Height && <TouchableOpacity
                            onPress={() => {
                              setActive(i)
                              startAnimation(true)
                            }}
                          >
                            <Text style={[Styles.balihaiMedium13, { color: 'white' }]}>Показать больше</Text>
                          </TouchableOpacity>}
                        </View>
                      </View>
                    </View>
                  }
                </View>}
              <FastImage
                source={{ uri: `https://chambaonline.pro/uploads/${photos[i].photo}` }}
                style={[styles.gridPhoto, { height: photos.length == 1 ? 350 : 190 }, getBorderStyle()]}
              />
            </TouchableOpacity>
          </View>
        })}

        {!showText && <View style={styles.bodyWrapper}>
          <TouchableOpacity
            activeOpacity={1}
            onLongPress={(e) => {
              e.preventDefault()
              dispatch(GetPostLikeAction({ post_id: id }, staticdata.token, 1));
              setShowLike(true)
            }}
            onPress={(e) => {
              e.preventDefault()
              Like()
            }}

            style={styles.hover}>
            {like.liked ? <WhiteHeart /> : <NotLineSvgWhite />}
            <Text style={[Styles.darkMedium14, { color: 'white' }]}>{like.like_count}</Text>
          </TouchableOpacity>


          <TouchableOpacity
            onPress={() => {
              setShowComment(true)
              setCommentData({ parentId: id, categoryId: many_category })
            }}
            style={styles.hover}>
            <CommentWhite />
            <Text style={[Styles.darkMedium14, { color: 'white' }]}>{comment_count}</Text>
          </TouchableOpacity>


          <TouchableOpacity
            onPress={() => {
              dispatch(GetFollowerAction({ search: "", user_id: user.allData.data.id }, staticdata.token, 1));
              setShowShare(true)
              setSelectidId(id)
            }} style={styles.hover}>
            <ShearSvg />
          </TouchableOpacity>

          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 1, right: 0 }}>
            {(showStatisitc == 1 && my && view_count > 0) &&
              <TouchableOpacity onPress={() => {
                setShowView(true)
                setSelectidId(id)
                setShowStatistic(0)
              }} style={[styles.hover, { position: 'absolute', right: 50, height: 36 }]}>
                <Text style={[Styles.whiteRegular12]}>Посмотреть статистику?</Text>
              </TouchableOpacity>
            }
            <TouchableOpacity
              activeOpacity={my ? 0 : 1}
              onPress={() => {
                if (my && view_count > 0) {
                  setShowStatistic(0)
                  setShowView(true)
                  setSelectidId(id)
                }
              }}
              style={styles.hover}>
              <View style={styles.hoverItem}>
                <View style={{ marginTop: 1 }}>
                  <WhiteViewSvg />
                </View>
                <Text style={[Styles.balihaiRegular14, { color: 'white' }]}>{view_count}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>}

        <Animated.View style={[{ position: 'absolute', bottom: 0, backgroundColor: 'white', width: '100%', borderTopRightRadius: 10, borderTopLeftRadius: 10, zIndex: 9999999 }, { height: heightAnim }]}>
          <ScrollView
            nestedScrollEnabled={true}
            scrollEventThrottle={16}
            showsVerticalScrollIndicator={false}
            style={styles.textScrollContainer}>
            {<TouchableOpacity style={{ padding: 10 }} activeOpacity={1}>
              {description.descriptions[active] &&
                <Text style={[Styles.darkMedium13, { color: "black", fontFamily: GetFont(font_family, active), backgroundColor: GetBegraund(podcherknuti, active) }]}>
                  {description.descriptions[active]}
                </Text>
              }
              {description.descriptions[active] && <TouchableOpacity onPress={() => startAnimation(false)}>
                <Text style={[Styles.balihaiMedium13]}>
                  Cвернуть
                </Text>
              </TouchableOpacity>}
            </TouchableOpacity>}
          </ScrollView>
        </Animated.View>
      </View>;
    }
  }


  return <View style={[styles.wrapper, { height: height }]}>
    <View style={styles.header}>
      <PostHeader
        avatar={avatar}
        name={name}
        created_at={created_at}
        podcherknuti={podcherknuti}
        userID={userID}
        activeImage={active}
        cveta={cveta}
        id={id}
        auth_user_book={auth_user_book}
        photo={photos}
        font_family={font_family}
        color={color}
        deletData={(e) => deletData(e)}
        description={description}
      />
    </View>
    {!background ? <FlatList
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      decelerationRate="normal"
      extraData={photos}
      key={flatListKey}
      keyExtractor={(item) => item.id}
      data={photos}
      windowSize={5}
      initialNumToRender={5}
      removeClippedSubviews={false}
      maxToRenderPerBatch={10}
      renderItem={renderItem}
      onMomentumScrollEnd={handleMomentumScrollEnd}
    /> :
      <View style={{ height: 565, position: 'relative' }}>
        <Image
          source={fone[background - 1]}
          style={[{ height: 565, width: width }]}
        />
        <View style={styles.textWrapper}>
          <Text style={{ padding: 10, textAlign: 'center', color: color, fontFamily: font_family, fontSize: JSON.parse(font_size) }}>{description}</Text>
        </View>
      </View>
    }
    {photos?.length > 1 &&
      <View style={styles.paginationWrapper}>
        {photos?.map((elm, i) => (
          <View key={i} style={[styles.pagination, i === active && { backgroundColor: AppColors.GoldenTainoi_Color, borderRadius: 50 }]} />
        ))}
      </View>}


    {!showText && <View style={styles.bodyWrapper}>
      <TouchableOpacity
        activeOpacity={1}
        onLongPress={(e) => {
          e.preventDefault()
          dispatch(GetPostLikeAction({ post_id: id }, staticdata.token, 1));
          setShowLike(true)
        }}
        onPress={(e) => {
          e.preventDefault()
          Like()
        }}

        style={styles.hover}>
        {like.liked ? <WhiteHeart /> : <NotLineSvgWhite />}
        <Text style={[Styles.darkMedium14, { color: 'white' }]}>{like.like_count}</Text>
      </TouchableOpacity>


      <TouchableOpacity
        onPress={() => {
          setShowComment(true)
          setCommentData({ parentId: id, categoryId: many_category })
        }}
        style={styles.hover}>
        <CommentWhite />
        <Text style={[Styles.darkMedium14, { color: 'white' }]}>{comment_count}</Text>
      </TouchableOpacity>


      <TouchableOpacity
        onPress={() => {
          dispatch(GetFollowerAction({ search: "", user_id: user.allData.data.id }, staticdata.token, 1));
          setShowShare(true)
          setSelectidId(id)
        }} style={styles.hover}>
        <ShearSvg />
      </TouchableOpacity>

      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 1, right: 0 }}>
        {(showStatisitc == 1 && my && view_count > 0) &&
          <TouchableOpacity onPress={() => {
            setShowView(true)
            setSelectidId(id)
            setShowStatistic(0)
          }} style={[styles.hover, { position: 'absolute', right: 50, height: 36 }]}>
            <Text style={[Styles.whiteRegular12]}>Посмотреть статистику?</Text>
          </TouchableOpacity>
        }
        <TouchableOpacity
          activeOpacity={my ? 0 : 1}
          onPress={() => {
            if (my && view_count > 0) {
              setShowStatistic(0)
              setShowView(true)
              setSelectidId(id)
            }
          }}
          style={styles.hover}>
          <View style={styles.hoverItem}>
            <View style={{ marginTop: 1 }}>
              <WhiteViewSvg />
            </View>
            <Text style={[Styles.balihaiRegular14, { color: 'white' }]}>{view_count}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>}
    <SliderModal
      activePhoto={active}
      modalVisible={visable}
      close={() => setVisable(false)}
      photo={photos}
    />
  </View>;
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: '100%'
  },
  header: {
    width: '100%',
    position: 'absolute',
    zIndex: 111,
  },
  hover: {
    marginRight: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: 7,
    paddingVertical: 5,
    borderRadius: 20,
    height: 50,
    justifyContent: 'space-around',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 5,
  },
  gridPhotoContainer: {
    flex: 1,
    position: 'relative',
  },
  gridPhoto: {
    width: '100%',
    height: 280,
  },
  bodyWrapper: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    gap: 6,
  },
  paginationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 10,
    position: 'absolute',
    left: 0,
    right: 0,
    zIndex: 99999,
  },
  pagination: {
    width: 6,
    height: 6,
    backgroundColor: '#CCD6DF',
    marginHorizontal: 5,
    borderRadius: 50,
  },
  textWrapper: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    height: 540,
  },
  hoverItem: {
    height: '100%',
    justifyContent: 'space-between',
    minWidth: 20,
    alignItems: 'center',
  },

  gridRow: {
    flexDirection: 'row',
  },

})
