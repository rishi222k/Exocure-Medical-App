import { StyleSheet, Text, View,ScrollView,Image,TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import BluetoothAnim from '../BluetoothAnim'
import BluetoothSerial from 'react-native-bluetooth-serial'

const Scanning = () => {

    const navigation = useNavigation();

  return (
    <ScrollView style={{backgroundColor:"#fff",height:"100%"}}>
    <View style={{alignItems:"center",marginTop:10}}>
      <BluetoothAnim width={330} height={330} />
      <Text style={{fontFamily:"CircularXXTTBold", color:"#3A3A3A", fontSize:20, width:"90%",textAlign:"center",marginTop:40}}>
      Looking for devices near you ... </Text>
      <Text style={{fontFamily:"CircularXXTTMedium", color:"#3A3A3A", fontSize:16, width:"70%",textAlign:"center",marginTop:15}}>
      Please wait for atleast 60 seconds before retrying </Text>
    </View>
    <TouchableOpacity
      onPress={()=>{
        navigation.navigate('TabNavigation', { screen: 'Sense' });
        BluetoothSerial.disable();
        }}>
        <View style={styles.but2}>
            <Text style={{fontFamily:"CircularXXTTBold",color:"white", fontSize:17,textAlign:'center'}}>
            Cancel
            </Text>
          </View>
    </TouchableOpacity>
    </ScrollView>
  )
}

export default Scanning

const styles = StyleSheet.create({
    but2:{
        width:"50%",
        backgroundColor:"#FFB31D",
        alignSelf:"center",
        borderRadius:5,
        marginBottom:45,
        paddingVertical:12,
        marginTop:85
    },
})