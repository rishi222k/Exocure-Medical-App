import { StyleSheet, Text, View,ImageBackground,Image,TouchableOpacity,Button} from 'react-native'
import React from 'react'

const PreHome = () => {
  return (
    <View>
    <ImageBackground source={require('../Images/PreHome-Bg.png')} resizeMode="cover" style={styles.imagebg}>
    <View style={styles.container}>
    <Image source={require('../Images/Logo.png')} resizeMode="contain" style={{width:140,height:140}}/>
    <Text style={{fontFamily:"SFNS-Bold",fontSize:40,marginVertical:15}}>MedFS</Text>
    <Text style={{fontFamily:"CircularXXTT-Regular",fontSize:20.3,width:"85%",color:'#6F6F6F',lineHeight:27}}>A medical application to assess early signs of peripheral neuropathy to prevent Diabetic foot syndrome (DFS)</Text>
    </View>
    <View style={{height:'20%',width:'100%'}}>
    <TouchableOpacity>
    <View style={styles.but1}>
    <Text style={{fontFamily:"CircularXXTT-Bold",color:"white", fontSize:18,textAlign:'center'}}>Create an account</Text>
    </View>
    </TouchableOpacity>
    <TouchableOpacity>
    <View style={styles.but2}>
    <Text style={{fontFamily:"CircularXXTT-Bold",color:"#FFB31D", fontSize:18,textAlign:'center',}}>Login</Text>
    </View>
    </TouchableOpacity>
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
    height:'80%',
    paddingHorizontal:30,
    justifyContent:'center'
  },
  but1:{
    width:"70%",
    backgroundColor:"#FFB31D",
    borderRadius:5,
    marginBottom:12,
    paddingVertical:12,
    alignSelf:'center'
  },
  but2:{
    width:"70%",
    borderRadius:5,
    marginBottom:12,
    paddingVertical:12,
    alignSelf:'center',
    borderWidth: 3,
    borderColor:"#FFB31D",
  }
})