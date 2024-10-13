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

  const [loaded] = useFonts({
    CircularXXTTBold: require('./assets/fonts/CircularXXTTBold.ttf'),
    CircularXXTTMedium: require('./assets/fonts/CircularXXTTMedium.ttf'),
    CircularXXTTRegular: require('./assets/fonts/CircularXXTTRegular.ttf'),
    SFNSBold: require('./assets/fonts/SFNSBold.ttf'),
    SFNSThin: require('./assets/fonts/SFNSThin.ttf'),
    SFProDisplayHeavy: require('./assets/fonts/SFProDisplayHeavy.ttf'),
    SFProDisplaySemibold: require('./assets/fonts/SFProDisplaySemibold.ttf'),
  });

  if (!loaded) {
    return null;
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
