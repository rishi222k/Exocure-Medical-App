import { View, Text,Button,ScrollView,Image,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import Donut from '../Components/Donut'

const Diagnosis = () => {
  return (
    <ScrollView style={{backgroundColor:"#fff",height:"100%"}}>
    <View style={{backgroundColor:"#fff",height:"100%",paddingHorizontal:"6%"}}>
    <Donut/>
    </View>
    </ScrollView>
  )
}

export default Diagnosis

const styles = StyleSheet.create({})