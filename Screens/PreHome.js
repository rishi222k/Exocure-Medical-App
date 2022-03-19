import { StyleSheet, Text, View,ImageBackground,Image} from 'react-native'
import React from 'react'

const PreHome = () => {
  return (
    <View>
    <ImageBackground source={require('../Images/PreHome-Bg.png')} resizeMode="cover" style={styles.imagebg}>
    <View style={styles.container}>
    <Image source={require('../Images/Logo.png')} resizeMode="contain" style={{width:140,height:140}}/>
    <Text style={{fontFamily:"SFNS-Bold",fontSize:35,marginVertical:15}}>MedFS</Text>
    <Text style={{fontFamily:""}}>A medical application to assess early signs of peripheral neuropathy to prevent Diabetic foot syndrome (DFS)</Text>
    <Text>PreHome</Text>
    </View>
    </ImageBackground>
    </View>
  )
}

export default PreHome

const styles = StyleSheet.create({
  imagebg: {
    height:'100%',
  },
  container:{
    height:'90%',
    paddingHorizontal:25,
    justifyContent:'center'
  }
})