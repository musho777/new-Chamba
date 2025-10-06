import React from 'react';
import {Modal, StyleSheet, View} from 'react-native';
import {ModalSliderImg} from './ModalSliderImg';
import {BlurView} from '@react-native-community/blur';

export const SliderModal = ({
  modalVisible,
  photo,
  activePhoto,
  close,
  avatar,
}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={close}
      statusBarTranslucent={true}>
      <View
        style={styles.centeredView}
        blurType="dark"
        blurAmount={40}
        overlayColor="rgba(0, 0, 255, 0.2)"
        reducedTransparencyFallbackColor="black">
        <ModalSliderImg
          avatar={avatar}
          close={close}
          photo={photo}
          activePhoto={activePhoto}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
});
