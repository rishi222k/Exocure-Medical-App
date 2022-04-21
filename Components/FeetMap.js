import { StyleSheet, Text, View } from 'react-native'
import Svg, {Path,Defs,Stop,RadialGradient,Ellipse} from 'react-native-svg';
import Leftleg from '../Images/LeftLeg.svg'
import Node from '../Images/Node.svg'
import {SvgXml} from 'react-native-svg';
import React from 'react'



const FeetMap = () => {

  return (
    <View>
      
    <Svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="150.061" height="400.494" viewBox="0 0 115 320">
    <Defs>
      <RadialGradient id="radial-gradient" cx="0.5" cy="0.5" r="0.55" gradientUnits="objectBoundingBox">
        <Stop offset="0" stopColor="#e7f0fd" stopOpacity="1"/>
        <Stop offset="1" stopColor="#ACE1EE" stopOpacity="1"/>
      </RadialGradient>
    </Defs>
    <Path id="LeftLeg" d="M322.417,402.486c.246,22.317,7.2,43.445,11.139,65.1,4.812,26.436,8.7,53.037,13.1,79.55,1.669,10.07,3.289,20.168,5.52,30.121,3.288,14.669,13.1,23.166,27.5,26.29,14.423,3.131,27.133-.027,37.007-11.669,5.994-7.067,7.436-15.388,6.356-24.242-2.209-18.133-4.653-36.236-6.879-54.366-1.375-11.191-3.092-22.381-3.642-33.621-.791-16.158,2.578-31.766,9.156-46.546,9.939-22.335,15.138-45.565,13.426-70.029-1.478-21.087-5.944-41.394-17.188-59.786-14.225-23.269-44.259-25.763-61.845-4.792-10.636,12.684-17.088,27.65-22.69,43.057C326.209,361.271,321.8,381.433,322.417,402.486Z" transform="translate(-322.36 -284.192)" fill="url(#radial-gradient)"/>
    
    <Svg id="Group_682" data-name="Group 682" width="45" height="45" viewBox="0 0 45 45" x="10%" y="20%">
    <Ellipse id="Ellipse_21" data-name="Ellipse 21" cx="22.5" cy="22.5" rx="22.5" ry="22.5" fill="#ffc82e" opacity="0.2"/>
    <Ellipse id="Ellipse_20" data-name="Ellipse 20" cx="17.5" cy="17.5" rx="17.5" ry="17.5" transform="translate(5 5)"    fill="#ffc82e" opacity="0.23"/>
    <Ellipse id="Ellipse_19" data-name="Ellipse 19" cx="11.5" cy="11.5" rx="11.5" ry="11.5" transform="translate(11 11)" fill="#fa0"  opacity="0.32"/>
    <Ellipse id="Ellipse_18" data-name="Ellipse 18" cx="4.5" cy="4.5" rx="4.5" ry="4.5" transform="translate(18 18)" fill="#fa0" opacity="0.7"/>
    </Svg>

    

    </Svg>

      {/* <Leftleg 
      height={530}
      width={150}
      >
      <Node
      height={30}
      width={30}
      styles={{zIndex:10}}
      />
      </Leftleg> */}
    </View>
  )
}

export default FeetMap

const styles = StyleSheet.create({})