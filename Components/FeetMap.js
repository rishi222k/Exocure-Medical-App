import { StyleSheet, Text, View, Animated, Easing } from 'react-native'
import Svg, {Path,Defs,Stop,RadialGradient,Ellipse,G} from 'react-native-svg';
import firestore from '@react-native-firebase/firestore';
import {AuthContext} from '../Navigation/AuthProvider';
import React,{useState, useContext,useEffect,useRef} from 'react'


const FeetMap = () => {

  const {user,logout} = useContext(AuthContext);

  const [senseone, setsenseone] = useState(true);
  const [sensetwo, setsensetwo] = useState(true);
  const [sensethree, setsensethree] = useState(true);
  const [sensefour, setsensefour] = useState(true);
  const [sensefive, setsensefive] = useState(true);
  const [sensesix, setsensesix] = useState(true);
  const [sensesevn, setsensesevn] = useState(true);
  const [senseight, setsenseight] = useState(true);

  const [sensedone, setsensedone] = useState(true);
  const [sensedtwo, setsensedtwo] = useState(true);
  const [sensedthree, setsensedthree] = useState(true);
  const [sensedfour, setsensedfour] = useState(true);
  const [sensedfive, setsensedfive] = useState(true);
  const [sensedsix, setsensedsix] = useState(true);
  const [sensedsevn, setsensedsevn] = useState(true);
  const [sensedeight, setsensedeight] = useState(true);

  useEffect(() => {
    const userdata= async()=>{ 
      const users = await firestore().collection('Diagnosis').doc(user.uid).get()
      .then(documentSnapshot => {
        
        setsenseone(documentSnapshot.data().sense1);
        setsensetwo(documentSnapshot.data().sense2);
        setsensethree(documentSnapshot.data().sense3);
        setsensefour(documentSnapshot.data().sense4);
        setsensefive(documentSnapshot.data().sense5);
        setsensesix(documentSnapshot.data().sense6);
        setsensesevn(documentSnapshot.data().sense7);
        setsenseight(documentSnapshot.data().sense8);

        setsensedone(documentSnapshot.data().sense9);
        setsensedtwo(documentSnapshot.data().sense10);
        setsensedthree(documentSnapshot.data().sense11);
        setsensedfour(documentSnapshot.data().sense12);
        setsensedfive(documentSnapshot.data().sense13);
        setsensedsix(documentSnapshot.data().sense14);
        setsensedsevn(documentSnapshot.data().sense15);
        setsensedeight(documentSnapshot.data().sense16);
        
      });
    };

  userdata();
  const left = [senseone, sensetwo, sensethree, sensefour, sensefive,sensesix,sensesevn,senseight];
  const right = [sensedone, sensedtwo, sensedthree, sensedfour, sensedfive,sensedsix,sensedsevn,sensedeight];

  const countload=async()=>{

    await firestore().collection('Diagnosis').doc(user.uid).update({
      cleft:8-left.filter(Boolean).length,
      cright:8-right.filter(Boolean).length,
    })
    .then(() => {
      console.log('Count updated on cloud firestore!');
    });
  }

  countload();
  

  }, [sensedeight]);
  

  return (
    <View style={{flexDirection:"row",justifyContent:"space-between"}}>

    {/* Left Leg */}
    <View>
    <Svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="160.208" height="404.116" viewBox="0 0 131.208 324.116">
    <Defs>
      <RadialGradient id="radial-gradient" cx="0.5" cy="0.5" r="0.55" gradientUnits="objectBoundingBox">
        <Stop offset="0" stopColor="#e7f0fd" stopOpacity="1"/>
        <Stop offset="1" stopColor="#ACE1EE" stopOpacity="1"/>
      </RadialGradient>
    </Defs>
    <G id="LeftLegFull" transform="translate(-1.292 3.622)">
    <Path id="LeftLeg" d="M322.417,402.486c.246,22.317,7.2,43.445,11.139,65.1,4.812,26.436,8.7,53.037,13.1,79.55,1.669,10.07,3.289,20.168,5.52,30.121,3.288,14.669,13.1,23.166,27.5,26.29,14.423,3.131,27.133-.027,37.007-11.669,5.994-7.067,7.436-15.388,6.356-24.242-2.209-18.133-4.653-36.236-6.879-54.366-1.375-11.191-3.092-22.381-3.642-33.621-.791-16.158,2.578-31.766,9.156-46.546,9.939-22.335,15.138-45.565,13.426-70.029-1.478-21.087-5.944-41.394-17.188-59.786-14.225-23.269-44.259-25.763-61.845-4.792-10.636,12.684-17.088,27.65-22.69,43.057C326.209,361.271,321.8,381.433,322.417,402.486Z" transform="translate(-318.099 -284.192)" fill="url(#radial-gradient)"/>
    <G id="Group_664" data-name="Group 664" transform="translate(1.292 137.747)"
     style={[senseone ?  styles.deactivate : null]}>
      <Ellipse id="Ellipse_21" data-name="Ellipse 21" cx="22.5" cy="22.5" rx="22.5" ry="22.5" fill="#ffc82e" opacity="0.2"/>
      <Ellipse id="Ellipse_20" data-name="Ellipse 20" cx="17.5" cy="17.5" rx="17.5" ry="17.5" transform="translate(5 5)" fill="#ffc82e" opacity="0.23"/>
      <Ellipse id="Ellipse_19" data-name="Ellipse 19" cx="11.5" cy="11.5" rx="11.5" ry="11.5" transform="translate(11 11)" fill="#fa0" opacity="0.32"/>
      <Ellipse id="Ellipse_18" data-name="Ellipse 18" cx="4.5" cy="4.5" rx="4.5" ry="4.5" transform="translate(18 18)" fill="#fa0" opacity="0.7"/>
    </G>
    <G id="Group_678" data-name="Group 678" transform="translate(85.5 55.377)"
    style={[sensetwo ?  styles.deactivate : null]}>
      <Ellipse id="Ellipse_21-2" data-name="Ellipse 21" cx="22.5" cy="22.5" rx="22.5" ry="22.5" fill="#ffc82e" opacity="0.2"/>
      <Ellipse id="Ellipse_20-2" data-name="Ellipse 20" cx="17.5" cy="17.5" rx="17.5" ry="17.5" transform="translate(5 5)" fill="#ffc82e" opacity="0.23"/>
      <Ellipse id="Ellipse_19-2" data-name="Ellipse 19" cx="11.5" cy="11.5" rx="11.5" ry="11.5" transform="translate(11 11)" fill="#fa0" opacity="0.32"/>
      <Ellipse id="Ellipse_18-2" data-name="Ellipse 18" cx="4.5" cy="4.5" rx="4.5" ry="4.5" transform="translate(18 18)" fill="#fa0" opacity="0.7"/>
    </G>
    <G id="Group_683" data-name="Group 683" transform="translate(15.792 211.377)"
    style={[sensethree ?  styles.deactivate : null]}>
      <Ellipse id="Ellipse_21-3" data-name="Ellipse 21" cx="22.5" cy="22.5" rx="22.5" ry="22.5" fill="#ffc82e" opacity="0.2"/>
      <Ellipse id="Ellipse_20-3" data-name="Ellipse 20" cx="17.5" cy="17.5" rx="17.5" ry="17.5" transform="translate(5 5)" fill="#ffc82e" opacity="0.23"/>
      <Ellipse id="Ellipse_19-3" data-name="Ellipse 19" cx="11.5" cy="11.5" rx="11.5" ry="11.5" transform="translate(11 11)" fill="#fa0" opacity="0.32"/>
      <Ellipse id="Ellipse_18-3" data-name="Ellipse 18" cx="4.5" cy="4.5" rx="4.5" ry="4.5" transform="translate(18 18)" fill="#fa0" opacity="0.7"/>
    </G>
    <G id="Group_679" data-name="Group 679" transform="translate(23.792 71.377)"
    style={[sensefour ?  styles.deactivate : null]}>
      <Ellipse id="Ellipse_21-4" data-name="Ellipse 21" cx="22.5" cy="22.5" rx="22.5" ry="22.5" fill="#ffc82e" opacity="0.2"/>
      <Ellipse id="Ellipse_20-4" data-name="Ellipse 20" cx="17.5" cy="17.5" rx="17.5" ry="17.5" transform="translate(5 5)" fill="#ffc82e" opacity="0.23"/>
      <Ellipse id="Ellipse_19-4" data-name="Ellipse 19" cx="11.5" cy="11.5" rx="11.5" ry="11.5" transform="translate(11 11)" fill="#fa0" opacity="0.32"/>
      <Ellipse id="Ellipse_18-4" data-name="Ellipse 18" cx="4.5" cy="4.5" rx="4.5" ry="4.5" transform="translate(18 18)" fill="#fa0" opacity="0.7"/>
    </G>
    <G id="Group_682" data-name="Group 682" transform="translate(65 -3.622)"
    style={[sensefive ?  styles.deactivate : null]}>
      <Ellipse id="Ellipse_21-5" data-name="Ellipse 21" cx="22.5" cy="22.5" rx="22.5" ry="22.5" fill="#ffc82e" opacity="0.2"/>
      <Ellipse id="Ellipse_20-5" data-name="Ellipse 20" cx="17.5" cy="17.5" rx="17.5" ry="17.5" transform="translate(5 5)" fill="#ffc82e" opacity="0.23"/>
      <Ellipse id="Ellipse_19-5" data-name="Ellipse 19" cx="11.5" cy="11.5" rx="11.5" ry="11.5" transform="translate(11 11)" fill="#fa0" opacity="0.32"/>
      <Ellipse id="Ellipse_18-5" data-name="Ellipse 18" cx="4.5" cy="4.5" rx="4.5" ry="4.5" transform="translate(18 18)" fill="#fa0" opacity="0.7"/>
    </G>
    <G id="Group_680" data-name="Group 680" transform="translate(68.792 157.377)"
    style={[sensesix ?  styles.deactivate : null]}>
      <Ellipse id="Ellipse_21-6" data-name="Ellipse 21" cx="22.5" cy="22.5" rx="22.5" ry="22.5" transform="translate(0 0)" fill="#ffc82e" opacity="0.2"/>
      <Ellipse id="Ellipse_20-6" data-name="Ellipse 20" cx="17.5" cy="17.5" rx="17.5" ry="17.5" transform="translate(5 5)" fill="#ffc82e" opacity="0.23"/>
      <Ellipse id="Ellipse_19-6" data-name="Ellipse 19" cx="11.5" cy="11.5" rx="11.5" ry="11.5" transform="translate(11 11)" fill="#fa0" opacity="0.32"/>
      <Ellipse id="Ellipse_18-6" data-name="Ellipse 18" cx="4.5" cy="4.5" rx="4.5" ry="4.5" transform="translate(18 18)" fill="#fa0" opacity="0.7"/>
    </G>
    <G id="Group_681" data-name="Group 681" transform="translate(60.792 265.377)"
    style={[sensesevn ?  styles.deactivate : null]}>
      <Ellipse id="Ellipse_21-7" data-name="Ellipse 21" cx="22.5" cy="22.5" rx="22.5" ry="22.5" fill="#ffc82e" opacity="0.2"/>
      <Ellipse id="Ellipse_20-7" data-name="Ellipse 20" cx="17.5" cy="17.5" rx="17.5" ry="17.5" transform="translate(5 5)" fill="#ffc82e" opacity="0.23"/>
      <Ellipse id="Ellipse_19-7" data-name="Ellipse 19" cx="11.5" cy="11.5" rx="11.5" ry="11.5" transform="translate(11 11)" fill="#fa0" opacity="0.32"/>
      <Ellipse id="Ellipse_18-7" data-name="Ellipse 18" cx="4.5" cy="4.5" rx="4.5" ry="4.5" transform="translate(18 18)" fill="#fa0" opacity="0.7"/>
    </G>
    <G id="Group_677" data-name="Group 677" transform="translate(5 10.377)"
    style={[senseight ?  styles.deactivate : null]}>
      <Ellipse id="Ellipse_21-8" data-name="Ellipse 21" cx="22.5" cy="22.5" rx="22.5" ry="22.5" transform="translate(0 0)" fill="#ffc82e" opacity="0.2"/>
      <Ellipse id="Ellipse_20-8" data-name="Ellipse 20" cx="17.5" cy="17.5" rx="17.5" ry="17.5" transform="translate(5 5)" fill="#ffc82e" opacity="0.23"/>
      <Ellipse id="Ellipse_19-8" data-name="Ellipse 19" cx="11.5" cy="11.5" rx="11.5" ry="11.5" transform="translate(11 11)" fill="#fa0" opacity="0.32"/>
      <Ellipse id="Ellipse_18-8" data-name="Ellipse 18" cx="4.5" cy="4.5" rx="4.5" ry="4.5" transform="translate(18 18)" fill="#fa0" opacity="0.7"/>
    </G>
    </G>
    </Svg>
    <Text style={{textAlign:"center",marginTop:20,fontFamily:"CircularXXTTBold",fontSize:22,color:'#C2C2C2',}}>Left</Text>
    </View>


    {/* Right Leg */}

    <View>
    <Svg id="RightLegFull" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"  width="160.208" height="404.116" viewBox="0 0 131.208 324.116">
    <Defs>
      <RadialGradient id="radial-gradient" cx="0.5" cy="0.5" r="0.55" gradientUnits="objectBoundingBox">
        <Stop offset="0" stopColor="#e7f0fd" stopOpacity="1"/>
        <Stop offset="1" stopColor="#ACE1EE" stopOpacity="1"/>
      </RadialGradient>
    </Defs>
  <Path id="RightLeg" d="M435.364,402.486c-.246,22.317-7.2,43.445-11.139,65.1-4.812,26.436-8.7,53.037-13.1,79.55-1.669,10.07-3.289,20.168-5.52,30.121-3.288,14.669-13.1,23.166-27.5,26.29-14.423,3.131-27.133-.027-37.007-11.669-5.994-7.067-7.436-15.388-6.356-24.242,2.209-18.133,4.653-36.236,6.879-54.366,1.375-11.191,3.092-22.381,3.642-33.621.791-16.158-2.578-31.766-9.156-46.546-9.939-22.335-15.138-45.565-13.426-70.029,1.478-21.087,5.944-41.394,17.188-59.786,14.225-23.269,44.259-25.763,61.845-4.792,10.636,12.684,17.088,27.65,22.69,43.057C431.572,361.271,435.978,381.433,435.364,402.486Z" transform="translate(-307.182 -280.569)" fill="url(#radial-gradient)"/>
  <G id="Group_664" data-name="Group 664" transform="translate(86.208 141.369)"
  style={[sensedone ?  styles.deactivate : null]}>
    <Ellipse id="Ellipse_21" data-name="Ellipse 21" cx="22.5" cy="22.5" rx="22.5" ry="22.5" fill="#ffc82e" opacity="0.2"/>
    <Ellipse id="Ellipse_20" data-name="Ellipse 20" cx="17.5" cy="17.5" rx="17.5" ry="17.5" transform="translate(5 5)" fill="#ffc82e" opacity="0.23"/>
    <Ellipse id="Ellipse_19" data-name="Ellipse 19" cx="11.5" cy="11.5" rx="11.5" ry="11.5" transform="translate(11 11)" fill="#fa0" opacity="0.32"/>
    <Ellipse id="Ellipse_18" data-name="Ellipse 18" cx="4.5" cy="4.5" rx="4.5" ry="4.5" transform="translate(18 18)" fill="#fa0" opacity="0.7"/>
  </G>
  <G id="Group_678" data-name="Group 678" transform="translate(0 59)"
  style={[sensedtwo ?  styles.deactivate : null]}>
    <Ellipse id="Ellipse_21-2" data-name="Ellipse 21" cx="22.5" cy="22.5" rx="22.5" ry="22.5" fill="#ffc82e" opacity="0.2"/>
    <Ellipse id="Ellipse_20-2" data-name="Ellipse 20" cx="17.5" cy="17.5" rx="17.5" ry="17.5" transform="translate(5 5)" fill="#ffc82e" opacity="0.23"/>
    <Ellipse id="Ellipse_19-2" data-name="Ellipse 19" cx="11.5" cy="11.5" rx="11.5" ry="11.5" transform="translate(11 11)" fill="#fa0" opacity="0.32"/>
    <Ellipse id="Ellipse_18-2" data-name="Ellipse 18" cx="4.5" cy="4.5" rx="4.5" ry="4.5" transform="translate(18 18)" fill="#fa0" opacity="0.7"/>
  </G>
  <G id="Group_683" data-name="Group 683" transform="translate(71.708 215)"
  style={[sensedthree ?  styles.deactivate : null]}>
    <Ellipse id="Ellipse_21-3" data-name="Ellipse 21" cx="22.5" cy="22.5" rx="22.5" ry="22.5" fill="#ffc82e" opacity="0.2"/>
    <Ellipse id="Ellipse_20-3" data-name="Ellipse 20" cx="17.5" cy="17.5" rx="17.5" ry="17.5" transform="translate(5 5)" fill="#ffc82e" opacity="0.23"/>
    <Ellipse id="Ellipse_19-3" data-name="Ellipse 19" cx="11.5" cy="11.5" rx="11.5" ry="11.5" transform="translate(11 11)" fill="#fa0" opacity="0.32"/>
    <Ellipse id="Ellipse_18-3" data-name="Ellipse 18" cx="4.5" cy="4.5" rx="4.5" ry="4.5" transform="translate(18 18)" fill="#fa0" opacity="0.7"/>
  </G>
  <G id="Group_679" data-name="Group 679" transform="translate(63.708 75)"
  style={[sensedfour ?  styles.deactivate : null]}>
    <Ellipse id="Ellipse_21-4" data-name="Ellipse 21" cx="22.5" cy="22.5" rx="22.5" ry="22.5" fill="#ffc82e" opacity="0.2"/>
    <Ellipse id="Ellipse_20-4" data-name="Ellipse 20" cx="17.5" cy="17.5" rx="17.5" ry="17.5" transform="translate(5 5)" fill="#ffc82e" opacity="0.23"/>
    <Ellipse id="Ellipse_19-4" data-name="Ellipse 19" cx="11.5" cy="11.5" rx="11.5" ry="11.5" transform="translate(11 11)" fill="#fa0" opacity="0.32"/>
    <Ellipse id="Ellipse_18-4" data-name="Ellipse 18" cx="4.5" cy="4.5" rx="4.5" ry="4.5" transform="translate(18 18)" fill="#fa0" opacity="0.7"/>
  </G>
  <G id="Group_682" data-name="Group 682" transform="translate(22.5 0)"
  style={[sensedfive ?  styles.deactivate : null]}>
    <Ellipse id="Ellipse_21-5" data-name="Ellipse 21" cx="22.5" cy="22.5" rx="22.5" ry="22.5" fill="#ffc82e" opacity="0.2"/>
    <Ellipse id="Ellipse_20-5" data-name="Ellipse 20" cx="17.5" cy="17.5" rx="17.5" ry="17.5" transform="translate(5 5)" fill="#ffc82e" opacity="0.23"/>
    <Ellipse id="Ellipse_19-5" data-name="Ellipse 19" cx="11.5" cy="11.5" rx="11.5" ry="11.5" transform="translate(11 11)" fill="#fa0" opacity="0.32"/>
    <Ellipse id="Ellipse_18-5" data-name="Ellipse 18" cx="4.5" cy="4.5" rx="4.5" ry="4.5" transform="translate(18 18)" fill="#fa0" opacity="0.7"/>
  </G>
  <G id="Group_680" data-name="Group 680" transform="translate(18.708 161)"
  style={[sensedsix ?  styles.deactivate : null]}>
    <Ellipse id="Ellipse_21-6" data-name="Ellipse 21" cx="22.5" cy="22.5" rx="22.5" ry="22.5" transform="translate(0 0)" fill="#ffc82e" opacity="0.2"/>
    <Ellipse id="Ellipse_20-6" data-name="Ellipse 20" cx="17.5" cy="17.5" rx="17.5" ry="17.5" transform="translate(5 5)" fill="#ffc82e" opacity="0.23"/>
    <Ellipse id="Ellipse_19-6" data-name="Ellipse 19" cx="11.5" cy="11.5" rx="11.5" ry="11.5" transform="translate(11 11)" fill="#fa0" opacity="0.32"/>
    <Ellipse id="Ellipse_18-6" data-name="Ellipse 18" cx="4.5" cy="4.5" rx="4.5" ry="4.5" transform="translate(18 18)" fill="#fa0" opacity="0.7"/>
  </G>
  <G id="Group_681" data-name="Group 681" transform="translate(26.708 269)"
  style={[sensedsevn ?  styles.deactivate : null]}>
    <Ellipse id="Ellipse_21-7" data-name="Ellipse 21" cx="22.5" cy="22.5" rx="22.5" ry="22.5" fill="#ffc82e" opacity="0.2"/>
    <Ellipse id="Ellipse_20-7" data-name="Ellipse 20" cx="17.5" cy="17.5" rx="17.5" ry="17.5" transform="translate(5 5)" fill="#ffc82e" opacity="0.23"/>
    <Ellipse id="Ellipse_19-7" data-name="Ellipse 19" cx="11.5" cy="11.5" rx="11.5" ry="11.5" transform="translate(11 11)" fill="#fa0" opacity="0.32"/>
    <Ellipse id="Ellipse_18-7" data-name="Ellipse 18" cx="4.5" cy="4.5" rx="4.5" ry="4.5" transform="translate(18 18)" fill="#fa0" opacity="0.7"/>
  </G>
  <G id="Group_677" data-name="Group 677" transform="translate(82.5 14)"
  style={[sensedeight ?  styles.deactivate : null]}>
    <Ellipse id="Ellipse_21-8" data-name="Ellipse 21" cx="22.5" cy="22.5" rx="22.5" ry="22.5" transform="translate(0 0)" fill="#ffc82e" opacity="0.2"/>
    <Ellipse id="Ellipse_20-8" data-name="Ellipse 20" cx="17.5" cy="17.5" rx="17.5" ry="17.5" transform="translate(5 5)" fill="#ffc82e" opacity="0.23"/>
    <Ellipse id="Ellipse_19-8" data-name="Ellipse 19" cx="11.5" cy="11.5" rx="11.5" ry="11.5" transform="translate(11 11)" fill="#fa0" opacity="0.32"/>
    <Ellipse id="Ellipse_18-8" data-name="Ellipse 18" cx="4.5" cy="4.5" rx="4.5" ry="4.5" transform="translate(18 18)" fill="#fa0" opacity="0.7"/>
  </G>
  </Svg>
  <Text style={styles.legend}>Right</Text>
  </View>


    
    </View>
  )
}

export default FeetMap

const styles = StyleSheet.create({
  deactivate:{
    display:"none",
  },
  legend:{
    textAlign:"center",
    marginTop:20,
    fontFamily:"CircularXXTTBold",
    fontSize:22,
    color:'#C2C2C2',
    marginBottom:10
  }
})