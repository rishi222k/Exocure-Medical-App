import { View, Text,Button,ScrollView,Image,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import FeetMap from '../Components/FeetMap'

const Diagnostics = () => {
  return (
    <ScrollView style={{backgroundColor:"#fff",height:"100%"}}>
    <View style={{backgroundColor:"#fff",height:"100%",paddingHorizontal:"6%"}}>
    <Text style={{fontFamily:"SFNSBold",fontSize:25,marginVertical:30}}>Diagnostics Report</Text>
    <FeetMap/>
    </View>
    </ScrollView>
  )
}

export default Diagnostics