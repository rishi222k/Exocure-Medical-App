import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
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

export default function App() {
  LogBox.ignoreLogs(['Reanimated 2']);
  return (
    <SafeAreaProvider>
    <StatusBar style='auto'/>
      <SafeAreaView style={styles.container}>
      {/* <SignedIn/> */}
      <AuthProvider>
      <NavAuth/>
      </AuthProvider>
      </SafeAreaView>
    </SafeAreaProvider>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height:'100%',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
});
