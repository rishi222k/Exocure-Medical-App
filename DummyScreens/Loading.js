import { StyleSheet, Text, View,ScrollView,Image,TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import LoadingAnim from '../LoadingAnim'

const Loading = () => {
    const navigation = useNavigation();
  return (
    <ScrollView style={{backgroundColor:"#fff",height:"100%",}}>
    <View style={{alignItems:"center",marginTop:100}}>
      <LoadingAnim width={504} height={200} />
      <Text style={{fontFamily:"CircularXX-TTBold", color:"#3A3A3A", fontSize:19, width:"70%",textAlign:"center",marginTop:10}}>
      Looking for footcare services near you ... </Text>
      
    </View>
    <TouchableOpacity
      onPress={()=>{navigation.navigate('TabNavigation', { screen: 'Health' })}}>
        <View style={styles.but2}>
            <Text style={{fontFamily:"CircularXX-TTBold",color:"white", fontSize:17,textAlign:'center'}}>
            Exit
            </Text>
          </View>
    </TouchableOpacity>
    </ScrollView>
  )
}

export default Loading

const styles = StyleSheet.create({
    but2:{
        width:"50%",
        backgroundColor:"#FFB31D",
        borderRadius:5,
        marginBottom:45,
        paddingVertical:12,
        alignSelf:"center",
        marginTop:135
    },
})