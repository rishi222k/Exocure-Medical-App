import { View, Text,Button,ScrollView,Image,StyleSheet,TouchableOpacity } from 'react-native'
import {AuthContext, AuthProvider} from '../Navigation/AuthProvider';
import Security from '../Images/security.svg'
import Notification from '../Images/Notifications.svg'
import Medical from '../Images/MedicalIcon.svg'
import React,{useState, useContext,useEffect} from 'react'
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import ProfileImg from '../Images/profile.svg'
import data from '../QDictionary'

const Profile = () => {

  const {user,logout} = useContext(AuthContext);
  const [name, setname] = useState(); 
  const [email, setemail] = useState(); 
  const [age, setage] = useState(); 
  const [Occupation, setOccupation] = useState(); 
  const [Residence, setResidence] = useState(); 
  const [Edu, setEdu] = useState(); 
  const navigation = useNavigation();

   useEffect(() => {
    const userdata= async()=>{ 
      const users = await firestore().collection('Users').doc(user.uid).get()
      .then(documentSnapshot => {
        
        setname(documentSnapshot.data().name);
        setemail(documentSnapshot.data().email);
        setage(documentSnapshot.data().age);
        setOccupation(data[1][documentSnapshot.data().question2]);
        setResidence(data[2][documentSnapshot.data().question3]);
        setEdu(data[0][documentSnapshot.data().question1]);
        
      });
    };

  userdata();
  }, []);


  return (
    <ScrollView style={{backgroundColor:"#fff",height:"100%"}}>
    <View style={{backgroundColor:"#fff",height:"100%",paddingHorizontal:"6%"}}>
    <View style={{flexDirection:"row",alignItems:"center",marginTop:40}}>
      <ProfileImg
      width={70}
      height={70}
      style={{marginRight:25}}
      />
      <View>
        <Text style={{fontFamily:"CircularXXTTBold",fontSize:21, color:"#3A3A3A"}}>{name}</Text>
        <Text style={{fontFamily:"CircularXXTTMedium",fontSize:16,color:"#3A3A3A"}}>{email}</Text>
      </View>
    </View>
    
    <View style={{flexDirection:"row",marginLeft:10}}>
      <View style={{marginVertical:30,marginRight:25,width:150}}>
        <View style={{marginBottom:15}}>
          <Text style={styles.title}>Age</Text>
          <Text style={styles.entry}>{age}</Text>
        </View>
        <View>
          <Text style={styles.title}>Occupation</Text>
          <Text style={styles.entry}>{Occupation}</Text>
        </View>
      </View>
      <View style={{marginVertical:30,width:150}}>
        <View style={{marginBottom:15}}>
          <Text style={styles.title}>Residence</Text>
          <Text style={styles.entry}>{Residence}</Text>
        </View>
        <View>
          <Text style={styles.title}>Education</Text>
          <Text style={styles.entry}>{Edu}</Text>
        </View>
      </View>
    </View>

    <View style={{marginTop:20,marginBottom:40}}>
    <TouchableOpacity 
    onPress={()=> navigation.navigate("MedicalInfo")}>
    <View style={[styles.Menubar,{borderTopLeftRadius:10,borderTopEndRadius:10,}]}>
      <Medical
        width={20}
        height={20}
      />
      <Text style={styles.MenuBarText}>Medical Information</Text>
    </View>
    </TouchableOpacity>
    <TouchableOpacity>
    <View style={[styles.Menubar,{borderColor:"#CFCFCF",borderBottomWidth:0.7,borderTopWidth:0.7,}]}>
      <Notification 
        width={20}
        height={20}
      />
      <Text style={styles.MenuBarText}>Notifications</Text>
    </View>
    </TouchableOpacity>
    <TouchableOpacity>
    <View style={[styles.Menubar,{borderBottomLeftRadius:10,borderBottomEndRadius:10,}]}>
    <Security 
        width={20}
        height={20}
      />
      <Text style={styles.MenuBarText}>Privacy</Text>
    </View>
    </TouchableOpacity>
    </View>
    <TouchableOpacity 
    onPress={()=> logout()}>
        <View style={styles.but2}>
            <Text style={{fontFamily:"CircularXXTTBold",color:"white", fontSize:18,textAlign:'center'}}>
            Logout
            </Text>
          </View>
    </TouchableOpacity>
    </View>
    </ScrollView>
  )
}

export default Profile

const styles = StyleSheet.create({
  title:{
    fontFamily:"CircularXXTTBold",
    fontSize:15,
    color:'#FFAA00',

  },
  entry:{
    fontFamily:"CircularXXTTMedium",
    fontSize:17,
    color:'#3A3A3A',
  },
  Menubar:{
    flexDirection:"row",
    backgroundColor:"#F2F2F2",
    paddingHorizontal:20,
    paddingVertical:17,
    alignItems:"center"
  },
  MenuBarText:{
    fontFamily:"CircularXXTTMedium",
    fontSize:16,
    color:'#3A3A3A',
    marginLeft:22,
  },
  but2:{
    width:"70%",
    backgroundColor:"#FFB31D",
    borderRadius:5,
    paddingVertical:12,
    alignSelf:'center',
    marginTop:25,
    marginBottom:25
  },
})