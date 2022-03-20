import { StyleSheet, Text, View,Image,ScrollView,TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-paper';
import { useState } from "react";
import React from 'react'

const SignUp = () => {

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

    <Text style={{fontFamily:"SFNSBold",fontSize:25,marginBottom:20}}>Create an account</Text>
    <View style={{alignItems:'center'}}>
    <TextInput
      placeholder='Full Name'
      label="Full Name"
      mode='outlined'
      value={name}
      style={styles.text}
      theme={{colors: { background: '#fff',primary:'#FFB31D'},}}
      onChangeText={(text) => setName(text)}
    />
    <TextInput
      placeholder='Email Address'
      label="Email Address"
      mode='outlined'
      value={email}
      style={styles.text}
      theme={{colors: { background: '#fff',primary:'#FFB31D'},}}
      onChangeText={(text) => setEmail(text)}
      spellCheck={false}
    />
    <TextInput
      placeholder='Age'
      label="Age"
      mode='outlined'
      value={age}
      style={styles.text}
      theme={{colors: { background: '#fff',primary:'#FFB31D'},}}
      onChangeText={(text) => setAge(text)}
    />
    <TextInput
      placeholder='Password'
      label="Password"
      mode='outlined'
      secureTextEntry={true}
      value={password}
      style={[styles.text,{marginBottom:15}]}
      theme={{colors: { background: '#fff',primary:'#FFB31D'},}}
      onChangeText={(text) => setPassword(text)}
    />
    <Text style={{fontFamily:"CircularXXTTMedium",fontSize:15,width:"95%",color:"#6F6F6F", marginBottom:25,}}>By signing up, you agree to our <Text style={{color:"#FFB31D"}}> Terms & Conditions</Text> and <Text style={{color:"#FFB31D"}}>Privacy Policy </Text> </Text>

    </View>
    <TouchableOpacity 
    onPress={()=> navigation.navigate("SignUp")}>
    <View style={styles.but1}>
    <Text style={{fontFamily:"CircularXXTTBold",color:"white", fontSize:18,textAlign:'center'}}>Create an account</Text>
    </View>
    </TouchableOpacity>
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
  header:{
    backgroundColor:"#fff",
    height:"15%",
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"row",
    marginBottom:10
},

text:{
  width:"95%",
  marginBottom:8
},

but1:{
  width:"80%",
  backgroundColor:"#FFB31D",
  borderRadius:5,
  marginBottom:12,
  paddingVertical:12,
  alignSelf:'center'
},


})