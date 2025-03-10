import { StyleSheet, Text, View,TouchableOpacity,FlatList } from 'react-native'
import React, {useState,useEffect,useContext,useReducer } from 'react'
import NavHeader from '../Components/NavHeader';
import { useNavigation } from '@react-navigation/native';
import Backarrow from '../Images/backarrow.svg'
import DeviceIcon from '../Images/microchip.svg'
import DeviceCard from '../Components/DeviceCard';
// import BluetoothSerial from 'react-native-bluetooth-serial'
import Scanning from '../DummyScreens/Scanning';
var _ = require('lodash');


const Connect = () => {

  const navigation = useNavigation();
  const [isEnabled, setisEnabled] = useState(true);
  const [devices, setdevices] = useState([]);
  const [unpaired, setunpaired] = useState([]);
  const [connected, setconnected] = useState(false);

  // useEffect(() => {

  //   let cancel = false;

  //   BluetoothSerial.enable()
  //   .then(() => {
  //     if (cancel) return;
  //     console.log("Bluetooth is enabled")})
  //   .catch((err) => Toast.showShortBottom(err.message))

  //   BluetoothSerial.discoverUnpairedDevices()
  //     .then((unpairedDevices) => {
  //       if (cancel) return;
  //       const uniqueDevices = _.uniqBy(unpairedDevices, 'id');
  //       console.log(uniqueDevices);
  //       setunpaired(uniqueDevices)
  //     })
  //     .catch((err) => console.log(err.message))

  //   Promise.all([
  //     BluetoothSerial.isEnabled(),
  //     BluetoothSerial.list()
  //   ])
  //   .then((values) => {
  //     if (cancel) return;
  //     const [ isEnabled, devices ] = values
 
  //     setisEnabled(isEnabled);
  //     setdevices(devices);
  //   })

  //   BluetoothSerial.on('bluetoothEnabled', () => {
 
  //     Promise.all([
  //       BluetoothSerial.isEnabled(),
  //       BluetoothSerial.list()
  //     ])
  //     .then((values) => {
  //       if (cancel) return;
  //       const [ isEnabled, devices ] = values
  //       setdevices(devices);
  //     })
 
  //     BluetoothSerial.on('bluetoothDisabled', () => {
 
  //       setdevices([]);
 
  //     })
  //     BluetoothSerial.on('error', (err) => console.log(`Error: ${err.message}`))
 
  //   })
  //   return () => { 
  //   cancel = true;
  // }
  // }, []);


  // const disable =()=> {
  //   BluetoothSerial.disable()
  //   .then((res) => setisEnabled(false))
  //   .catch((err) => Toast.showShortBottom(err.message))
  // }

  
  return(
    // <>
    // {devices.length==0 ? <Scanning/>:
    <>
    <View style={{backgroundColor:"#fff",height:"100%"}}>
    <Backarrow
      width={25}
      height={25}
      style={{marginLeft:15,marginTop:20}}
      onPress={()=>{navigation.navigate('TabNavigation', { screen: 'Sense' })}}
    />
    <View style={{backgroundColor:"#fff",height:"100%",paddingHorizontal:"6%"}}>
    <Text style={{fontFamily:"SF-Pro-Bold",fontSize:25,marginVertical:25}}> Devices Nearby </Text>

    {/* <FlatList
        keyExtractor={(item) => item.id}
        data={devices}
        renderItem={({ item }) => <DeviceCard device={item} />}
        style={{marginBottom:150}}
      /> */}
      <DeviceCard setconnected={setconnected}/>
    </View>
    </View>
    <View style={{height:"15%", position:"absolute",elevation:10,bottom:0,backgroundColor:"white",width:"100%"}}>
    {connected && (<TouchableOpacity 
    onPress={()=>{
      navigation.navigate("OnBoarding")}}>
          <View style={styles.but2}>
            <Text style={{fontFamily:"CircularXX-TTBold",color:"white", fontSize:16,textAlign:'center'}}>
            Start Diagnosis 
            </Text>
          </View>
        </TouchableOpacity>
    )}
    </View> 
    </>

    // }
    // </>
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


    

