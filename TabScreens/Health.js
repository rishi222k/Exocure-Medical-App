import { View, Text,Button,ScrollView,Image,StyleSheet,TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import HealthIllus from '../Images/HealthIllus.svg'
import Frontarrow from '../Images/frontarrow.svg'
import React from 'react'

const Health = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{backgroundColor:"#fff",height:"100%"}}>
    <View style={{backgroundColor:"#fff",height:"100%",paddingHorizontal:"6%"}}>
    <Text style={{fontFamily:"SFNSBold",fontSize:25,marginTop:30}}>Healthcare Support</Text>
    <View style={styles.container}>
      <View style={styles.innercontainer}>
        <Text style={styles.title}>Condition</Text>
        <Text Text style={styles.entry}>Severe</Text>
      </View>
      <View style={styles.innercontainer}>
        <Text style={styles.title}>Health Recommendations</Text>
        <Text style={styles.entry}>By eliminating foot deformities, a surgeon can help relieve pressure surrounding your ulcer    </Text>
      </View>
      <View>
        <Text style={styles.title}>Medications</Text>
        <Text Text style={styles.entry}>Dicloxacillin, Cephalexin, Clavulanate, Potassium</Text>
      </View>
    </View>
    <HealthIllus
      width={230}
      height={230}
      style={{alignSelf:"center"}}
    />
    <Text style={{fontFamily:"CircularXXTTMedium",fontSize:17,color:"#3A3A3A",textAlign:"center",paddingHorizontal:25}}>Connect with podiatric specialists and healthcare providers near your area to get the best help </Text>
    <TouchableOpacity>
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