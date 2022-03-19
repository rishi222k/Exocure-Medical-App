import { StyleSheet, Text, View,ImageBackground} from 'react-native'
import React from 'react'

const PreHome = () => {
  return (
    <View>
    <ImageBackground source={require('../Images/PreHome-Bg.png')} resizeMode="cover" style={styles.imagebg}>
    <View style={styles.container}>
    <Text>PreHome</Text>
    </View>
    </ImageBackground>
    </View>
  )
}

export default PreHome

const styles = StyleSheet.create({
  imagebg: {
    height:'100%',
  },
  container:{
    paddingHorizontal:25,
  }
})