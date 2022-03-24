import { StyleSheet, Text, View,ScrollView,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import AckSymbol from '../Images/AckSymbol.svg'

const Acknowledgment = () => {

    const navigation = useNavigation();

  return (
    <ScrollView style={{backgroundColor:"#fff",height:"100%"}}>
    <View style={{backgroundColor:"#fff",height:"100%",paddingHorizontal:"6%"}}>
    <View style={{alignItems:"center"}}>
    <AckSymbol
        width={70}
        height={70}
        style={{marginTop:55,marginBottom:35}}
    />
    <Text style={{fontFamily:"SFNSBold",fontSize:30,marginBottom:25}}> Diagnosis Complete </Text>
    </View>

    <Text style={{fontFamily:"CircularXXTTMedium",fontSize:17,color:'#4B4B4B',lineHeight:25,marginTop:20,textAlign:"center",marginBottom:60,}}>Check out the  
    <Text style={{color:"#0012FF"}}
    onPress={()=> navigation.navigate('TabNavigation', { screen: 'Diagnostics' })}> diagnostics tab </Text>
    for the results of this diagnosis & check the 
    <Text  style={{color:"#0012FF"}}
    onPress={()=> navigation.navigate('TabNavigation', { screen: 'Health' })}> health tab </Text> 
    for necessary precautions and recommendations</Text>
    
    <TouchableOpacity 
    onPress={()=> navigation.navigate('TabNavigation', { screen: 'Diagnostics' })}>
    <View style={styles.but1}>
    <Text style={{fontFamily:"CircularXXTTBold",color:"white", fontSize:18,textAlign:'center'}}>Check your results</Text>
    </View>
    </TouchableOpacity>

    <TouchableOpacity
     onPress={()=> navigation.navigate('TabNavigation', { screen: 'Sense' })}>
    <View style={styles.but2}>
    <Text style={{fontFamily:"CircularXXTTBold",color:"#FFB31D", fontSize:18,textAlign:'center',}}>Exit</Text>
    </View>
    </TouchableOpacity>

    </View>
    </ScrollView>
  )
}

export default Acknowledgment

const styles = StyleSheet.create({
    but1:{
        width:"75%",
        backgroundColor:"#FFB31D",
        borderRadius:5,
        marginBottom:12,
        paddingVertical:12,
        alignSelf:'center'
      },
      but2:{
        width:"75%",
        borderRadius:5,
        marginBottom:12,
        paddingVertical:11,
        alignSelf:'center',
        borderWidth: 3,
        borderColor:"#FFB31D",
      }
})