import { RefreshControl,View, Text,Button,ScrollView,Image,StyleSheet,TouchableOpacity } from 'react-native'
import React,{useState, useContext,useEffect} from 'react'
import firestore from '@react-native-firebase/firestore';
import {AuthContext} from '../Navigation/AuthProvider';
import { useNavigation } from '@react-navigation/native';
import FeetMap from '../Components/FeetMap'
import DummyDiag from '../DummyScreens/DummyDiag';

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

const Diagnostics = () => {
  const navigation = useNavigation();
  const {user,logout} = useContext(AuthContext);
  const [diagcheck, setdiagcheck] = useState(false);
  const [refreshing, setRefreshing] = React.useState(false);

  const [Condition, setCondition] = useState(); 
  const [Pain, setPain] = useState(); 
  const [Deformity, setDeformity] = useState(); 
  const [Comorb, setComorb] = useState(); 
  const [Angle, setAngle] = useState(); 
  const [Duration, setDuration] = useState(); 
  const [Footwear, setFootwear] = useState(); 
  const [Swell, setSwell] = useState(); 
  const [Hormone, setHormone] = useState(); 

  const userdata= async()=>{ 
    const users = await firestore().collection('Users').doc(user.uid).get()
    .then(documentSnapshot => {
      setCondition(documentSnapshot.data().question6);
      setPain(documentSnapshot.data().question12);
      setDeformity(documentSnapshot.data().question10);
      setComorb(documentSnapshot.data().question7);
      setAngle(documentSnapshot.data().question9);
      setDuration(documentSnapshot.data().question4);
      setFootwear(documentSnapshot.data().question5);
      setSwell(documentSnapshot.data().question8);
      setHormone(documentSnapshot.data().question11);
    });
  };

  const sensedata= async()=>{ 
    const users = await firestore().collection('Diagnosis').doc(user.uid).get()
    .then(documentSnapshot => {
      setdiagcheck(documentSnapshot.data().diagcheck);
    });
  
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    userdata();
    sensedata();
    wait(2000).then(() => setRefreshing(false));
  }, []);

    useEffect(() => {
      userdata();
      sensedata();
      }, []);

  return (
    <ScrollView 
    style={{backgroundColor:"#fff",height:"100%"}}
    refreshControl={
    <RefreshControl
      refreshing={refreshing}
      onRefresh={onRefresh}
    />}>
    {!diagcheck? <DummyDiag/>:<View style={{backgroundColor:"#fff",height:"100%",paddingHorizontal:"6%"}}>
    <Text style={{fontFamily:"SFNSBold",fontSize:25,marginVertical:30}}>Diagnostics Report</Text>
    <FeetMap/>

    
    <View style={styles.container}>
    <Text style={styles.containertitle}>Left Leg Report</Text>
    <View style={{flexDirection:"row",justifyContent:"space-between"}}>
    <View>
        <View style={styles.innercontainer}>
            <Text style={styles.title}>Affected Nodes</Text>
            <Text style={styles.entry}>5</Text>
        </View>
        <View style={styles.innercontainer}>
            <Text style={styles.title}>Level of Severity</Text>
            <Text style={styles.entry}>75%</Text>
        </View>
    </View>
    <View>
        <View style={styles.innercontainer}>
            <Text style={styles.title}>Condition</Text>
            <Text style={styles.entry}>Severe</Text>
        </View>
        <View style={styles.innercontainer}>
            <Text style={styles.title}>Region</Text>
            <Text style={styles.entry}>Forefoot</Text>
        </View>
    </View>
    </View>
    </View>

    <View style={styles.container}>
    <Text style={styles.containertitle}>Right Leg Report</Text>
    <View style={{flexDirection:"row",justifyContent:"space-between"}}>
    <View>
        <View style={styles.innercontainer}>
            <Text style={styles.title}>Affected Nodes</Text>
            <Text style={styles.entry}>2</Text>
        </View>
        <View style={styles.innercontainer}>
            <Text style={styles.title}>Level of Severity</Text>
            <Text style={styles.entry}>35%</Text>
        </View>
    </View>
    <View>
        <View style={styles.innercontainer}>
            <Text style={styles.title}>Condition</Text>
            <Text style={styles.entry}>Mild</Text>
        </View>
        <View style={styles.innercontainer}>
            <Text style={styles.title}>Region</Text>
            <Text style={styles.entry}>Whole foot</Text>
        </View>
    </View>
    </View>
    </View>

    <View style={styles.ncontainer}>
    <Text style={styles.containertitle}>Medical Information</Text>
    <View>
        <View style={styles.innercontainer}>
            <Text style={styles.title}>Condition of foot</Text>
            <Text style={styles.entry}>{Condition}</Text>
        </View>
        <View style={styles.innercontainer}>
            <Text style={styles.title}>Pain</Text>
            <Text style={styles.entry}>{Pain}</Text>
        </View>
        <View style={styles.innercontainer}>
            <Text style={styles.title}>Foot deformity</Text>
            <Text style={styles.entry}>{Deformity}</Text>
        </View>
        <View style={styles.innercontainer}>
            <Text style={styles.title}>Movement of ankle joint</Text>
            <Text style={styles.entry}>{Angle}</Text>
        </View>
        <View style={styles.innercontainer}>
            <Text style={styles.title}>Comorbidities</Text>
            <Text style={styles.entry}>{Comorb}</Text>
        </View>
    </View>
    <View>
        <View style={styles.innercontainer}>
            <Text style={styles.title}>Duration of diabetes</Text>
            <Text style={styles.entry}>{Duration}</Text>
        </View>
        <View style={styles.innercontainer}>
            <Text style={styles.title}>Type of footwear</Text>
            <Text style={styles.entry}>{Footwear}</Text>
        </View>
        <View style={styles.innercontainer}>
            <Text style={styles.title}>Swelling</Text>
            <Text style={styles.entry}>{Swell}</Text>
        </View>
        <View style={styles.innercontainer}>
            <Text style={styles.title}>Change in hormone level</Text>
            <Text style={styles.entry}>{Hormone}</Text>
        </View>
    </View>
    </View>

    <View style={[styles.container,{marginBottom:40}]}>
    <View style={{flexDirection:"row",justifyContent:"space-between"}}>
    <View>
        <Text style={styles.ntitle}>Level of Severity</Text>
        <Text style={styles.entry}>64%</Text>
    </View>
    <View>
      <Text style={styles.ntitle}>Medication</Text>
      <Text style={styles.entry}>Recommended</Text>
    </View>
    </View>
    </View>

    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-around',}}>
    <TouchableOpacity
    onPress={()=>{navigation.navigate('TabNavigation', { screen: 'Health' })}}>
        <View style={[styles.but1]}>
            <Text style={{fontFamily:"CircularXXTTBold",color:"white", fontSize:18,textAlign:'center'}}>
            Get Help
            </Text>
          </View>
    </TouchableOpacity>
    <TouchableOpacity 
    onPress={()=>{navigation.navigate('TabNavigation', { screen: 'Sense' })}}>
        <View style={[styles.but2]}>
            <Text style={{fontFamily:"CircularXXTTBold",color:"#FFB31D", fontSize:18,textAlign:'center'}}>
            New Diagnosis
            </Text>
          </View>
    </TouchableOpacity>
    </View>

    </View>}
    </ScrollView>
  )
}

export default Diagnostics

const styles = StyleSheet.create({
  title:{
      fontFamily:"CircularXXTTBold",
      fontSize:16.5,
      color:'#FFAA00',
      marginBottom:3,
    },
    ntitle:{
      fontFamily:"CircularXXTTBold",
      fontSize:16.5,
      color:'#0012FF',
      marginBottom:3,
    },
    entry:{
      fontFamily:"CircularXXTTMedium",
      fontSize:18,
      color:'#3A3A3A',
    },
    container:{
      marginTop:30,
      backgroundColor:"#F2F2F2",
      paddingLeft:20,
      paddingRight:30,
      paddingVertical:20,
      borderRadius:10,
    },
    ncontainer:{
      marginTop:30,
      backgroundColor:"#FFF",
      paddingLeft:20,
      paddingRight:30,
      paddingVertical:0,
      borderRadius:10,
    },
    innercontainer:{
        marginBottom:15,
        width:"100%"
    },
    containertitle:{
      fontFamily:"CircularXXTTBold",
      fontSize:20,
      color:'#0012FF',
      marginBottom:20
    },
    but1:{
      width:160,
      borderRadius:5,
      paddingVertical:13,
      alignSelf:'center',
      marginBottom:30,
      backgroundColor:"#FFB31D",
    },
    but2:{
      width:160,
      borderRadius:5,
      borderColor:"#FFB31D",
      borderWidth:2.5,
      paddingVertical:11,
      alignSelf:'center',
      marginBottom:30,
      backgroundColor:"#FFF",
    },
  })