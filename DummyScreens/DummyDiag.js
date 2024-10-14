import { View, Text,Button,ScrollView,Image,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const DummyDiag = () => {

  const navigation = useNavigation();

  return (
    <View style={{backgroundColor:"#fff",height:"100%",paddingHorizontal:"6%"}}>
    <Image 
      source={require('../Images/dummydiag.png')} 
      resizeMode="contain" 
      style={{width:155,height:155,alignSelf:"center",marginTop:60}}/>
      <Text style={{fontFamily:"SF-Pro-Bold",fontSize:26,marginBottom:5,color:"#CCCCCC",textAlign:"center",marginTop:45,}}>No Diagnostic Reports</Text>
      <Text style={{fontFamily:"CircularXX-TTMedium",fontSize:17,color:'#B1B1B1',lineHeight:25,marginTop:10,textAlign:"center",marginBottom:60,}}>You currently don't have any diagnosis reports. To generate health recommendations or diagnostic reports please start your diagnosis in the sense tab or click the button below.</Text>
      <TouchableOpacity
      onPress={()=>{navigation.navigate('TabNavigation', { screen: 'Sense' })}}>
        <View style={styles.but2}>
            <Text style={{fontFamily:"CircularXX-TTBold",color:"white", fontSize:18,textAlign:'center'}}>
            Start Diagnosis
            </Text>
          </View>
    </TouchableOpacity>
    </View>
  )
}

export default DummyDiag

const styles = StyleSheet.create({
    but2:{
        width:"70%",
        backgroundColor:"#FFB31D",
        borderRadius:5,
        paddingVertical:12,
        alignSelf:'center',
        marginTop:5,
        marginBottom:25
      },
})