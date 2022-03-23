import { View, Text,Button } from 'react-native'
import {AuthContext, AuthProvider} from '../Navigation/AuthProvider';
import React, { useContext } from 'react'

const Profile = () => {
  const {user,logout} = useContext(AuthContext);
  return (
    <View style={{backgroundColor:"#fff",height:"100%"}}>
    <View style={{alignItems:'center',justifyContent:'center'}}>
      <Text style={{marginBottom:15 }}>Welcome {user.uid} </Text>
      <Button
      onPress={()=> logout()}
      title="Log Out"
      color="#841584"
    />
    </View>
    </View>
  )
}

export default Profile