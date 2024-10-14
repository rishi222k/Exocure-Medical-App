import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Sense from '../TabScreens/Sense';
import Diagnostics from '../TabScreens/Diagnostics';
import Health from '../TabScreens/Health';
import Profile from '../TabScreens/Profile';

import SenseIcon from '../Images/Tabicons/SenseIcon.svg'
import SensePlus from '../Images/Tabicons/SensePlus.svg'
import HealthIcon from '../Images/Tabicons/HealthIcon.svg'
import HealthPlus from '../Images/Tabicons/HealthPlus.svg'
import DiagnosticsIcon from '../Images/Tabicons/DiagnosticsIcon.svg'
import DiagnosticsPlus from '../Images/Tabicons/DiagnosticsPlus.svg'
import ProfileIcon from '../Images/Tabicons/ProfileIcon.svg'
import ProfilePlus from '../Images/Tabicons/ProfilePlus.svg'
import NavHeader from '../Components/NavHeader';

const TabNavigation = () => {

    const Tab = createBottomTabNavigator();

  return (
    <>
    {/* <NavigationContainer independent={true}> */}
      <Tab.Navigator 
      screenOptions={({route}) => ({
        tabBarStyle:{
          height:100,
          paddingTop:15,},
        tabBarLabelStyle:{
          fontFamily:"SF-Pro-Semibold",
          marginTop:5,
          marginBottom:10,
        },

        tabBarIcon: ({ focused }) => {
            if (route.name === 'Sense') {
                if(focused)
                return <SensePlus/>
                else
                return <SenseIcon/>
            }
            else  if (route.name === 'Health') {
                if(focused)
                return <HealthPlus/>
                else
                return <HealthIcon/>
            }
            else  if (route.name === 'Diagnostics') {
                if(focused)
                return <DiagnosticsPlus/>
                else
                return <DiagnosticsIcon/>
            }
            else  if (route.name === 'Profile') {
                if(focused)
                return <ProfilePlus/>
                else
                return <ProfileIcon/>
            }
        },
        tabBarActiveTintColor: '#0012FF',
        tabBarInactiveTintColor: '#9F9F9F',
        headerShown:false
        })}>

        <Tab.Screen name="Sense" component={Sense}/>
        <Tab.Screen name="Health" component={Health}/>
        <Tab.Screen name="Diagnostics" component={Diagnostics}/>
        <Tab.Screen name="Profile" component={Profile}/>
      </Tab.Navigator>
    </>
  )
}

export default TabNavigation