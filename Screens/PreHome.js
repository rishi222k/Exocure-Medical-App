import { StyleSheet, Text, View,ImageBackground,Image,TouchableOpacity,Button} from 'react-native'
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import React from 'react'

const PreHome = () => {

  const navigation = useNavigation();

  const [loaded] = useFonts({
    CircularXXTTBold: require('../assets/fonts/CircularXXTTBold.ttf'),
    CircularXXTTMedium: require('../assets/fonts/CircularXXTTMedium.ttf'),
    CircularXXTTRegular: require('../assets/fonts/CircularXXTTRegular.ttf'),
    SFNSBold: require('../assets/fonts/SFNSBold.ttf'),
    SFNSThin: require('../assets/fonts/SFNSThin.ttf'),
    SFProDisplayHeavy: require('../assets/fonts/SFProDisplayHeavy.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View>
    <ImageBackground source={require('../Images/PreHome-Bg.png')} resizeMode="cover" style={styles.imagebg}>
    <View style={styles.container}>
    <Image source={require('../Images/Logo.png')} resizeMode="contain" style={{width:140,height:140}}/>
    <Text style={{fontFamily:"SFNSBold",fontSize:40,marginVertical:15}}>MedFS</Text>
    <Text style={{fontFamily:"CircularXXTTRegular",fontSize:19,width:"90%",color:'#6F6F6F',lineHeight:27}}>A medical application to assess early signs of peripheral neuropathy and prevent Diabetic foot syndrome (DFS)</Text>
    </View>
    <View style={{height:'20%',width:'100%'}}>

    <TouchableOpacity 
    onPress={()=> navigation.navigate("SignUp")}>
    <View style={styles.but1}>
    <Text style={{fontFamily:"CircularXXTTBold",color:"white", fontSize:18,textAlign:'center'}}>Create an account</Text>
    </View>
    </TouchableOpacity>

    <TouchableOpacity
     onPress={()=> navigation.navigate("Login")}>
    <View style={styles.but2}>
    <Text style={{fontFamily:"CircularXXTTBold",color:"#FFB31D", fontSize:18,textAlign:'center',}}>Login</Text>
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
    paddingVertical:11,
    alignSelf:'center',
    borderWidth: 3,
    borderColor:"#FFB31D",
  }
})