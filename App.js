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

export default function App() {
  return (
    <SafeAreaProvider>
    <StatusBar style='auto'/>
      <SafeAreaView style={styles.container}>
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
