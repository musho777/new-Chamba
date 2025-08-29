import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity,
  PixelRatio,
  Text,
} from 'react-native';
import {AppColors} from '../styles/AppColors';
import {SliderModal} from './SliderModal';
import {LikePostAction} from '../store/action/action';
import {useDispatch, useSelector} from 'react-redux';
import SliderImage from './sliderImage';
import LottieView from 'lottie-react-native';

const dpi = PixelRatio.get() * 160;
const windowWidth = Dimensions.get('window').width;

export const Slider = React.memo(
  ({
    adminStatus,
    scroll,
    id,
    photo,
    viewableItems,
    setOpenModal,
    user,
    onLongClikc,
    long,
    onPressOut,
    setActiveImage,
    data,
    setHoriznotal = () => {},
    description,
    layout = 'vertical',
    setIsExpanded,
    isExpanded,
    setHeight,
    big,
    color,
    font,
    setPhotoLayout = () => {},
  }) => {
    const [active, setActive] = useState(0);
    const [openSlider, setOpenSlider] = useState(false);
    const [showLikeIcone, setShowLikeICone] = useState(false);
    const [detectedLayout, setDetectedLayout] = useState('vertical');
    const staticdata = useSelector(st => st.static);
    const lastClickTime = useRef(0);
    const clickTimeout = useRef(null);
    const SINGLE_CLICK_DELAY = 300;
    const DOUBLE_CLICK_DELAY = 300;
    const [position, setPosition] = useState({x: 0, y: 0});
    const dispatch = useDispatch();
    // const [showSlider, setShowSlider] = useState(true)
    // const [duration, setDuration] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
    // const videoRef = useRef(null);
    // const videoRef1 = useRef(null);
    // const videoRef2 = useRef(null);
    // const videoRef3 = useRef(null);
    // const videoRef4 = useRef(null);
    // const videoRef5 = useRef(null);
    // const videoRef6 = useRef(null);
    // const videoRef7 = useRef(null);
    // const videoRef8 = useRef(null);
    // const videoRef9 = useRef(null);

    // const [reff, setReff] = useState([videoRef, videoRef1, videoRef2, videoRef3, videoRef4, videoRef5, videoRef6, videoRef7, videoRef8, videoRef9])

    // const [currentTime, setCurrentTime] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
    const animation = useRef(null);
    // const [paused, setPaused] = useState([true, true, true, true, true, true, true, true, true, true]);

    // const onSeek = (value) => {
    //   let item = [...currentTime]
    //   item[active] = value
    //   setCurrentTime(item)
    //   // reff[active]?.current?.seek(value);
    // };

    // useEffect(() => {
    //   setPaused([true, true, true, true, true, true, true, true, true, true])
    // }, [active])

    const LikePost = useCallback(() => {
      dispatch(
        LikePostAction({post_id: data?.id}, staticdata.token, user.data?.id),
      );
    }, [dispatch, data?.id, staticdata.token, user.data?.id]);

    const handleClick = (event, item) => {
      const now = new Date().getTime();
      if (
        lastClickTime.current &&
        now - lastClickTime.current < DOUBLE_CLICK_DELAY
      ) {
        if (clickTimeout.current) {
          clearTimeout(clickTimeout.current);
        }
        const {locationX, locationY} = event.nativeEvent;
        setPosition({x: locationX - 180, y: locationY - 180});
        setShowLikeICone(true);
        animation?.current?.play();
        LikePost();
      } else {
        clickTimeout.current = setTimeout(() => {
          if (!item.video) {
            setOpenSlider(true);
            setOpenModal(false);
          }
        }, SINGLE_CLICK_DELAY);
        lastClickTime.current = now;
      }
    };

    const handleMomentumScrollEnd = event => {
      // setShowSlider(true)
      const index = Math.floor(
        Math.floor(event.nativeEvent.contentOffset.x) /
          Math.floor(event.nativeEvent.layoutMeasurement.width),
      );
      setActive(index);
      setActiveImage(index);
    };

    // const CurrentTimeSet = (i, e) => {
    //   let item = [...currentTime]
    //   let temp = [...paused]
    //   if (item[i] <= duration[i]) {
    //     item[i] = e
    //     setCurrentTime(item)
    //   }
    //   else {
    //     item[i] = 0
    //     setCurrentTime(item)
    //     temp[i] = true
    //     setPaused(temp)
    //   }
    // }

    // const formatTime = (time) => {
    //   const minutes = Math.floor(time / 60);
    //   const seconds = Math.floor(time % 60);
    //   return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    // };

    // const GetDuration = (e, i) => {
    //   let item = [...duration]
    //   item[i] = e
    //   setDuration(item)
    // }

    // const { fullScreen } = useSelector((st) => st.fullScreenData)

    // Improved photo orientation detection
    const detectPhotoOrientation = photos => {
      if (!photos || photos.length === 0) {
        return 'vertical';
      }

      let verticalCount = 0;
      let horizontalCount = 0;

      photos.forEach(item => {
        if (item.height && item.width) {
          const aspectRatio = item.height / item.width;
          if (aspectRatio > 1.2) {
            verticalCount++;
          } else if (aspectRatio < 0.8) {
            horizontalCount++;
          }
        }
      });

      return horizontalCount > verticalCount ? 'horizontal' : 'vertical';
    };

    // Update layout detection when photos change
    useEffect(() => {
      const newLayout = detectPhotoOrientation(photo);
      setDetectedLayout(newLayout);
      setPhotoLayout(newLayout);

      // Set orientation for compatibility
      if (newLayout === 'horizontal') {
        setHoriznotal(true);
        setHeight(380);
      } else {
        setHoriznotal(false);
        setHeight(565);
      }
    }, [photo, setPhotoLayout, setHoriznotal, setHeight]);

    const renderItem = ({item, index}) => {
      let height = 565;
      const aspectRatio =
        item.height && item.width ? item.height / item.width : 1;

      if (aspectRatio > 1.2) {
        // Vertical photo
        height = 565;
        if (active === index) {
          setHeight(565);
          setHoriznotal(false);
        }
      } else if (aspectRatio < 0.8) {
        // Horizontal photo
        height = 350;
        if (active === index) {
          setHeight(380);
          setHoriznotal(true);
        }
      } else {
        // Square or near-square photo
        height = 450;
        if (active === index) {
          setHeight(480);
          setHoriznotal(false);
        }
      }
      // const ChangePauesd = (e, index) => {
      //   let temp = [...paused]
      //   temp[index] = e
      //   setPaused(temp)
      // }

      return (
        <TouchableOpacity
          onLongPress={() => onLongClikc()}
          activeOpacity={1}
          // disabled={fullScreen}
          onPressOut={() => onPressOut()}
          onPress={e => handleClick(e, item)}
          // style={[styles.img, { height: !fullScreen ? height : windowHeight }]}>
          style={[styles.img, {height: height}]}>
          {/* {(item.video && active == index) ?
          <VidioComponent
            active={active}
            viewableItems={viewableItems}
            music={data.music_name}
            item={item}
            scroll={(e) => scroll(e)}
            setPaused={(e, index) => ChangePauesd(e, index)}
            paused={paused}
            id={id}
            currentTime={currentTime[active]}
            setCurrentTime={(e) => CurrentTimeSet(index, e)}
            setDuration={(e, index) => GetDuration(e, index)}
            duration={duration[active]}
            ref={reff[active]}
            height={height}
            isExpanded={isExpanded}
            description={description}
            onSeek={onSeek}
            big={big}
            setIsExpanded={(e) => setIsExpanded(e)}
          />
          :
        } */}
          <SliderImage
            long={long}
            description={description}
            index={index}
            item={item}
            height={height}
            isExpanded={isExpanded}
            color={color}
            font={font}
            // adminStatus={adminStatus}
            setIsExpanded={e => setIsExpanded(e)}
          />

          {showLikeIcone && (
            <View
              style={{position: 'absolute', left: position.x, top: position.y}}>
              <LottieView
                ref={animation}
                source={require('../assets/img/Animation.json')}
                autoPlay={true}
                loop={false}
                style={{width: 350, height: 350}}
                onAnimationFinish={e => {
                  setShowLikeICone(false);
                }}
              />
            </View>
          )}
        </TouchableOpacity>
      );
    };

    const flatListRef = useRef();
    useEffect(() => {
      if (photo?.length > 0) {
        flatListRef.current?.scrollToIndex({
          index: 0,
          animated: true,
        });
      }
      setActive(0);
    }, [photo?.length]);

    // Enhanced layout rendering based on photo orientation
    const renderLayout = () => {
      const currentLayout = layout || detectedLayout;

      if (photo?.length === 1) {
        // Single photo - use original slider behavior
        return (
          <FlatList
            horizontal
            ref={flatListRef}
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            decelerationRate="normal"
            keyExtractor={item => item?.id?.toString()}
            data={photo}
            windowSize={5}
            initialNumToRender={1}
            removeClippedSubviews={false}
            maxToRenderPerBatch={1}
            onMomentumScrollEnd={handleMomentumScrollEnd}
            renderItem={renderItem}
          />
        );
      }

      if (currentLayout === 'horizontal') {
        // Horizontal layout: Stack photos vertically
        return (
          <View style={styles.horizontalStackContainer}>
            {photo?.map((item, index) => (
              <TouchableOpacity
                key={item?.id || index}
                style={styles.stackedPhotoContainer}
                onPress={e => handleClick(e, item)}
                onLongPress={() => onLongClikc()}
                onPressOut={() => onPressOut()}
                activeOpacity={1}>
                <SliderImage
                  long={long}
                  description={description}
                  index={index}
                  item={item}
                  height={300}
                  isExpanded={isExpanded}
                  color={color}
                  font={font}
                  setIsExpanded={e => setIsExpanded(e)}
                />
              </TouchableOpacity>
            ))}
          </View>
        );
      } else {
        // Vertical layout: Use original slider for better user experience
        return (
          <FlatList
            horizontal
            ref={flatListRef}
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            decelerationRate="normal"
            keyExtractor={item => item?.id?.toString()}
            data={photo}
            windowSize={5}
            initialNumToRender={3}
            removeClippedSubviews={false}
            maxToRenderPerBatch={5}
            onMomentumScrollEnd={handleMomentumScrollEnd}
            renderItem={renderItem}
          />
        );
      }
    };

    return (
      <View style={[{position: 'relative'}]}>
        {photo?.length > 0 ? (
          <View>
            {/* Debug info */}
            {__DEV__ && (
              <View
                style={{
                  position: 'absolute',
                  top: 5,
                  left: 5,
                  zIndex: 1000,
                  backgroundColor: 'rgba(0,0,0,0.7)',
                  padding: 5,
                  borderRadius: 3,
                }}>
                <Text style={{color: 'white', fontSize: 9}}>
                  Макет: {layout || detectedLayout}
                </Text>
                <Text style={{color: 'white', fontSize: 9}}>
                  Фото: {photo?.length}
                </Text>
              </View>
            )}
            {renderLayout()}
          </View>
        ) : (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>Фото недоступны</Text>
          </View>
        )}
        {/* Show pagination for vertical layout and multiple photos */}
        {(layout === 'vertical' || detectedLayout === 'vertical') &&
          photo?.length > 1 &&
          photo?.length <= 5 && (
            <View style={styles.paginationWrapper}>
              {photo?.map((elm, i) => (
                <View
                  key={i}
                  style={[
                    styles.pagination,
                    i === active && {
                      backgroundColor: AppColors.GoldenTainoi_Color,
                      borderRadius: 50,
                    },
                  ]}
                />
              ))}
            </View>
          )}
        {/* {!fullScreen && <View>
        {(photo[active]?.video && showSlider) && !isExpanded &&
          <View style={styles.slider}>
            <Text style={[Styles.whiteSemiBold13, { textAlign: 'center' }]}>{formatTime(currentTime[active])}</Text>
            <Sliders
              style={styles.seekSlider}
              value={currentTime[active]}
              minimumValue={0}
              maximumValue={duration[active]}
              onValueChange={onSeek}
              minimumTrackTintColor="#FFFFFF"
              maximumTrackTintColor="#000000"
              thumbTintColor="#FFC24B"
            />
            <Text style={[Styles.whiteSemiBold13, { textAlign: 'center' }]}>{formatTime(duration[active])}</Text>
          </View>
        }
      </View>} */}
        {openSlider && (
          <SliderModal
            modalVisible={openSlider}
            activePhoto={active}
            photo={photo}
            close={() => setOpenSlider(false)}
          />
        )}
      </View>
    );
  },
  (prevProps, nextProps) => {
    return (
      prevProps.photo?.length === nextProps.photo?.length &&
      prevProps.index === nextProps.index &&
      prevProps.data?.id === nextProps.data?.id &&
      prevProps.viewableItems === nextProps.viewableItems &&
      prevProps.long === nextProps.long &&
      prevProps.color === nextProps.color &&
      prevProps.font === nextProps.font &&
      prevProps.layout === nextProps.layout &&
      prevProps.data?.description === nextProps.data?.description
    );
  },
);

const styles = StyleSheet.create({
  img: {
    width: windowWidth,
    flexShrink: 0,
    justifyContent: 'center',
  },
  pagination: {
    width: 6,
    height: 6,
    backgroundColor: '#CCD6DF',
    marginHorizontal: 5,
    borderRadius: 50,
  },
  paginationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 10,
    position: 'absolute',
    left: 0,
    right: 0,
  },
  hover: {
    marginHorizontal: 7,
    zIndex: 99999,
    backgroundColor: 'rgba(0,0,0,0.7)',
    position: 'absolute',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderRadius: 20,
    paddingVertical: 3,
    top: 50,
    height: 'auto',
  },
  slider: {
    bottom: 100,
    position: 'absolute',
    zIndex: 99999,
    width: '100%',
    height: 40,
    flexDirection: 'row',
    bottom: 5,
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
  },
  seekSlider: {
    width: '80%',
    height: 40,
  },
  horizontalStackContainer: {
    width: windowWidth - 10,
    alignSelf: 'center',
    backgroundColor: 'transparent',
    overflow: 'hidden',
    paddingVertical: 5,
  },
  stackedPhotoContainer: {
    marginBottom: 10,
    marginHorizontal: 5,
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  emptyContainer: {
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    margin: 10,
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});
