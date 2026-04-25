import React, { useCallback } from 'react';
import { View, Text, Keyboard, StyleSheet, Touchable } from 'react-native';
import {
  BottomSheetBackdrop,
  TouchableOpacity,
} from '@gorhom/bottom-sheet';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Styles } from '../../styles/Styles';
import { AddBlackListAction, HidenTabNavigation, ShowTabNavigation } from '../../store/action/action';
import BottomSheet from '@gorhom/bottom-sheet';
import { ScrollView } from 'react-native-gesture-handler';
import { t } from '../lang';


export const SpamModal = ({ close, postUserId, addToblack }) => {
  const staticdata = useSelector(st => st.static);
  const mainData = useSelector(st => st.mainData);
  const lang = mainData.lang;

  const getReportReasons = (language) => {
    if (language === 'en') {
      return [
        {
          mainTitle: "Child exploitation or abuse",
          item: [],
          isChildSafety: true
        },
        {
          mainTitle: "Harassment or unwanted contact",
          item: []
        },
        {
          mainTitle: "Sale or advertising of restricted items",
          item: []
        },
        {
          mainTitle: "Nudity or sexual content",
          item: []
        },
        {
          mainTitle: "Fraud, deception, or spam",
          item: []
        },
        {
          mainTitle: "False information",
          item: []
        },
        {
          mainTitle: "I don't like this",
          item: []
        },
      ];
    } else {
      return [
        {
          mainTitle: "Эксплуатация или жестокое обращение с детьми",
          item: [],
          isChildSafety: true
        },
        {
          mainTitle: "Травля или нежелательный контакт",
          item: []
        },
        {
          mainTitle: "Продажа или реклама товаров с ограничениями",
          item: []
        },
        {
          mainTitle: "Изображение обнаженного тела или действий сексуального характера",
          item: []
        },
        {
          mainTitle: "Мошенничество, обман или спам",
          item: []
        },
        {
          mainTitle: "Ложная информация",
          item: []
        },
        {
          mainTitle: "Мне это не нравится",
          item: []
        },
      ];
    }
  };

  const arr = getReportReasons(lang);

  const dispatch = useDispatch();
  const renderBackdrop = useCallback(
    props => (
      <BottomSheetBackdrop
        {...props}
        animatedIndex={{
          value: 1,
        }}
        opacity={0.1}
      />
    ),
    [],
  );

  useEffect(() => {
    dispatch(HidenTabNavigation())
  }, [])


  const addToBlackList = () => {
    addToblack(postUserId)
    dispatch(AddBlackListAction({ 'user_id': postUserId }, staticdata.token))
  }






  return (
    <BottomSheet
      index={0}
      snapPoints={['60%']}
      containerStyle = {{zIndex:99999}}
      onClose={() => {
        dispatch(ShowTabNavigation())
        close()
      }}
      enablePanDownToClose={true}
      backdropComponent={renderBackdrop}>
      <ScrollView>
        <View >
          <Text style={[Styles.darkSemiBold16, { textAlign: 'center' }]}>
            {lang === 'en' ? 'Report' : 'Пожаловаться'}
          </Text>
          <View style={{ alignItems: 'center', justifyContent: 'space-between', marginBottom: 30, marginTop: 20, gap: 10 }}>
            <Text style={[Styles.darkMedium12, { textAlign: 'center' }]}>
              {lang === 'en'
                ? 'Why do you want to report\nthis post?'
                : 'Почему вы хотите пожаловаться\nна эту публикацию?'}
            </Text>
            <Text style={[Styles.darkMedium12, { textAlign: 'center' }]}>
              {lang === 'en'
                ? 'Your report is anonymous. If someone is in\nimmediate danger, don\'t wait - call your\nlocal emergency services.'
                : 'Ваша жалоба является анонимной. Если кому-\nто угрожает опасность, не ждите - позвоните\nв местную службу спасения.'}
            </Text>
          </View>
          {arr.map((elm, i) => {
            return <TouchableOpacity
              key={i}
              activeOpacity={1}
              onPress={() => {
                addToBlackList()
                close()
                dispatch(ShowTabNavigation())
              }}
              style={[
                styles.item,
                i == arr.length - 1 && { borderBottomWidth: 0.5 },
                elm.isChildSafety && styles.childSafetyItem
              ]}>
              <Text style={[
                Styles.balihaiMedium12,
                elm.isChildSafety && styles.childSafetyText
              ]}>
                {elm.mainTitle}
              </Text>
              {elm.isChildSafety && (
                <Text style={styles.urgentTag}>
                  {lang === 'en' ? '🚨 URGENT' : '🚨 СРОЧНО'}
                </Text>
              )}
            </TouchableOpacity>
          })}

        </View>
      </ScrollView>
    </BottomSheet>
  );
}

const styles = StyleSheet.create({
  item: {
    borderTopWidth: 0.5,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderColor: '#cccccc',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  childSafetyItem: {
    backgroundColor: '#fff5f5',
    borderLeftWidth: 3,
    borderLeftColor: '#d32f2f'
  },
  childSafetyText: {
    color: '#d32f2f',
    fontWeight: '600'
  },
  urgentTag: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#d32f2f'
  }
})
