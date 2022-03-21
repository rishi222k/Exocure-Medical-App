import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PreHome from '../Screens/PreHome';
import Login from '../Screens/Login';
import SignUp from '../Screens/SignUp';
import React from 'react'

const SignedOut = () => {
    const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
        <Stack.Screen name='PreHome' component={PreHome} options={{headerShown:false}}/>
        <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
        <Stack.Screen name='SignUp' component={SignUp} options={{headerShown:false}}/>
    </Stack.Navigator>
  )
}

export default SignedOut