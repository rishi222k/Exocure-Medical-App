import { StyleSheet, Text, View,Button } from 'react-native'
import {AuthContext, AuthProvider} from '../Navigation/AuthProvider';
import React, { useContext } from 'react'
import NavHeader from '../Components/NavHeader';
import { useNavigation } from '@react-navigation/native';


const Home = () => {

  const navigation = useNavigation();

  return(
    <View style={{backgroundColor:"#fff",height:"100%"}}>
    <Text> Hello Hello </Text>
    </View>
    
  )
}

export default Home

const styles = StyleSheet.create({})


    

