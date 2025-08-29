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
<<<<<<< HEAD
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
=======
import { AppColors } from '../styles/AppColors';
import { CloseSvg } from '../assets/svg/Svgs';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const ModalSliderImg = ({ photo, activePhoto,close }) => {
  const [active, setActive] = useState(activePhoto || 0);
>>>>>>> 3ae3e5ce07e82409c0b0e19a787090959bacc2ff

  return (
    <View style={styles.wrapper}>
      <SwiperFlatList
        index={active}
        horizontal
        pagingEnabled
        showPagination={false}
        data={photo}
<<<<<<< HEAD
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
=======
        onChangeIndex={({ index }) => setActive(index)}
        style={styles.swiper}
        renderItem={({ item }) => {
          let height = item.height - 200 > item.width ? 565 : 329;
          const imageUrl = `https://chambaonline.pro/uploads/${item.photo}`;

          return (
            <View style={styles.imageWrapper}>
              <Image
                source={{ uri: imageUrl }}
                style={[styles.image, { height }]}
                resizeMode="cover"
              />
              <TouchableOpacity onPress={()=>close()} style  = {{position:'absolute',right:10,top:10}}>
                <CloseSvg color='red'  />
>>>>>>> 3ae3e5ce07e82409c0b0e19a787090959bacc2ff
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
<<<<<<< HEAD
                i === active && {backgroundColor: AppColors.GoldenTainoi_Color},
=======
                i === active && { backgroundColor: AppColors.GoldenTainoi_Color },
>>>>>>> 3ae3e5ce07e82409c0b0e19a787090959bacc2ff
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
<<<<<<< HEAD
    height: '100%',
    width: '100%',
    justifyContent:'center',
=======
>>>>>>> 3ae3e5ce07e82409c0b0e19a787090959bacc2ff
  },
  swiper: {
    flexGrow: 0,
  },
  imageWrapper: {
    width: windowWidth,
<<<<<<< HEAD
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
=======
>>>>>>> 3ae3e5ce07e82409c0b0e19a787090959bacc2ff
  },
  image: {
    width: windowWidth,
    borderRadius: 10,
  },
  paginationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
<<<<<<< HEAD
    marginTop:25,
=======
    marginTop: 15,
>>>>>>> 3ae3e5ce07e82409c0b0e19a787090959bacc2ff
  },
  pagination: {
    width: 6,
    height: 6,
    backgroundColor: '#CCD6DF',
    marginHorizontal: 5,
    borderRadius: 50,
  },
});
