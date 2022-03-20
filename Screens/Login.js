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
    <View style={{paddingHorizontal:'6%', backgroundColor:"#fff",height:"100%"}}>
    <View style={styles.header}>
    <Image 
    source={require('../Images/Logo.png')}
    resizeMode="contain" 
    style={{width:55,height:55,marginRight:5}}
    />
    <Text style={{fontFamily:"SFNSBold",fontSize:30,marginTop:5,marginRight:15}}>MedFS</Text>
    </View>

    <Text>Welcome Back</Text>

    <TextInput
      placeholder='Email Address'
      label="Email Address"
      value={email}
      onChangeText={(text) => setEmail(text)}
    />
    
    <TextInput
      placeholder='Password'
      label="Password"
      secureTextEntry={true}
      value={password}
      onChangeText={(text) => setPassword(text)}
    />
    
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  header:{
    backgroundColor:"#fff",
    height:"15%",
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"row",
}
})