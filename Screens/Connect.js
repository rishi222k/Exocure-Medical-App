import { StyleSheet, Text, View,Button,ScrollView,TouchableOpacity } from 'react-native'
import {AuthContext, AuthProvider} from '../Navigation/AuthProvider';
import React, { useContext } from 'react'
import NavHeader from '../Components/NavHeader';
import { useNavigation } from '@react-navigation/native';
import Backarrow from '../Images/backarrow.svg'
import DeviceIcon from '../Images/microchip.svg'


const Connect = () => {

  const navigation = useNavigation();

  return(
    <>
    <ScrollView style={{backgroundColor:"#fff",height:"100%"}}>
    <Backarrow
      width={25}
      height={25}
      style={{marginLeft:15,marginTop:20}}
      onPress={()=>{navigation.navigate('TabNavigation', { screen: 'Sense' })}}
    />
    <View style={{backgroundColor:"#fff",height:"100%",paddingHorizontal:"6%"}}>
    <Text style={{fontFamily:"SFNSBold",fontSize:25,marginVertical:25}}> Devices Nearby </Text>

    <View style={{paddingHorizontal:25,paddingVertical:25,backgroundColor:"#F2F2F2",borderRadius:5, marginBottom:20}}>
      <View style={{flexDirection:"row",alignItems:"center"}}>
      <DeviceIcon
        width={40}
        height={40}
        style={{marginRight:30}}
      />
      <Text style={{fontFamily:"CircularXXTTBold",fontSize:18,color:'black'}}> MedFS Device 1 </Text>
      </View>
      <TouchableOpacity>
          <View style={styles.but1}>
            <Text style={{fontFamily:"CircularXXTTBold",color:"white", fontSize:16,textAlign:'center'}}>
            Connect now 
            </Text>
          </View>
        </TouchableOpacity>
    </View>
    
    

    </View>
    </ScrollView>
    <View style={{height:"15%", position:"absolute",elevation:10,bottom:0,backgroundColor:"white",width:"100%"}}>
    <TouchableOpacity 
    onPress={()=>{navigation.navigate("OnBoarding")}}>
          <View style={styles.but2}>
            <Text style={{fontFamily:"CircularXXTTBold",color:"white", fontSize:16,textAlign:'center'}}>
            Start Diagnosis 
            </Text>
          </View>
        </TouchableOpacity>
    </View>
    </>
    
  )
}

export default Connect

const styles = StyleSheet.create({
  but1:{
    width:"90%",
    backgroundColor:"black",
    borderRadius:5,
    paddingVertical:12,
    alignSelf:'center',
    marginTop:25
  },
  but2:{
    width:"80%",
    backgroundColor:"#FFB31D",
    borderRadius:5,
    paddingVertical:12,
    alignSelf:'center',
    marginTop:25
  },
})


    

