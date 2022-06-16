import {View, Text, Easing, Animated, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

const Animation = () => {
  const opacity = useState(new Animated.Value(0))[0];

  const fadeInBall = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
      // easing: Easing.back(),
    }).start();
  };

  // const Fade = useState(new Animated.Value(0))[0];

  const FadeBa = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const leftValue = useState(new Animated.Value(0))[0];

  const moveBack = () => {
    Animated.timing(leftValue, {
      toValue: 200,
      duration: 2000,
      useNativeDriver: false,
      // easing: Easing.back,
    }).start();
  };

  const spring = useState(new Animated.Value(0))[0];

  const spin = () => {
    // spinValue.setValue(0);
    Animated.timing(spring, {
      toValue: 1,
      duration: 5000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Animated.View
        style={{
          height: 50,
          width: 50,
          backgroundColor: 'red',
          borderRadius: 100 / 2,
          // opacity: opacity,
          // marginLeft: leftValue,
        }}></Animated.View>
      <TouchableOpacity onPress={fadeInBall}>
        <Text>fadeInBall</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={spin}>
        <Text>spinnn</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={moveBack}>
        <Text>moveBack</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={FadeBa}>
        <Text>fade</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Animation;

// const styles = StyleSheet.create({
//   spin: {
//     borderRadius: 100 / 2,
//     height: 50,
//     width: 50,
//     // marginLeft:
//     backgroundColor: 'red',
//     marginLeft: spinValue,
//   },
// });
