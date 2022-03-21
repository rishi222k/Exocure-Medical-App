import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/Home'

const SignedIn = () => {
    const Stack = createStackNavigator();
  return (
    <NavigationContainer  style={{backgroundColor: '#fff'}}>
    <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} options={{headerShown:false}}/>
    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default SignedIn