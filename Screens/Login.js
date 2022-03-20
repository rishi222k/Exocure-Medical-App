import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper';
import NavHeader from '../Components/NavHeader'
import { useState } from "react";

const Login = () => {
useState
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [age, setAge] = useState("")
  const [password, setPassword] = useState("")

  return (
    <ScrollView style={{ backgroundColor:"#fff",height:"100%"}}>
      <View style={{paddingHorizontal:'6%', backgroundColor:"#fff",height:"100%"}}>
        <View style={styles.header}>
          <Image 
          source={require('../Images/Logo.png')}
          resizeMode="contain" 
          style={{width:55,height:55,marginRight:5}}
          />
          <Text style={{fontFamily:"SFNSBold",fontSize:30,marginTop:5,marginRight:15}}>MedFS</Text>
        </View>
      </View>
    </ScrollView>
  )
}

export default Login

const styles = StyleSheet.create({
  header:{
    backgroundColor:"#fff",
    paddingTop:35,
    paddingVertical:10,
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"row",
    marginBottom:20
}
})