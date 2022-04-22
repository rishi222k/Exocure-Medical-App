import { View, Text,Button,ScrollView,Image,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import FeetMap from '../Components/FeetMap'

const Diagnostics = () => {
  return (
    <ScrollView style={{backgroundColor:"#fff",height:"100%"}}>
    <View style={{backgroundColor:"#fff",height:"100%",paddingHorizontal:"6%"}}>
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


    <View></View>
    </View>
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
    innercontainer:{
        marginBottom:15,
        width:"100%"
    },
    containertitle:{
      fontFamily:"CircularXXTTBold",
      fontSize:20,
      color:'#0012FF',
      marginBottom:20
    }
  })