import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import SignedOut from './Navigation/SignedOut';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
    <StatusBar style='auto'/>
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <SignedOut/>
      </SafeAreaView>
    </SafeAreaProvider>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height:'100%',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
});
