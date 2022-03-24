import { View, Text,Button,ScrollView,Image,StyleSheet,TouchableOpacity } from 'react-native'
import MedicalIcon2 from '../Images/MedicalIcon2.svg'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const MedicalInfo = () => {

    const navigation = useNavigation();

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
            <Text style={styles.entry}>Bony prominence</Text>
        </View>
        <View style={styles.innercontainer}>
            <Text style={styles.title}>Pain</Text>
            <Text style={styles.entry}>Forefoot</Text>
        </View>
        <View style={styles.innercontainer}>
            <Text style={styles.title}>Foot deformity</Text>
            <Text style={styles.entry}>Cosmetic allergy</Text>
        </View>
        <View style={styles.innercontainer}>
            <Text style={styles.title}>Movement of ankle joint</Text>
            <Text style={styles.entry}>0-35 degree</Text>
        </View>
        <View style={styles.innercontainer}>
            <Text style={styles.title}>Comorbidities</Text>
            <Text style={styles.entry}>Myocardial infarction</Text>
        </View>
    </View>
    <View>
        <View style={styles.innercontainer}>
            <Text style={styles.title}>Duration of diabetes</Text>
            <Text style={styles.entry}>below 10 years</Text>
        </View>
        <View style={styles.innercontainer}>
            <Text style={styles.title}>Type of footwear</Text>
            <Text style={styles.entry}>Laced shoe</Text>
        </View>
        <View style={styles.innercontainer}>
            <Text style={styles.title}>Swelling</Text>
            <Text style={styles.entry}>Whole foot</Text>
        </View>
        <View style={styles.innercontainer}>
            <Text style={styles.title}>Change in hormone level</Text>
            <Text style={styles.entry}>Menstruation</Text>
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
        borderRadius:10
      },
      innercontainer:{
          marginBottom:15,
          width:"75%"
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