import React from 'react'
import { View, Text,Image,StyleSheet,ActivityIndicator} from 'react-native'

const MainLoading = () => {
  return (
    <View style={{backgroundColor:"#fff",height:"100%",paddingHorizontal:"6%"}}>
    <View style={styles.header}>
    <View style={styles.title}>
    <Image 
    source={require('../Images/Logo.png')}
    resizeMode="contain" 
    style={{width:110,height:110,marginRight:5}}
    />
    <Text style={{fontFamily:"SF-Pro-Bold",fontSize:40,marginTop:25,marginRight:15}}>Exocure</Text>
    </View>
    <ActivityIndicator size="large" color="#000ECA" />
    </View>
    </View>
  )
}

export default MainLoading

const styles = StyleSheet.create({
    header:{
        backgroundColor:"#fff",
        height:"100%",
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"column",
        paddingBottom:0,
    },
    title:{
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"row",
        "marginBottom":150
    }
})