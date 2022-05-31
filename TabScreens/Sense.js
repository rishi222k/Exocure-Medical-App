import { View, Text,Button,ScrollView,TouchableOpacity, StyleSheet, } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import SensIllus from '../Images/SenseIllus.svg'
import Plus from '../Images/plus.svg'
import firestore from '@react-native-firebase/firestore';
import {AuthContext} from '../Navigation/AuthProvider';
import React,{useState, useContext,useEffect,useRef} from 'react'


const Sense = () => {

  const navigation = useNavigation();
  const {user,logout} = useContext(AuthContext);

  useEffect(() => {

    const uploaddata=async()=>{

      await firestore().collection('Diagnosis').doc(user.uid).set({
        cleft:0,
        cright:0,
        sense1:true,
        sense2:true,
        sense3:true,
        sense4:true,
        sense5:true,
        sense6:true,
        sense7:true,
        sense8:true,
        sense9:true,
        sense10:true,
        sense11:true,
        sense12:true,
        sense13:true,
        sense14:true,
        sense15:true,
        sense16:true,
        diagcheck:false,
        Qcount:0,
        severity:null,
      })
      .then(() => {
        console.log('Sense data set on cloud firestore!');
      });
    }
  
    uploaddata();
  
    
  }, [])

  return (
    <ScrollView style={{backgroundColor:"#fff",height:"100%",}}>
    <View style={{backgroundColor:"#fff",height:"100%",paddingHorizontal:"7%"}}>
    <Text style={{fontFamily:"SFNSBold",fontSize:25,marginTop:30}}>Connect a new device </Text>
    <Text style={{fontFamily:"CircularXXTTRegular",fontSize:19,color:'#4C4C4C',lineHeight:27,marginTop:20}}>To begin the foot detection, a MedFS device needs to be connected with the app via Bluetooth. Keep the device close to your mobile before establishing a connection. </Text>

    <View style={{width:"100%",alignItems:"center",marginTop:30,}}>
    <SensIllus
      width={270}
      height={270}
    /></View>

    <TouchableOpacity 
         onPress={()=>{navigation.navigate("Connect")}}>
          <View style={styles.but1}>
            <Text style={{fontFamily:"CircularXXTTBold",color:"white", fontSize:18,textAlign:'center',marginRight:10}}>
            Set up now 
            </Text>
            <Plus 
            width={15}
            height={15}
            />
          </View>
      </TouchableOpacity>
    
    </View>
    </ScrollView>
  )
}

export default Sense

const styles = StyleSheet.create({
  but1:{
    width:"80%",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#FFB31D",
    borderRadius:5,
    marginBottom:45,
    paddingVertical:12,
    alignSelf:'center',
    marginTop:25
  },
})