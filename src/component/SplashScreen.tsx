import React, { useState, useEffect } from "react";
import { Animated, Dimensions, StyleSheet, View,Easing } from "react-native";
import BootSplash from "react-native-bootsplash";
import LottieView from "lottie-react-native";
import Lottie from 'lottie-react-native';
import SplashScreen from "../component/animated";

type Props = {
  onAnimationEnd: () => void;
};

const AnimatedBootSplash: React.FC<Props> = ({ onAnimationEnd }) => {
  const [opacity] = useState(() => new Animated.Value(1));
  const [translateY] = useState(() => new Animated.Value(0));

  const { container } = BootSplash.useHideAnimation({
    manifest: require("../../assets/bootsplash_manifest.json"),
    logo: require("../../assets/ClarityLogo.svg"),
    statusBarTranslucent: true,
    navigationBarTranslucent: false,

    animate: () => {
      const { height } = Dimensions.get("window");

      console.log("Starting Animation Sequence"); // Debugging line

      Animated.stagger(250, [
        Animated.spring(translateY, {
          useNativeDriver: true,
          toValue: -50,
        }),
        Animated.spring(translateY, {
          useNativeDriver: true,
          toValue: height,
        }),
      ]).start();

      Animated.timing(opacity, {
        useNativeDriver: true,
        toValue: 0,
        duration: 150,
        delay: 350,
      }).start(() => {
        console.log("Animation Completed"); // Debugging line
        onAnimationEnd();
      });
    },
  });

  const AnimatedLottie = Animated.createAnimatedComponent(LottieView);

  return (
    <Animated.View style={[styles.container, { opacity }]}>
      <Animated.View {...container} style={styles.lottie}>
        <AnimatedLottie
          source={require('../../assets/animation/LottieLego.json')}
          autoPlay
          loop={true}
          onAnimationFinish={() => console.log("Lottie Animation Finished")} // Debugging line
          style={styles.lottie}
        />
      </Animated.View>
    </Animated.View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff", 
    position:"absolute"
    // Adjust according to your design
  },
  lottie: {
    width: 200, // Adjust according to your design
    height: 200, // Adjust according to your design
  },
});

export default AnimatedBootSplash;
