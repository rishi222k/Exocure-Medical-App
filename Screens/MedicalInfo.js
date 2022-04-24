import { View, Text,Button,ScrollView,Image,StyleSheet,TouchableOpacity } from 'react-native'
import MedicalIcon2 from '../Images/MedicalIcon2.svg'
import React,{useState, useContext,useEffect} from 'react'
import firestore from '@react-native-firebase/firestore';
import {AuthContext} from '../Navigation/AuthProvider';
import { useNavigation } from '@react-navigation/native';
import data from '../QDictionary'

const MedicalInfo = () => {

  const navigation = useNavigation();
  const {user,logout} = useContext(AuthContext);
  const [Condition, setCondition] = useState(); 
  const [Pain, setPain] = useState(); 
  const [Deformity, setDeformity] = useState(); 
  const [Comorb, setComorb] = useState(); 
  const [Angle, setAngle] = useState(); 
  const [Duration, setDuration] = useState(); 
  const [Footwear, setFootwear] = useState(); 
  const [Swell, setSwell] = useState(); 
  const [Hormone, setHormone] = useState(); 


    useEffect(() => {
        const userdata= async()=>{ 
          const users = await firestore().collection('Users').doc(user.uid).get()
          .then(documentSnapshot => {
            
            setCondition(data[5][documentSnapshot.data().question6]);
            setPain(data[11][documentSnapshot.data().question12]);
            setDeformity(data[9][documentSnapshot.data().question10]);
            setComorb(data[6][documentSnapshot.data().question7]);
            setAngle(data[8][documentSnapshot.data().question9]);
            setDuration(data[3][documentSnapshot.data().question4]);
            setFootwear(data[4][documentSnapshot.data().question5]);
            setSwell(data[7][documentSnapshot.data().question8]);
            setHormone(data[10][documentSnapshot.data().question11]);
            
          });
        };
    
      userdata();
      }, []);

  return (
    <ScrollView style={{backgroundColor:"#fff",height:"100%"}}>
    <View style={{backgroundColor:"#fff",height:"100%",paddingHorizontal:"5%"}}>
    <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center",marginTop:40}}>
    <MedicalIcon2
    width={30}
    height={30}
    style={{marginRight:10}}
    />
    <Text style={{fontFamily:"SFNSBold",fontSize:25,color:"#3A3A3A"}}> Medical Information </Text>
    </View>
    <View style={styles.container}>
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
    <TouchableOpacity 
    onPress={()=> navigation.navigate('TabNavigation', { screen: 'Profile' })}>
        <View style={styles.but2}>
            <Text style={{fontFamily:"CircularXXTTBold",color:"white", fontSize:16,textAlign:'center'}}>
            Go Back
            </Text>
          </View>
    </TouchableOpacity>
    </View>
    </ScrollView>
  )
}

export default MedicalInfo

const styles = StyleSheet.create({
    title:{
        fontFamily:"CircularXXTTBold",
        fontSize:16,
        color:'#FFAA00',
        marginBottom:3,
      },
      entry:{
        fontFamily:"CircularXXTTMedium",
        fontSize:17,
        color:'#3A3A3A',
      },
      container:{
        flexDirection:"row",
        marginTop:30,
        backgroundColor:"#F2F2F2",
        paddingHorizontal:15,
        paddingVertical:25,
        borderRadius:10,
      },
      innercontainer:{
          marginBottom:15,
          width:"65%"
      },
      but2:{
        width:"60%",
        backgroundColor:"#FFB31D",
        borderRadius:5,
        paddingVertical:12,
        alignSelf:'center',
        marginTop:25
      },
})