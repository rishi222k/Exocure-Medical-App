import { StyleSheet, Text, View,ScrollView,Image,TouchableOpacity } from 'react-native'
import Frontarrow from '../Images/frontarrow.svg'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Onboarding = () => {
    const navigation = useNavigation();
  return (
    <ScrollView style={{backgroundColor:"#fff",height:"100%"}}>
    <View style={{backgroundColor:"#fff",height:"100%",paddingHorizontal:"6%"}}>
    <View style={{alignItems:"center"}}>
    <Image
        source={require('../Images/Onboarding.png')} 
        resizeMode="contain" 
        style={{width:150,height:150,marginTop:35}}
      />
      <Text style={{fontFamily:"SFNSBold",fontSize:30,marginBottom:25}}> Get Ready </Text>
    </View>
      <Text style={{fontFamily:"CircularXXTTMedium",fontSize:17,color:'#4B4B4B',lineHeight:27,marginTop:20}}>Place both your feet on top of the device and be still till the process is complete. Diagnosis for each leg is made sequentially (Right leg followed by the Left leg). Each of the eight motors on either leg run for 30 seconds. Est Time: 8 Min </Text>
      <Text style={{fontFamily:"CircularXXTTBold",fontSize:17,color:'#FFB31D',marginTop:35,marginBottom:7}}>Note: </Text>
      <Text style={{fontFamily:"CircularXXTTBold",fontSize:17,color:'#4B4B4B',}}>Make sure to finish scanning from all the 16 motors to get accurate results.</Text>
      <TouchableOpacity 
         onPress={()=>{navigation.navigate("Diagnosis")}}>
          <View style={styles.but1}>
            <Text style={{fontFamily:"CircularXXTTBold",color:"white", fontSize:18,textAlign:'center',marginRight:10}}>
            Start 
            </Text>
            <Frontarrow 
            width={15}
            height={15}
            />
          </View>
      </TouchableOpacity>
    </View>
    </ScrollView>
  )
}

export default Onboarding

const styles = StyleSheet.create({
    but1:{
        width:"65%",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#FFB31D",
        borderRadius:5,
        marginBottom:45,
        paddingVertical:12,
        alignSelf:'center',
        marginTop:35
      },
})