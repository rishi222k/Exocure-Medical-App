import { StyleSheet, Text, View,Button,ScrollView,TouchableOpacity,ToastAndroid, Alert} from 'react-native'
import DeviceIcon from '../Images/microchip.svg'
// import BluetoothSerial from 'react-native-bluetooth-serial'
import React,{useEffect,useState} from 'react'


const DeviceCard = params => {

  const [btntext, setbtntext] = useState("Connect Now");
  const [bcolor, setbcolor] = useState(false);

    const Connection=()=>{

      const Mtimer= setTimeout(() => {
        setbtntext("Connected");
        setbcolor(true);
        params.setconnected(true);
        Alert.alert("Connection Established",`Connected to Exocure Device`,
          [{ text: "OK", onPress: () => console.log("Connecting Bluetooth Device") }]);
      }, 2500);

        // BluetoothSerial.connect(device.id)
        // .then((res) => {
        //   console.log(`Connected to device ${device.name}`);
        //   setbtntext("Connected");
        //   setbcolor(true);
        //   Alert.alert("Connection Established",`Connected to device ${device.name}`,
        //   [{ text: "OK", onPress: () => console.log("OK Pressed") }]);
        // })
        // .catch((err) => 
        // Alert.alert("Error",(err.message),
        //   [{ text: "OK", onPress: () => console.log("OK Pressed") }]))
    };

  return (
    <>
    {/* { device.name && ( */}
    <View style={{paddingHorizontal:25,paddingVertical:25,backgroundColor:"#F2F2F2",borderRadius:5, marginBottom:20}}>
      <View style={{flexDirection:"row",alignItems:"center"}}>
      <DeviceIcon
        width={40}
        height={40}
        style={{marginRight:30}}
      />
      <Text style={{fontFamily:"CircularXX-TTBold",fontSize:18,color:'black',width:200}}>Exocure Device</Text>
      </View>
      <TouchableOpacity 
      onPress={() => {Connection();}}>
          <View style={[!bcolor? {backgroundColor:"black"}:{backgroundColor:"#0012FF"}, styles.but1]}>
            <Text style={{fontFamily:"CircularXX-TTBold",color:"white", fontSize:16,textAlign:'center'}}>
            {btntext} 
            </Text>
          </View>
        </TouchableOpacity>
    </View>
    {/* )} */}
  </>
  )
}

export default DeviceCard

const styles = StyleSheet.create({
    but1:{
        width:"90%",
        borderRadius:5,
        paddingVertical:12,
        alignSelf:'center',
        marginTop:25
      },
})