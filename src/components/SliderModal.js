<<<<<<< HEAD
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
=======
import { Modal, StyleSheet, View } from 'react-native';
import { ModalSliderImg } from './ModalSliderImg';
import { BlurView } from '@react-native-community/blur';

export const SliderModal = ({ modalVisible, photo, activePhoto, close }) => {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={close}
            statusBarTranslucent={true}
        >
            <BlurView
                style={styles.centeredView}
                blurType="dark"
                blurAmount={40}
                reducedTransparencyFallbackColor="black"
            >
                <View style = {styles.wrapper}>
                <View style={styles.modalView}>
                    <ModalSliderImg close = {close} photo={photo} activePhoto={activePhoto} />
                </View>
                </View>
            </BlurView>
        </Modal>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        height:"100%",
        alignItems: 'center',
        justifyContent: 'center',
    },
    wrapper:{
        width:'100%',
        height:"100%",
        backgroundColor:'transparent'
    }
>>>>>>> 3ae3e5ce07e82409c0b0e19a787090959bacc2ff
});
