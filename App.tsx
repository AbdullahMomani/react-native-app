// App.tsx
import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import CodePush from "react-native-code-push";

let codePushOptions = { checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME };
/**
 * 
 * @returns   useEffect(() => {
    SplashScreen.hide();
    
}, []); 
 */
const App: React.FC = () => {
  return <AppNavigator />;
};

export default CodePush(codePushOptions)(App);