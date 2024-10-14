import { View, Text,Button,ScrollView,Image,StyleSheet,TouchableOpacity } from 'react-native'
import React,{ useEffect } from 'react'
import Donut from '../Components/Donut'
import { NavigationContainer,useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import QStack from '../Components/QStack';


const Diagnosis = () => {

  const navigation = useNavigation();
  const Stack= createStackNavigator();

  useEffect(() => {
    const Mtimer= setTimeout(() => {
      navigation.navigate('Acknowledgment');
    }, 83000); 
    return () => clearTimeout(Mtimer);
  });

  return (
    
    <ScrollView style={{backgroundColor:"#fff",height:"100%"}}>
    <View style={{backgroundColor:"#fff",height:"100%",paddingHorizontal:"6%"}}>
    
    <Donut/>
    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-around',}}>
    {/* <TouchableOpacity>
        <View style={[styles.but1,{backgroundColor:"#FFB31D",}]}>
            <Text style={{fontFamily:"CircularXX-TTBold",color:"white", fontSize:18,textAlign:'center'}}>
            Pause
            </Text>
          </View>
    </TouchableOpacity> */}
    <TouchableOpacity 
    onPress={()=>{
    navigation.navigate('OnBoarding');
    clearTimeout();
    }}>
        <View style={[styles.but1,{backgroundColor:"#FF5400",}]}>
            <Text style={{fontFamily:"CircularXX-TTBold",color:"white", fontSize:18,textAlign:'center'}}>
            Stop Diagnosis
            </Text>
          </View>
    </TouchableOpacity>
    </View>
    
    <QStack/>
    
    
    </View>
    </ScrollView>
  )
}

export default Diagnosis

const styles = StyleSheet.create({
  but1:{
    width:230,
    borderRadius:5,
    paddingVertical:13,
    alignSelf:'center',
    marginTop:25
  },
 
})