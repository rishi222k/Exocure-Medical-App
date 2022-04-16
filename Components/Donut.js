import { Easing,TextInput,Animated,Text,View,StyleSheet,TouchableOpacity} from 'react-native';
import Svg, { G, Circle, Rect } from 'react-native-svg';
import React from 'react'

const data = [{
  color: '#0090FF',
  max: 5,
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
  const animatedin = React.useRef(new Animated.Value(0)).current;
  const animatedmid = React.useRef(new Animated.Value(0)).current;
  const animatedout = React.useRef(new Animated.Value(0)).current;
  const innCircleRef = React.useRef();
  const midCircleRef = React.useRef();
  const outCircleRef = React.useRef();
  const inInputRef= React.useRef();
  const midInputRef= React.useRef();
  const outInputRef= React.useRef();

  const animationinn = () => {
    return Animated.loop(
    Animated.timing(animatedin, {
      delay: 1000,
      toValue:5,
      duration:5000,
      useNativeDriver: true,
      easing: Easing.out(Easing.ease),
    }),
    {
      iterations: 16
    }
    ).start();
  };
  
  const animationmid = () => {
    return Animated.loop(
    Animated.sequence([
    Animated.timing(animatedmid, {
      delay: 4000,
      toValue:1,
      duration:1000,
      useNativeDriver: true,
      easing: Easing.out(Easing.ease),
    }),
    Animated.timing(animatedmid, {
      delay: 4000,
      toValue:2,
      duration:1000,
      useNativeDriver: true,
      easing: Easing.out(Easing.ease),
    }),
    Animated.timing(animatedmid, {
      delay: 4000,
      toValue:3,
      duration:1000,
      useNativeDriver: true,
      easing: Easing.out(Easing.ease),
    }),
    Animated.timing(animatedmid, {
      delay: 4000,
      toValue:4,
      duration:1000,
      useNativeDriver: true,
      easing: Easing.out(Easing.ease),
    }),
    Animated.timing(animatedmid, {
      delay: 4000,
      toValue:5,
      duration:1000,
      useNativeDriver: true,
      easing: Easing.out(Easing.ease),
    }),
    Animated.timing(animatedmid, {
      delay: 4000,
      toValue:6,
      duration:1000,
      useNativeDriver: true,
      easing: Easing.out(Easing.ease),
    }),
    Animated.timing(animatedmid, {
      delay: 4000,
      toValue:7,
      duration:1000,
      useNativeDriver: true,
      easing: Easing.out(Easing.ease),
    }),
    Animated.timing(animatedmid, {
      delay: 4000,
      toValue:8,
      duration:1000,
      useNativeDriver: true,
      easing: Easing.out(Easing.ease),
    }),
  ]),
    {
      iterations: 2
    }
    ).start();
  };
  
  const animationout = () => {
    return Animated.sequence([
      Animated.timing(animatedout, {
      delay: 40000,
      toValue:1,
      duration:1000,
      useNativeDriver: true,
      easing: Easing.out(Easing.ease),
    }),
    Animated.timing(animatedout, {
      delay: 40000,
      toValue:2,
      duration:1000,
      useNativeDriver: true,
      easing: Easing.out(Easing.ease),
    }),]).start();
  };
  


  React.useEffect(() => {
    animationinn();
    animationmid();
    animationout();
    animatedin.addListener((v) => {
      const maxPerc = 100 * v.value / data[0].max;
      const strokeDashoffset = data[0].circumference - (data[0].circumference * maxPerc) / 100;
      if (inInputRef?.current) {
        inInputRef.current.setNativeProps({
          text: `${Math.round(v.value)}`,
        });
      }
      if (innCircleRef?.current) {
        innCircleRef.current.setNativeProps({
          strokeDashoffset,
        });
      }
    });

    animatedmid.addListener((v) => {
      const maxPerc = 100 * v.value / data[1].max;
      const strokeDashoffset = data[1].circumference - (data[1].circumference * maxPerc) / 100;

      if (midInputRef?.current) {
        midInputRef.current.setNativeProps({
          text: `${Math.round(v.value)}`,
        });
      }
      if (midCircleRef?.current) {
        midCircleRef.current.setNativeProps({
          strokeDashoffset,
        });
      }
    });

    animatedout.addListener((v) => {
      const maxPerc = 100 * v.value / data[2].max;
      const strokeDashoffset = data[2].circumference - (data[2].circumference * maxPerc) / 100;
      if (outInputRef?.current) {
        outInputRef.current.setNativeProps({
          text: `${Math.round(v.value+1)}`,
        });
      }
      if (outCircleRef?.current) {
        outCircleRef.current.setNativeProps({
          strokeDashoffset,
        });
      }
    });
    return () => {
      animatedin.removeAllListeners();
      animatedmid.removeAllListeners();
      animatedout.removeAllListeners();
    };
  });

  return (
    <View>
    <View style={{flexDirection:"row",justifyContent:"center"}}>
    <Text style={styles.head2}>Leg</Text>
    <AnimatedTextInput 
      ref={outInputRef}
      underlineColorAndroid="transparent"
      editable={false}
      defaultValue="1"
      style={styles.head2}
      ></AnimatedTextInput>
    </View>
    <View style={{flexDirection:"row",justifyContent:"center",marginBottom:15}}>
    <Text style={styles.head1}>Step </Text>
    <AnimatedTextInput 
      ref={midInputRef}
      underlineColorAndroid="transparent"
      editable={false}
      defaultValue="1"
      style={styles.head1}
      > of 8</AnimatedTextInput>
    </View>
    
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
        strokeDashoffset={data[0].circumference}
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
        strokeDasharray={data[1].circumference}
        strokeDashoffset={data[1].circumference}
        strokeLinecap="round"
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
        strokeDasharray={data[2].circumference}
        strokeDashoffset={data[2].circumference}
        strokeLinecap="round"
        />


      </G>
    </Svg>
    <AnimatedTextInput
        ref={inInputRef}
        underlineColorAndroid="transparent"
        editable={false}
        defaultValue="0"
        style={[
          StyleSheet.absoluteFillObject,
          { fontSize: data[1].radius / 2},
          styles.text,
        ]}
      > s</AnimatedTextInput>
    </View>
  )
}

export default Donut

const styles = StyleSheet.create({
  text:{
    fontFamily:"SFNSThin",
    textAlign: 'center',
    color:"#3A3A3A",
    marginTop:75
  },
  head1:{
    fontSize: 23,
    fontFamily:"SFProDisplayHeavy", 
    textAlign: 'center',
    color:"#3A3A3A",
    fontWeight:"900"
  },
  head2:{
    fontSize: 21,
    fontFamily:"SFProDisplaySemibold", 
    textAlign: 'center',
    color:"#AAAAAA",
    fontWeight:"900"
  },
})