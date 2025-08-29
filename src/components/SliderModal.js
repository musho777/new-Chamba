import React from 'react';
import {Modal, StyleSheet} from 'react-native';
import {ModalSliderImg} from './ModalSliderImg';
import {BlurView} from '@react-native-community/blur';

export const SliderModal = ({
  modalVisible,
  photo,
  activePhoto,
  close,
  avatar,
}) => {
  console.log(activePhoto);
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={close}
      statusBarTranslucent={true}>
      <BlurView
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
      </BlurView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
