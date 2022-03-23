import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../Screens/Home'
import TabNavigation from './TabNavigation';
import NavHeader from '../Components/NavHeader';

const SignedIn = () => {
    const Stack = createStackNavigator();
  return (
    <>
    <NavHeader/>
    <NavigationContainer>
    <Stack.Navigator initialRouteName='TabNavigation'>
        <Stack.Screen name='TabNavigation' component={TabNavigation} options={{headerShown:false}}/>
        <Stack.Screen name='Home' component={Home} options={{headerShown:false}}/>
    </Stack.Navigator>
    </NavigationContainer>
    </>
  )
}

export default SignedIn