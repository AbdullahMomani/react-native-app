// src/screens/HomePage.tsx
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const About: React.FC = ({navigation}:any) => {
  const onPress=()=>{
    navigation.navigate('Home')
    console.log('navigated')
  }
  return (
    <View style={styles.container}>
      <Text>Welcome to the About Page!</Text>
      <Button
  onPress={onPress}
  title="Learn More"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default About;
