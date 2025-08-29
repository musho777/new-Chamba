import React, { useMemo, useRef, useState } from 'react';
import { View, Dimensions, StyleSheet, ActivityIndicator, Text, Animated, TouchableOpacity, Easing } from 'react-native';
import FastImage from 'react-native-fast-image';
import { ScrollView } from 'react-native-gesture-handler';
import { Styles } from '../styles/Styles';
import { InReview } from './InReview'
import RenderHtml from 'react-native-render-html';
import { SliderModal } from './SliderModal';

const windowWidth = Dimensions.get('window').width;

const SliderImage = React.memo(({ adminStatus, item, height, description, index, setIsExpanded, color, font, photo }) => {
  const isHTML = (str) => {
    const htmlPattern = /<\/?[a-z][\s\S]*>/i;
    return htmlPattern.test(str);
  };
  // const [loading, setLoading] = useState(true)
  const heightAnim = useRef(new Animated.Value(0)).current;
  // const [isExpanded, setIsExpanded] = useState(false);
  const [showText, setShowText] = useState(false)
  const [modalVisible, setModalVisible] = useState(false);
  const MAX_Height = 40;
  const Description = useMemo(() => {
    let desc = "";
    try {
      if (typeof description === 'string') {
        desc = JSON.parse(description);
      } else if (Array.isArray(description)) {
        desc = description;
      } else {
        desc = description || "";
      }
    } catch (error) {
      // If JSON parsing fails, try to use the description as is
      desc = description || "";
    }
    return desc;
  }, [description]);

  const startAnimation = (show) => {
    setIsExpanded(show)
    setShowText(!showText)
    // setIsExpanded()
    Animated.timing(heightAnim, {
      toValue: show ? height - 70 : 0,
      duration: 400,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  };
  // Handle both array and string descriptions
  const currentDescription = Array.isArray(Description) ? Description[index] : Description;
  const textOnly = currentDescription?.replace ? currentDescription.replace(/<[^>]+>/g, '') : currentDescription;
  
  const truncateText = (text) => {
    let modifiedContent = currentDescription;
    if (typeof modifiedContent === 'string') {
      if (!modifiedContent?.includes('color:')) {
        // Add a default white color to the body if no color is specified
        modifiedContent = `<div style="color: white;">${modifiedContent}</div>`;
      } else {
        // If color is defined, ensure all color: black is replaced with white
        modifiedContent = modifiedContent?.replace(/color:\s*(black|#000000|#000)/g, 'color: white');
      }
    }

    if (textOnly?.length > MAX_Height) {
      return typeof modifiedContent === 'string' ? modifiedContent.slice(0, MAX_Height) : modifiedContent;
    }
    return modifiedContent;
  };
  const truncatedText = truncateText(currentDescription);
  return <View >
    {/* {loading && <View style={[styles.loading, { height: height }]}>
      <ActivityIndicator color='#FFC24B' size={"large"} />
    </View>} */}
    <View>
      {/* {adminStatus == 0 &&
        <InReview borderRadius={0} height={height} />
      } */}
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => setModalVisible(true)}
      >
        <FastImage
          style={[{ height: height }, styles.img]}
          source={{
            uri: `https://chambaonline.pro/uploads/${item.photo}`,
            priority: FastImage.priority.high,
            cache: FastImage.cacheControl.immutable
          }}
          fallback={false}
          // onLoad={() => {
          //   setLoading(false)
          // }}
          resizeMode={FastImage.resizeMode.cover}
        />
      </TouchableOpacity>
    </View>
    {/* Description overlay */}
    {currentDescription && !showText && (
      <View style={styles.descriptionOverlay}>
        <View style={styles.descriptionContainer}>
          <View>
            {currentDescription && (
              <View>
                {isHTML(currentDescription) ? (
                  <RenderHtml
                    contentWidth={windowWidth - 40}
                    source={{ html: truncatedText }}
                  />
                ) : (
                  <Text style={[Styles.darkMedium13, { color: color ?? "white", fontFamily: font }]}>
                    {typeof currentDescription === 'string' ? currentDescription.slice(0, MAX_Height) : currentDescription}
                  </Text>
                )}
              </View>
            )}
            {isHTML(currentDescription) ? (
              <View style={{ marginBottom: 3 }}>
                {textOnly?.length > MAX_Height && (
                  <TouchableOpacity onPress={() => startAnimation(true)}>
                    <Text style={[Styles.balihaiMedium13, { color: 'white' }]}>Показать больше</Text>
                  </TouchableOpacity>
                )}
              </View>
            ) : (
              <View style={{ marginBottom: 3 }}>
                {currentDescription?.length > MAX_Height && (
                  <TouchableOpacity onPress={() => startAnimation(true)}>
                    <Text style={[Styles.balihaiMedium13, { color: 'white' }]}>Показать больше</Text>
                  </TouchableOpacity>
                )}
              </View>
            )}
          </View>
        </View>
      </View>
    )}

    <Animated.View style={[{ position: 'absolute', bottom: 0, backgroundColor: 'white', width: '100%', borderTopRightRadius: 10, borderTopLeftRadius: 10 }, { height: heightAnim }]}>
      <ScrollView
        nestedScrollEnabled={true}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        style={styles.textScrollContainer}>
        <TouchableOpacity style={{ padding: 10 }} activeOpacity={1}>
          {currentDescription &&
            <View>
              {isHTML(currentDescription) ?
                <RenderHtml
                  contentWidth={windowWidth - 40}
                  source={{ html: currentDescription }}
                /> :
                <Text style={[Styles.darkMedium13]}>
                  {currentDescription}
                </Text>
              }
            </View>
          }
          {currentDescription && <TouchableOpacity onPress={() => startAnimation(false)}>
            <Text style={[Styles.balihaiMedium13]}>
              Cвернуть
            </Text>
          </TouchableOpacity>}
        </TouchableOpacity>
      </ScrollView>
    </Animated.View>
    {photo && (
      <SliderModal
        activePhoto={index}
        modalVisible={modalVisible}
        close={() => setModalVisible(false)}
        photo={photo}
      />
    )}
  </View>

}, (prevProps, nextProps) => {
  return (
    prevProps.long === nextProps.long &&
    prevProps.index === nextProps.index &&
    prevProps.description === nextProps.description &&
    prevProps.color === nextProps.color &&
    prevProps.font === nextProps.font
  )
});

export default SliderImage;


const styles = StyleSheet.create({
  img: {
    width: windowWidth,
    flexShrink: 0,
    backgroundColor: '#dedcdc'
  },
  textScrollContainer: {
    maxHeight: 300,  // Limit height to enable scrolling within this area
    paddingRight: 10, // Add some padding for better readability
  },
  hover: {
    marginHorizontal: 7,
    zIndex: 99999,
    backgroundColor: "rgba(0,0,0,0.7)",
    position: 'absolute',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderRadius: 20,
    paddingVertical: 3,
    top: 50,
    height: 'auto',
  },
  loading: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
    width: '100%'
  },
  descriptionOverlay: {
    position: 'absolute',
    top: 45,
    left: 5,
    right: 5,
    zIndex: 100,
  },
  descriptionContainer: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginHorizontal: 5,
  }
});
