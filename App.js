// import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import SignedOut from './Navigation/SignedOut';
import NavAuth from './Navigation/NavAuth';
import { AuthProvider } from './Navigation/AuthProvider';
import SignedIn from './Navigation/SignedIn';
import {LogBox } from 'react-native';
import { Platform } from 'react-native';

export default function App() {
  const [fontsLoaded] = useFonts({
    'CircularXX-TTBold': require('./assets/fonts/CircularXXTTBold.ttf'),
    'CircularXX-TTMedium': require('./assets/fonts/CircularXXTTMedium.ttf'),
    'CircularXX-TTRegular': require('./assets/fonts/CircularXXTTRegular.ttf'),
    'SF-Pro-Bold': require('./assets/fonts/SF-Pro-Text-Bold.otf'),
    'SF-Pro-Thin': require('./assets/fonts/SF-Pro-Text-Thin.otf'),
    'SF-Pro-Heavy': require('./assets/fonts/SF-Pro-Text-Heavy.otf'),
    'SF-Pro-Semibold': require('./assets/fonts/SF-Pro-Text-Semibold.otf'),
  });

  if (!fontsLoaded) {
    return null; // or a loading screen
  }

  LogBox.ignoreLogs(['Reanimated 2']);
  LogBox.ignoreLogs(['AsyncStorage']);
  return (
    <SafeAreaProvider>
    <StatusBar style='auto'/>
      <SafeAreaView edges={['top', 'left', 'right']} style={styles.container}>
      {/* <SignedIn/> */}
      <AuthProvider>
      <NavAuth/>
      </AuthProvider>
      {/* <View><Text>Hello World!</Text></View> */}
      </SafeAreaView>
      
    </SafeAreaProvider>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height:'100%',
    flex:1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
