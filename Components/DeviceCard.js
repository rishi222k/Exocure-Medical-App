import { StyleSheet, Text, View,Button,ScrollView,TouchableOpacity } from 'react-native'
import DeviceIcon from '../Images/microchip.svg'
import React,{useEffect} from 'react'


const DeviceCard = ({device}) => {

  
    const Connection=(device)=>{
        BluetoothSerial.connect(device.id)
        .then((res) => {
          console.log(`Connected to device ${device.name}`);
          ToastAndroid.show(`Connected to device ${device.name}`, ToastAndroid.SHORT);
          setconnected(true);
        })
        .catch((err) => console.log((err.message)))
    };

  return (
    <View style={{paddingHorizontal:25,paddingVertical:25,backgroundColor:"#F2F2F2",borderRadius:5, marginBottom:20}}>
      <View style={{flexDirection:"row",alignItems:"center"}}>
      <DeviceIcon
        width={40}
        height={40}
        style={{marginRight:30}}
      />
      <Text style={{fontFamily:"CircularXXTTBold",fontSize:18,color:'black'}}>{device.name}</Text>
      </View>
      <TouchableOpacity 
      onPress={() => {Connection(device);}}>
          <View style={styles.but1}>
            <Text style={{fontFamily:"CircularXXTTBold",color:"white", fontSize:16,textAlign:'center'}}>
            Connect now 
            </Text>
          </View>
        </TouchableOpacity>
    </View>
  )
}

export default DeviceCard

const styles = StyleSheet.create({
    but1:{
        width:"90%",
        backgroundColor:"black",
        borderRadius:5,
        paddingVertical:12,
        alignSelf:'center',
        marginTop:25
      },
})