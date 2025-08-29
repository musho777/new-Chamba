import { useEffect, useRef, useState } from 'react';
import { View, TextInput, StyleSheet, Keyboard, TouchableOpacity, Text } from 'react-native';
import { AppColors } from '../styles/AppColors';
import { Styles } from '../styles/Styles';

export const ConfirmCode = ({ code, clear }) => {
  const ref = useRef();
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const [data, setData] = useState("");
  useEffect(() => {
    // if ((data.value, data.value1, data.value2, data.value3, data.value4)) {
    //   Keyboard.dismiss();
    //   let item =
    //     data.value + data.value1 + data.value2 + data.value3 + data.value4;
    //   }
    if (data.length == 5) {
      code(data);
    }
  }, [data]);
  useEffect(() => {
    if (clear) {
      setData("")
    }
  }, [clear]);
  return (
    <View >
      {/* <Text style={[Styles.darkMedium10, { marginTop: 10, marginBottom: 3 }]} nativeID="inputLabel">Введите данные</Text> */}
      <TextInput
        value={data}
        maxLength={5}
        onChangeText={(e) => setData(e)}
        style={styles.input}
        aria-label="Введите данные!"
        placeholder='Введите данные'
        accessibilityLabelledBy="inputLabel"
      />
      {/* <TouchableOpacity style={{ width: 48, height: 48 }} accessibilityLabel={"number1"}>
        <TextInput
          style={styles.input}
          accessible={false}
          // autoFocus
          value={data.value}
          ref={ref}
          keyboardType="numeric"
          accessibilityHint="Input for the 1 number"
          onChangeText={e => {
            if (e !== '') {
              setData({ ...data, value: e[e.length - 1] });
              // ref1.current.focus();
            }
          }}
          onKeyPress={({ nativeEvent }) => {
            if (nativeEvent.key === 'Backspace') {
              setData({ ...data, value: '' });
            }
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity style={{ width: 48, height: 48 }} accessibilityLabel={"number1"}>
        <TextInput
          accessible={false}
          style={styles.input}
          ref={ref1}
          value={data.value1}
          keyboardType="numeric"
          accessibilityHint="Input for the 2 number"
          onChangeText={e => {
            if (e !== '') {
              setData({ ...data, value1: e[e.length - 1] });
              ref2.current.focus();
            }
          }}
          onKeyPress={({ nativeEvent }) => {
            if (nativeEvent.key === 'Backspace') {
              setData({ ...data, value1: '' });
              if (data.value1 === '') {
                ref.current.focus();
              }
            }
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity accessibilityLabel={"number1"}>
        <TextInput
          style={styles.input}
          accessible={false}
          ref={ref2}
          value={data.value2}
          keyboardType="numeric"
          accessibilityHint="Input for the 3 number"
          onChangeText={e => {

            if (e !== '') {
              setData({ ...data, value2: e[e.length - 1] });
              ref3.current.focus();
            }
          }}
          onKeyPress={({ nativeEvent }) => {
            if (nativeEvent.key === 'Backspace') {
              setData({ ...data, value2: '' });
              if (data.value2 === '') {
                ref1.current.focus();
              }
            }
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity style={{ width: 48, height: 48 }} accessibilityLabel={"number1"}>
        <TextInput
          style={styles.input}
          accessible={false}
          ref={ref3}
          value={data.value3}
          keyboardType="numeric"
          accessibilityHint="Input for the 4 number"
          onChangeText={e => {
            if (e !== '') {
              setData({ ...data, value3: e[e.length - 1] });
              ref4.current.focus();
            }
          }}
          onKeyPress={({ nativeEvent }) => {
            if (nativeEvent.key === 'Backspace') {
              setData({ ...data, value3: '' });
              if (data.value3 === '') {
                ref2.current.focus();
              }
            }
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity style={{ width: 48, height: 48 }} accessibilityLabel={"number1"}>
        <TextInput
          style={styles.input}
          accessible={false}
          ref={ref4}
          value={data.value4}
          keyboardType="numeric"
          onChangeText={e => {
            if (e !== '') {
              setData({ ...data, value4: e[e.length - 1] });
            }
          }}
          onKeyPress={({ nativeEvent }) => {
            if (nativeEvent.key === 'Backspace') {
              setData({ ...data, value4: '' });
              if (data.value4 === '') {
                ref3.current.focus();
              }
            }
          }}
        />
      </TouchableOpacity> */}
    </View>
  );
};
const styles = StyleSheet.create({
  // input: {
  //   width: 48,
  //   height: 48,
  //   borderColor: AppColors.PattenseBlue_Color,
  //   borderWidth: 2,
  //   marginVertical: 15,
  //   marginHorizontal: 5,
  //   borderRadius: 10,
  //   textAlign: 'center',
  //   color: AppColors.Matterhorn_Color,
  //   fontFamily: 'Montserrat-Medium',
  // },
  input: {
    backgroundColor: AppColors.AliceBlue_Color,
    borderRadius: 50,
    padding: 7,
    textAlign: 'center',
    width: 200,
    paddingHorizontal: 20,
    paddingRight: 50,
    color: AppColors.Blcak_Color,
    position: 'relative',
    height: 48,
    color:"#000"
  },

});
