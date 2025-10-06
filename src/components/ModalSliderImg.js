import React, {useCallback} from 'react';
import {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Animated, {
  Extrapolation,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
} from 'react-native-reanimated';
import Carousel from 'react-native-reanimated-carousel';
import {AppColors} from '../styles/AppColors';
import {CloseSvg} from '../assets/svg/Svgs';

const windowWidth = Dimensions.get('window').width;

export const ModalSliderImg = ({photo, activePhoto, close, avatar}) => {
  const [active, setActive] = useState(activePhoto || 0);
  const [imageHeights, setImageHeights] = useState({});
  const PAGE_WIDTH = windowWidth;
  const PAGE_HEIGHT = 600;

  const calculateImageHeight = (imageUrl, index) => {
    Image.getSize(
      imageUrl,
      (width, height) => {
        const ratio = height / width;
        const calculatedHeight = Math.min(windowWidth * ratio, 565);
        setImageHeights(prev => ({...prev, [index]: calculatedHeight}));
      },
      error => {
        console.error('Error getting image size:', error);
        setImageHeights(prev => ({...prev, [index]: 400}));
      },
    );
  };

  const animationStyle = useCallback(
    value => {
      'worklet';
      const zIndex = interpolate(value, [-1, 0, 1], [-1000, 0, -1000]);
      const translateX = interpolate(
        value,
        [-1, 0, 1],
        [-PAGE_WIDTH, 0, PAGE_WIDTH],
        Extrapolation.CLAMP,
      );
      const scale = interpolate(
        value,
        [-1, 0, 1],
        [0.8, 1, 0.8],
        Extrapolation.CLAMP,
      );
      const rotateY = interpolate(
        value,
        [-1, 0, 1],
        [-90, 0, 90],
        Extrapolation.CLAMP,
      );
      const opacity = interpolate(
        value,
        [-1, 0, 1],
        [0.5, 1, 0.5],
        Extrapolation.CLAMP,
      );

      return {
        transform: [
          {perspective: 800},
          {rotateY: `${rotateY}deg`},
          {translateX},
          {scale},
        ],
        opacity,
        zIndex,
      };
    },
    [PAGE_WIDTH],
  );

  return (
    <View style={styles.wrapper}>
      <Carousel
        defaultIndex={active}
        width={PAGE_WIDTH}
        height={PAGE_HEIGHT}
        data={photo}
        onSnapToItem={index => setActive(index)}
        pagingEnabled={true}
        snapEnabled={true}
        customAnimation={animationStyle}
        scrollAnimationDuration={600}
        renderItem={({item, index, animationValue}) => {
          const imageUrl = `https://chambaonline.pro/uploads/${item.photo}`;

          if (!imageHeights[index]) {
            calculateImageHeight(imageUrl, index);
          }
          const imageHeight = imageHeights[index] || 400;

          return (
            <CustomItem
              item={item}
              index={index}
              animationValue={animationValue}
              imageUrl={imageUrl}
              imageHeight={imageHeight}
              close={close}
            />
          );
        }}
      />
      {photo.length > 1 ? (
        <View style={styles.paginationWrapper}>
          {photo.map((_, i) => (
            <View
              key={i}
              style={[
                styles.pagination,
                i === active && {backgroundColor: AppColors.GoldenTainoi_Color},
              ]}
            />
          ))}
        </View>
      ) : (
        <View style={styles.paginationWrapper} />
      )}
    </View>
  );
};

const CustomItem = ({
  item,
  index,
  animationValue,
  imageUrl,
  imageHeight,
  close,
}) => {
  const maskStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      animationValue.value,
      [-1, 0, 1],
      ['#000000dd', 'transparent', '#000000dd'],
    );

    return {
      backgroundColor,
    };
  }, [animationValue]);

  return (
    <View style={styles.imageWrapper}>
      <Image
        source={{uri: imageUrl}}
        style={[styles.image, {height: imageHeight > 400 ? 520 : 400}]}
      />
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => close()}
        style={{position: 'absolute', right: 10, top: 10}}>
        <CloseSvg color="red" />
      </TouchableOpacity>
      <Animated.View
        pointerEvents="none"
        style={[
          {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          },
          maskStyle,
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
  },
  imageWrapper: {
    width: windowWidth,
    marginTop: 50,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: windowWidth,
    borderRadius: 10,
  },
  paginationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
  },
  pagination: {
    width: 6,
    height: 6,
    backgroundColor: '#CCD6DF',
    marginHorizontal: 5,
    borderRadius: 50,
  },
});
