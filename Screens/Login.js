import { StyleSheet, Text, View,Image,ScrollView,TouchableOpacity } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper';
import NavHeader from '../Components/NavHeader'
import Googlesvg from '../Images/google.svg';
import Facebooksvg from '../Images/facebook-logo-2019.svg';
import { useNavigation } from '@react-navigation/native';
import { useState } from "react";

const Login = () => {

  const navigation = useNavigation();

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

        <Text style={{fontFamily:"SFNSBold",fontSize:25,marginBottom:20}}>Welcome Back !</Text>
        <View style={{alignItems:'center',marginBottom:30,}}>
          <TextInput
            placeholder='Enter your email'
            label="Email Address"
            mode='outlined'
            value={email}
            style={styles.text}
            theme={{colors: { background: '#fff',primary:'#0012FF'},}}
            onChangeText={(text) => setEmail(text)}
            spellCheck={false}
          />
          <TextInput
            placeholder='Enter password'
            label="Password"
            mode='outlined'
            secureTextEntry={true}
            value={password}
            style={[styles.text,{marginBottom:15}]}
            theme={{colors: { background: '#fff',primary:'#0012FF'},}}
            onChangeText={(text) => setPassword(text)}
          />
        </View>

        <TouchableOpacity>
          <View style={styles.but1}>
            <Text style={{fontFamily:"CircularXXTTBold",color:"white", fontSize:18,textAlign:'center'}}>Login with email</Text>
          </View>
        </TouchableOpacity>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flex: 1, height: 1, backgroundColor: '#CDCDCD',marginTop:1}} />
            <View>
            <Text 
            style={{fontFamily:"CircularXXTTMedium",paddingHorizontal:7,textAlign: 'center',color:"#CDCDCD",fontSize:17}}>
            Or Login with 
            </Text>
            </View>
          <View style={{flex: 1, height: 1, backgroundColor: '#CDCDCD',marginTop:1}} />
        </View>

        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-around', marginTop:40,  marginBottom:40}}>
        <TouchableOpacity>
          <View style={styles.ops}>
            <Googlesvg 
            width={30}
            height={30}
            /></View>
        </TouchableOpacity>
      
        <TouchableOpacity>
          <View style={styles.ops}>
            <Facebooksvg 
            width={31}
            height={31}
            /></View>
        </TouchableOpacity>
        </View>
      
      <Text style={{fontFamily:"CircularXXTTMedium",fontSize:17,width:"95%",color:"#6F6F6F", marginBottom:35,textAlign:'center'}}> Don't have an existing account? {'\n'} 
        <Text 
        style={{fontFamily:"CircularXXTTMedium",fontSize:17,color:"#FFB31D"}}
        onPress={()=> navigation.navigate("SignUp")}> Sign up here
        </Text>
      </Text>



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
},
text:{
  width:"95%",
  marginBottom:8
},

but1:{
  width:"80%",
  backgroundColor:"#FFB31D",
  borderRadius:5,
  marginBottom:45,
  paddingVertical:12,
  alignSelf:'center'
},

ops:{
  paddingHorizontal:50,
  paddingVertical:18,
  backgroundColor:"#F3F3F3",
  borderRadius:5,
}
})