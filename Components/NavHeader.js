import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const NavHeader = () => {
  return (
    <View style={styles.header}>
    <Image 
    source={require('../Images/Logo.png')}
    resizeMode="contain" 
    style={{width:55,height:55,marginRight:5}}
    />
    <Text style={{fontFamily:"SFNSBold",fontSize:30,marginTop:5,marginRight:15}}>MedFS</Text>
    </View>
  )
}

export default NavHeader

const styles = StyleSheet.create({
    header:{
        backgroundColor:"#fff",
        height:"10%",
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"row",
        borderBottomColor:"#8D8D8D",
        borderBottomWidth:0.4,
    }
})