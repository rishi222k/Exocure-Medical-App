import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Connect from '../Screens/Connect'
import TabNavigation from './TabNavigation';
import Onboarding from '../Screens/Onboarding'
import NavHeader from '../Components/NavHeader';
import Acknowledgment from '../Screens/Acknowledgment';
import MedicalInfo from '../Screens/MedicalInfo';
import Diagnosis from '../Screens/Diagnosis';

const SignedIn = () => {
    const Stack = createStackNavigator();
  return (
    <>
    <NavHeader/>
    <NavigationContainer>
    <Stack.Navigator initialRouteName='TabNavigation'>
        <Stack.Screen name='TabNavigation' component={TabNavigation} options={{headerShown:false}}/>
        <Stack.Screen name='Connect' component={Connect} options={{headerShown:false}}/>
        <Stack.Screen name='OnBoarding' component={Onboarding} options={{headerShown:false}}/>
        <Stack.Screen name='Acknowledgment' component={Acknowledgment} options={{headerShown:false}}/>
        <Stack.Screen name='MedicalInfo' component={MedicalInfo} options={{headerShown:false}}/>
        <Stack.Screen name='Diagnosis' component={Diagnosis} options={{headerShown:false}} />
    </Stack.Navigator>
    </NavigationContainer>
    </>
  )
}

export default SignedIn