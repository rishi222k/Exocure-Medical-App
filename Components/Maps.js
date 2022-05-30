import { StyleSheet, Text, View,ScrollView,Image,TouchableOpacity } from 'react-native'
import React,{useState, useContext,useEffect} from 'react'
import { useNavigation } from '@react-navigation/native';
import MapView, { Marker } from "react-native-maps"
import { check, request, PERMISSIONS, RESULTS } from "react-native-permissions"
import Geolocation from "react-native-geolocation-service"
import Markers from '../Markers'
import customStyle from '../MapStyle'
import Phone from '../Images/call.svg'
import Website from '../Images/globe.svg'
import{GOOGLE_MAPS_APIKEY} from "@env"
import { getDistance } from 'geolib';
import Loading from '../DummyScreens/Loading'


const Maps = () => {

  const navigation = useNavigation();
  const [location, setLocation] = useState(null) 

  const handleLocationPermission = async () => { 
    let permissionCheck = '';

    if (Platform.OS === 'android') {
      permissionCheck = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);

      if (
        permissionCheck === RESULTS.BLOCKED ||
        permissionCheck === RESULTS.DENIED
      ) {
        const permissionRequest = await request(
          PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
        );
        permissionRequest === RESULTS.GRANTED
          ? console.log('Location permission granted.')
          : console.log('location permission denied.');
      }
    }
  };

  useEffect(() => {
    handleLocationPermission()
  }, [])

  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords
        setLocation({ latitude, longitude })
      },
      error => {
        console.log(error.code, error.message)
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    )
  }, [])

  const distance =(latitude,longitude)=>{

    var dist= getDistance(
      {latitude: location.latitude, longitude: location.longitude},
      {latitude: latitude, longitude: longitude },
    )/1000

    return dist;
  }

  return (
    <>
    {!location? <Loading/>:
    <ScrollView style={{backgroundColor:"#fff",height:"100%"}}>

    <TouchableOpacity
    onPress={()=>{navigation.navigate('TabNavigation', { screen: 'Health' })}}
    style={{position:"absolute",top:17,left:15,zIndex:10,shadowOpacity: 0.8,
    shadowRadius: 2,shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, elevation:5}}>
    <Image source={require('../Images/BackArrowMap.png')} resizeMode="contain" style={{width:65,height:65}}/>
    </TouchableOpacity>

      {location && (
        <MapView
      style={{flex:1,height:450}}
      showsUserLocation={true}
      customMapStyle={customStyle}
      initialRegion={{
      latitude: location.latitude,
      longitude: location.longitude,
      latitudeDelta: 0.018,
      longitudeDelta: 0.018,
      }}>
      {Markers.map(marker =>(
        <Marker
          key={marker.key}
          image={require('../Images/FootMarker.png')}
          coordinate={{
            latitude:marker.lat,
            longitude:marker.long,
          }}
          identifier="Foot Clinic"
          title={marker.title}
          description={marker.address}
        />
      ))} 
      </MapView>
      )}


      {location && (

      <View style={{backgroundColor:"#fff",height:"100%"}}>
      <Text style={styles.head}>Footcare Clinics Near You</Text>
      
      {Markers.map(marker =>{

        return distance(marker.lat,marker.long)<1.5 ?

      <TouchableOpacity 
      style={styles.clinicList}
      key={marker.key}>
      <Image source={require('../Images/hospital.png')} resizeMode="contain" style={{width:40,height:40}}/>
      <View style={{flexDirection:"column"}}>
        <Text style={{fontFamily:"CircularXXTTMedium",fontSize:17,color:"#3A3A3A",width:170}}>{marker.title}</Text>
        <Text style={{fontFamily:"CircularXXTTMedium",fontSize:17,color:"#A3A3A3",}}>
        {distance(marker.lat,marker.long)} km
        </Text>
      </View>
      <View style={{flexDirection:"row"}}>
      <Phone width={20} height={20} style={{marginRight:20}}/>
      <Website width={20} height={20} />
      </View>
      </TouchableOpacity>
      :
      null

      })}

    <TouchableOpacity
      onPress={()=>{navigation.navigate('TabNavigation', { screen: 'Health' })}}>
        <View style={styles.but2}>
            <Text style={{fontFamily:"CircularXXTTBold",color:"white", fontSize:17,textAlign:'center'}}>
            Exit
            </Text>
          </View>
    </TouchableOpacity>

    </View>
    )}
    
    </ScrollView>
    }
    </>
  )
}

export default Maps

const styles = StyleSheet.create({

head:{
  fontFamily:"CircularXXTTBold",
  color:"#3A3A3A", 
  fontSize:19,
  textAlign:'center',
  marginRight:10,
  marginTop:25,
  marginBottom:30,
},
clinicList:{
  flexDirection:"row",
  justifyContent:"space-between",
  width:"95%",
  alignSelf:"center",
  alignItems:"center",
  paddingHorizontal:"6%",
  paddingVertical:"3%",
  borderRadius:4,
  marginBottom:10,
},
but2:{
  width:"50%",
  backgroundColor:"#FFB31D",
  borderRadius:5,
  marginBottom:45,
  paddingVertical:12,
  alignSelf:"center",
  marginTop:35,
},

})