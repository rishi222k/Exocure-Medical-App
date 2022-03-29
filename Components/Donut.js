import { Easing,TextInput,Animated,Text,View,StyleSheet} from 'react-native';
import Svg, { G, Circle, Rect } from 'react-native-svg';
import React from 'react'

const data = [{
  color: '#0090FF',
  max: 30,
  radius:100,
  circumference: 2 * Math.PI * 100,
},
{
  color: '#FFAA00',
  max: 8,
  radius:125,
  circumference: 2 * Math.PI * 125,
},
{
  color: '#00E98C',
  max: 2,
  radius:150,
  circumference: 2 * Math.PI * 150,
},]

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

const Donut = () => {

  const strokeWidth=13;
  const halfCircle= data[2].radius + strokeWidth;
  const animated = React.useRef(new Animated.Value(0)).current;
  const innCircleRef = React.useRef();
  const midCircleRef = React.useRef();
  const outCircleRef = React.useRef();

  return (
    <View>
    <Svg 
    style={{alignSelf:"center"}} 
    height={data[2].radius * 2} 
    width={data[2].radius * 2} 
    viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}>
      <G 
      rotation="-90"
      origin={`${halfCircle}, ${halfCircle}`}>

      {/* Inner Cirle */}
        <Circle
        cx='50%'
        cy='50%'
        stroke={data[0].color}
        strokeWidth={strokeWidth}
        r={data[0].radius}
        fill="transparent"
        strokeOpacity={0.2}
        />
        <AnimatedCircle 
        ref={innCircleRef}
        cx='50%'
        cy='50%'
        stroke={data[0].color}
        strokeWidth={strokeWidth}
        r={data[0].radius}
        fill="transparent"
        strokeDasharray={data[0].circumference}
        strokeDashoffset={data[0].circumference/2}
        strokeLinecap="round"
        />

      {/* Mid Cirle */}
        <Circle
        cx='50%'
        cy='50%'
        stroke={data[1].color}
        strokeWidth={strokeWidth}
        r={data[1].radius}
        fill="transparent"
        strokeOpacity={0.2}
        />
        <AnimatedCircle 
        ref={midCircleRef}
        cx='50%'
        cy='50%'
        stroke={data[1].color}
        strokeWidth={strokeWidth}
        r={data[1].radius}
        fill="transparent"
        />

        {/* Outer Cirle */}
        <Circle
        cx='50%'
        cy='50%'
        stroke={data[2].color}
        strokeWidth={strokeWidth}
        r={data[2].radius}
        fill="transparent"
        strokeOpacity={0.2}
        />
        <AnimatedCircle 
        ref={outCircleRef}
        cx='50%'
        cy='50%'
        stroke={data[2].color}
        strokeWidth={strokeWidth}
        r={data[2].radius}
        fill="transparent"
        />


      </G>
    </Svg>
    </View>
  )
}

export default Donut

const styles = StyleSheet.create({})