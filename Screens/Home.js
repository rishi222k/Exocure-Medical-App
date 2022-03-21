import { StyleSheet, Text, View,Button } from 'react-native'
import {AuthContext, AuthProvider} from '../Navigation/AuthProvider';
import React, { useContext } from 'react'


const Home = () => {

  const {user,logout} = useContext(AuthContext);

  return(
    <View style={{alignItems:'center',justifyContent:'center',backgroundColor:"#fff",height:"100%"}}>
      <Text style={{marginBottom:15}}>Welcome {user.uid} </Text>
      <Button
      onPress={()=> logout()}
      title="Log Out"
      color="#841584"
    />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})