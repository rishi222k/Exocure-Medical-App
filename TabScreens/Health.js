import { RefreshControl, View, Text,Button,ScrollView,Image,StyleSheet,TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import HealthIllus from '../Images/HealthIllus.svg'
import Frontarrow from '../Images/frontarrow.svg'
import DummyHealth from '../DummyScreens/DummyHealth';
import React,{useState, useContext,useEffect} from 'react'
import firestore from '@react-native-firebase/firestore';
import {AuthContext} from '../Navigation/AuthProvider';
import Warning from '../Images/warning.svg'
import Recommendations from '../Recommendations';
import { check, request, PERMISSIONS, RESULTS } from "react-native-permissions"


const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

const Health = () => {
  const navigation = useNavigation();
  const [diagcheck, setdiagcheck] = useState(false);
  const [severity, setseverity] = useState(null);
  const [Rcheck, setRcheck] = useState(0);
  const {user,logout} = useContext(AuthContext);
  const [refreshing, setRefreshing] = React.useState(false);

  const sensedata= async()=>{ 
    const users = await firestore().collection('Diagnosis').doc(user.uid).get()
    .then(documentSnapshot => {
      setdiagcheck(documentSnapshot.data().diagcheck);
      setseverity(documentSnapshot.data().severity);
    });
  
  };

  const CheckRecommendation =()=>{
    if(severity>=0 && severity<=10)
    {setRcheck(0);}
    else if(severity>10 && severity<=50)
    {setRcheck(1);}
    else if(severity>0 && severity<=100)
    {setRcheck(2);}
  }

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    sensedata();
    // CheckRecommendation();
    wait(2000).then(() => setRefreshing(false));
  }, []);


  useEffect(() => {

  sensedata();
  CheckRecommendation();

  }, [severity])

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
          ? navigation.navigate("Map")
          : ToastAndroid.show(`Please enable location permissions to find footcare services near you`, ToastAndroid.SHORT);
      }
      else if(permissionCheck === RESULTS.GRANTED)
      {navigation.navigate("Map")}
    }
  };
  

  return (
    <ScrollView 
    style={{backgroundColor:"#fff",height:"100%"}}
    refreshControl={
      <RefreshControl
        refreshing={refreshing}
        onRefresh={onRefresh}/>
    }>
    {!diagcheck? <DummyHealth/> :
    <View style={{backgroundColor:"#fff",height:"100%",paddingHorizontal:"6%"}}>
    <Text style={{fontFamily:"SFNSBold",fontSize:25,marginTop:30}}>Healthcare Support</Text>
    {severity==null? 
    <View style={styles.warning}>
      <View>
      <Warning
      width={30}
      height={30}/>
      </View>
      <View style={{width:"90%"}}>
        <Text style={styles.helptext}>Please review your diagnostics report from the diagnostics tab before receiving healthcare sypport. If you have already done so, kindly refresh and try again</Text>
      </View>
    </View>
    :
    <View style={styles.container}>
      <View style={styles.innercontainer}>
        <Text style={styles.title}>Condition</Text>
        <Text Text style={styles.entry}>{Recommendations[Rcheck].condition}</Text>
      </View>
      <View style={styles.innercontainer}>
        <Text style={styles.title}>Health Recommendations</Text>
        <Text style={styles.entry}>1. {Recommendations[Rcheck].recommendation1} {'\n'}{'\n'}2. {Recommendations[Rcheck].recommendation2} {'\n'}{'\n'}3. {Recommendations[Rcheck].recommendation3}</Text>
      </View>
      <View>
        <Text style={styles.title}>Medications</Text>
        <Text Text style={styles.entry}>{Recommendations[Rcheck].medication}</Text>
      </View>
    </View>
    }
    <HealthIllus
      width={230}
      height={230}
      style={{alignSelf:"center"}}
    />
    <Text style={{fontFamily:"CircularXXTTMedium",fontSize:17,color:"#3A3A3A",textAlign:"center",paddingHorizontal:25}}>Connect with podiatric specialists and healthcare providers near your area to get the best help </Text>
    <TouchableOpacity
    onPress={()=>{handleLocationPermission();}}>
        <View style={styles.but2}>
            <Text style={{fontFamily:"CircularXXTTBold",color:"white", fontSize:17,textAlign:'center',marginRight:10}}>
            Find now
            </Text>
            <Frontarrow 
              width={15}
              height={15}
            />
          </View>
    </TouchableOpacity>
    </View>
    }

    </ScrollView>
  )
}

export default Health

const styles = StyleSheet.create({
  title:{
      fontFamily:"CircularXXTTBold",
      fontSize:17,
      color:'#FFAA00',
      marginBottom:1,
    },
    entry:{
      fontFamily:"CircularXXTTMedium",
      fontSize:17,
      color:'#3A3A3A',
      lineHeight:25
    },
    container:{
      marginTop:20,
      backgroundColor:"#F2F2F2",
      paddingHorizontal:25,
      paddingVertical:20,
      borderRadius:10,
      marginBottom:25,
    },
    warning:{
      marginTop:20,
      backgroundColor:"#FFEECD",
      paddingHorizontal:15,
      paddingVertical:20,
      borderRadius:10,
      marginBottom:25,
      flexDirection:"row",
    },
    helptext:{
      fontFamily:"CircularXXTTMedium",
      fontSize:17,
      marginLeft:10,
      color:"#FFAA00",
      lineHeight:24
    },
    innercontainer:{
      marginBottom:15
    },
    but2:{
    width:"75%",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#FFB31D",
    borderRadius:5,
    marginBottom:45,
    paddingVertical:12,
    alignSelf:'center',
    marginTop:35
    },
  })