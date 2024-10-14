import { StyleSheet, Text, View,ScrollView,Image,TouchableOpacity } from 'react-native'
import React,{useState, useContext,useEffect} from 'react'
import { useNavigation } from '@react-navigation/native';
import MapView, { Marker } from "react-native-maps"
// import { check, request, PERMISSIONS, RESULTS } from "react-native-permissions"
// import Geolocation from "react-native-geolocation-service"
import * as Location from 'expo-location';
// import Markers from '../Markers'
import customStyle from '../MapStyle'
import Phone from '../Images/call.svg'
import Website from '../Images/globe.svg'
import{GOOGLE_MAPS_APIKEY} from "@env"
import { getDistance } from 'geolib';
import Loading from '../DummyScreens/Loading'
import Markers from '../Markers'


const Maps = () => {

  const navigation = useNavigation();
  const [location, setLocation] = useState(null); 
  const [receiver, setReceiver] = useState(false);
  const [Latitude, setLatitude] = useState(null); 
  const [Longitude, setLongitude] = useState(null); 
  let radius = 15 * 1000;
  const [places, setplaces] = useState([]); 
  
  

  const handleRestaurantSearch = () => {
    console.log("here");
    const url  = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?'
    const location = `location=${Latitude},${Longitude}`;
    const radius = '&radius=2500';
    const type = '&type=hospital';
    const keyWord='&keyword=podiatrist';
    const pagetoken='&pagetoken=ARywPAL6voF9hd_GYconiNOQzmUXkKX3e9BJ2PIv40zfcOAoHiyiU0hr9OGU8swDJWtCpOXMAbfCiY4-iLQ5VeAgMkwjzc5qxKSV92VG2ZuB626yrUBlaLSCKC6PEQJ7KRhdnElrkpkPqkzVhyeZ1WKoYrPS9c7mlThrQwgsV4RJLLZZQCOXihfnhtNPhOhggEXFfC8I9DvH-cHuDIYaZkYei3nKkfPeG05EKUcHMI9WMzuZSamocSpK_Mf6rBSkKg-ATDmZDZwBW58UIoIrnbxIqgbSHMP_sYmTkBV2_owdJX2rr3afjK6Vd4JA9eDtD_tZcvXo4FZ-VpvZBRllAncWK1szieXmcLm-GfIRIO_b-KFGWGTFqw7nBS2jXKN2yrl2Cs7XanLxl2qECmAAgkkXcIxFZAFehCL-STmpNP-o7G5VZc7D4zEnwMqjBQ';
    const key = `&key=${GOOGLE_MAPS_APIKEY}`;
    const restaurantSearchUrl = url + location + radius + type + keyWord + key + pagetoken;
    fetch(restaurantSearchUrl)
      .then(response => response.json())
      .then(res => {    
        for (let googlePlace of res.results) {      
          var place = {};      
          var myLat = googlePlace.geometry.location.lat;      
          var myLong = googlePlace.geometry.location.lng;      
          var coordinate = {        
            latitude: myLat,        
            longitude: myLong,      
          };           
          place['coordinate'] = coordinate;      
          place['placeId'] = googlePlace.place_id;      
          place['placeName'] = googlePlace.name;  
          place['address'] = googlePlace.vicinity; 
          // str = str.split(",")[0];    
          setplaces(current => [...current, place]);   
        }  
        setReceiver(true);
      })
      .catch( e => console.log(e))
  }

  useEffect(() => {
    (async () => {
      let location = await Location.getCurrentPositionAsync({});
      setLatitude(location.coords.latitude)
      setLongitude(location.coords.longitude);
      setLocation(location.coords);

      handleRestaurantSearch();
      // await fetch(url)  
      // .then(res => {    return res.json();  })
      // .then(res => { console.log(res.json()); })   
      // .catch(error => {     console.log(error);  });
    })();
    // Geolocation.getCurrentPosition(
    //   position => {
    //     const { latitude, longitude } = position.coords
    //     setLocation({ latitude, longitude })
    //   },
    //   error => {
    //     console.log(error.code, error.message)
    //   },
    //   { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    // )
    console.log(places);
  }, [])

  const distance =(latitude,longitude)=>{

    var dist= getDistance(
      {latitude: Latitude, longitude: Longitude},
      {latitude: latitude, longitude: longitude },
    )/1000 * 0.621371;

    return dist;
  }

  return (
    <>
    {!receiver? <Loading/>:
    <ScrollView style={{backgroundColor:"#fff",height:"100%"}}>

    <TouchableOpacity
    onPress={()=>{navigation.navigate('TabNavigation', { screen: 'Health' })}}
    style={{position:"absolute",top:17,left:15,zIndex:10,shadowOpacity: 0.2,
    shadowRadius: 5,shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, elevation:5}}>
    <Image source={require('../Images/BackArrowMap.png')} resizeMode="contain" style={{width:65,height:65}}/>
    </TouchableOpacity>

      {receiver && (
        <MapView
      style={{flex:1,height:450}}
      showsUserLocation={true}
      customMapStyle={customStyle}
      initialRegion={{
      latitude: Latitude,
      longitude: Longitude,
      latitudeDelta: 0.045,
      longitudeDelta: 0.045,
      }}>
      {Markers.map(marker => (
        <Marker
          key={marker.key}
          coordinate={{
            latitude: marker.lat,
            longitude: marker.long,
          }}
          title={marker.title}
          description={marker.address}
        >
          <Image 
            source={require('../Images/FootMarker.png')} 
            style={{height: 32, width:32}}
            resizeMode="contain" />
        </Marker>
      ))}
      </MapView>
      )}


      {receiver && (

      <View style={{backgroundColor:"#fff",height:"100%"}}>
      <Text style={styles.head}>Footcare Clinics Near You</Text>
      
      {Markers?.map(marker =>{

        return distance(marker.lat,marker.long)<5 ?

      <TouchableOpacity 
      style={styles.clinicList}
      key={marker.key}>
      <Image source={require('../Images/hospital.png')} resizeMode="contain" style={{width:40,height:40}}/>
      <View style={{flexDirection:"column"}}>
        <Text style={{fontFamily:"CircularXX-TTMedium",fontSize:17,color:"#3A3A3A",width:170}}>{marker.title}</Text>
        <Text style={{fontFamily:"CircularXX-TTMedium",fontSize:17,color:"#A3A3A3",}}>
        {distance(marker.lat,marker.long).toFixed(2)} miles
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
            <Text style={{fontFamily:"CircularXX-TTBold",color:"white", fontSize:17,textAlign:'center'}}>
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
  fontFamily:"CircularXX-TTBold",
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
