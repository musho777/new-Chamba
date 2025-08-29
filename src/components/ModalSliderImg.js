import React from 'react';
import {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import SwiperFlatList from 'react-native-swiper-flatlist';
import {AppColors} from '../styles/AppColors';
import {CloseSvg} from '../assets/svg/Svgs';

const windowWidth = Dimensions.get('window').width;

export const ModalSliderImg = ({photo, activePhoto, close, avatar}) => {
  const [active, setActive] = useState(activePhoto || 0);
  const [imageHeights, setImageHeights] = useState({});

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

  return (
    <View style={styles.wrapper}>
      <SwiperFlatList
        index={active}
        horizontal
        pagingEnabled
        showPagination={false}
        data={photo}
        onChangeIndex={({index}) => setActive(index)}
        style={styles.swiper}
        renderItem={({item, index}) => {
          const imageUrl = `https://chambaonline.pro/uploads/${item.photo}`;

          if (!imageHeights[index]) {
            calculateImageHeight(imageUrl, index);
          }

          const imageHeight = imageHeights[index] || 400;

          return (
            <View style={styles.imageWrapper}>
              <Image
                source={{uri: imageUrl}}
                style={[styles.image, {height: imageHeight}]}
                // resizeMode="contain"
              />
              <TouchableOpacity
                onPress={() => close()}
                style={{position: 'absolute', right: 10, top: 10}}>
                <CloseSvg color="red" />
              </TouchableOpacity>
            </View>
          );
        }}
      />
      {photo.length > 1 && (
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
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
  },
  swiper: {
    flexGrow: 0,
  },
  imageWrapper: {
    width: windowWidth,
    marginTop: 50,
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
