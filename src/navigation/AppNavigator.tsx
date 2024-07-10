import React, { useRef, useEffect } from 'react';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import analytics from '@react-native-firebase/analytics';
import HomePage from '../screen/HomePage';
import BootSplash from "react-native-bootsplash";
import About from '../screen/About';

export type RootStackParamList = {
  Splash: React.FC;
  Home: React.FC;
  About:React.FC
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  const navigationRef = useNavigationContainerRef();
  const routeNameRef = useRef<string>();

  const onStateChange = async () => {
    const currentRoute = navigationRef.getCurrentRoute();
    console.log('route', currentRoute)
    if (currentRoute && currentRoute.name) {
      const currentRouteName = currentRoute.name;
      // if (routeNameRef.current !== currentRouteName) {
      const data = await analytics().logScreenView({
        screen_name: currentRouteName,
        screen_class: currentRouteName,
      });
      routeNameRef.current = currentRouteName;
      console.log('data', data)
      }
    // }
  };

  return (
    <NavigationContainer ref={navigationRef} onStateChange={onStateChange} onReady={() => { BootSplash.hide(); }}>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    
    </NavigationContainer>
  );
};

export default AppNavigator;
