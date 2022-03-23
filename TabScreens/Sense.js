import { View, Text,Button } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'


const Sense = () => {

  const navigation = useNavigation();
  return (
    <View style={{backgroundColor:"#fff",height:"100%"}}>
    <Text> Sense Tab </Text>
    </View>
  )
}

export default Sense