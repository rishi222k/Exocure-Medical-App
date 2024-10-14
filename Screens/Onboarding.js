import { StyleSheet, Text, View,ScrollView,Image,TouchableOpacity } from 'react-native'
import Frontarrow from '../Images/frontarrow.svg'
// import firestore from '@react-native-firebase/firestore';
import { doc, updateDoc,increment} from "firebase/firestore";
import {db} from "../firebaseConfig"
import {AuthContext} from '../Navigation/AuthProvider';
import React,{useState, useContext,useEffect,useRef} from 'react'
import { useNavigation } from '@react-navigation/native';
// import BluetoothSerial from 'react-native-bluetooth-serial'

const Onboarding = () => {
    const navigation = useNavigation();
    const {user,logout} = useContext(AuthContext);

    // const toggleSwitch=()=>{
    //   BluetoothSerial.write("T")
    //   .then((res) => {
    //     console.log(res);
    //     console.log('Successfuly wrote to device');
    //   })
    //   .catch((err) => console.log(err.message))
    // }

    const onPressone=()=>{
      navigation.navigate("Diagnosis");
    };

    const onPresstwo= async()=>{
      const QRef = doc(db, "Diagnosis", user.uid);
      await updateDoc(QRef,{
        Qcount:increment(1),
      }).then(() => {
          console.log('Count updated on cloud firestore!');
      }).catch((err=>{
        console.log(err);
      }));
    };

  return (
    <ScrollView style={{backgroundColor:"#fff",height:"100%"}}>
    <View style={{backgroundColor:"#fff",height:"100%",paddingHorizontal:"6%"}}>
    <View style={{alignItems:"center"}}>
    <Image
        source={require('../Images/Onboarding.png')} 
        resizeMode="contain" 
        style={{width:150,height:150,marginTop:35}}
      />
      <Text style={{fontFamily:"SF-Pro-Bold",fontSize:30,marginBottom:25}}> Get Ready </Text>
    </View>
    <Text style={{fontFamily:"CircularXX-TTMedium", fontSize:17, color:'#4B4B4B', lineHeight:27, marginTop:20, marginBottom:25}}>
  1. Position your feet on the designated markings of the device{'\n'}
  2. Remain still in a quiet setting until the diagnosis is complete.{'\n'}
  3. Follow the sequence of vibrations on each foot and respond to the screen prompts.{'\n'}
  4. Complete the 16-step process for each leg, starting with the right and then the left.{'\n'}
  5. Ensure you answer all 16 questions for accurate results.
</Text>
      <TouchableOpacity 
         onPress={()=>{
           onPressone();
           onPresstwo();
          //  toggleSwitch();
           }}>
          <View style={styles.but1}>
            <Text style={{fontFamily:"CircularXX-TTBold",color:"white", fontSize:18,textAlign:'center',marginRight:10}}>
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