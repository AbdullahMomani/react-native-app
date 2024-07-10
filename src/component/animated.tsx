import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { useNavigation } from '@react-navigation/native';

type SplashScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Splash'>;

type Props = {
  navigation?: SplashScreenNavigationProp;
};

const SplashScreen: React.FC<Props> = ({ navigation }) => {
  const navigate=useNavigation()
  useEffect(() => {
    // Perform any actions you need to do when the splash screen is loaded
  }, []);

  const handleAnimationFinish = () => {
    // navigation.navigate('Home'); // Navigate to the Home page
  };

  return (
    <View style={styles.container}>
      <LottieView
        source={require('../../assets/animation/LottieLego.json')}
        autoPlay
        loop={true}
        onAnimationFinish={handleAnimationFinish}
        style={styles.animation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Background color for the splash screen
  },
  animation: {
    width: 200,
    height: 200,
  },
});

export default SplashScreen;