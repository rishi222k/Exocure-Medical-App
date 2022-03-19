import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import PreHome from './Screens/PreHome';
import Login from './Screens/Login';
import SignUp from './Screens/SignUp';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <SafeAreaProvider>
      <Stack.Navigator>
        <Stack.Screen name='PreHome' component={PreHome} options={{headerShown:false}}/>
        <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
        <Stack.Screen name='SignUp' component={SignUp} options={{headerShown:false}}/>
        </Stack.Navigator>
      </SafeAreaProvider>
      </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
});
