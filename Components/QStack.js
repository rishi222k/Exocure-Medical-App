import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React,{ useState,useEffect,useContext } from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import firestore from '@react-native-firebase/firestore';
import { doc, updateDoc } from "firebase/firestore";
import {db} from "../firebaseConfig"
import {AuthContext, AuthProvider} from '../Navigation/AuthProvider';


const QStack = () => {

  
  const Stack= createStackNavigator();
  const {user,logout} = useContext(AuthContext);
  

  const Ques1 = () => {
    const navigation = useNavigation();
    const [Qone, setQone] = useState(false);

    useEffect(() => {

      const timer= setTimeout(async() => {
        navigation.navigate('Ques2')
        const QRef = doc(db, "Diagnosis", user.uid);
        await updateDoc(QRef,{
          sense1: Qone,
          diagcheck:true,
        });
      }, 5000);
    });
    
    return (
      <View style={styles.stackscreen}>
        <Text style={styles.queshead}>Question 1 of 8</Text>
        <Text style={styles.question}>Can you feel sensory vibrations on your right leg from motor 1 ?</Text>
        <View style={styles.ansrow}>
        <TouchableOpacity onPress={()=>{setQone(true);}}>
          <View style={[styles.but1, Qone ? styles.newbg : styles.oldbg]}>
          <Text style={[styles.opstext, Qone ? styles.newtxt : styles.oldtxt]}>Yes</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{setQone(false);}}>
          <View style={[styles.but1, Qone ?  styles.oldbg : styles.newbg ]}>
              <Text style={[styles.opstext, Qone ?  styles.oldtxt : styles.newtxt ]}>No</Text>
          </View>
        </TouchableOpacity>
        </View>
    </View>
    )
  }
  
  const Ques2 = () => {
    const navigation = useNavigation();
    const [Qtwo, setQtwo] = useState(false);
    
    useEffect(() => {
      const timer= setTimeout(async() => {
        navigation.navigate('Ques3')
        const QRef = doc(db, "Diagnosis", user.uid);
        await updateDoc(QRef,{
          sense2: Qtwo,
        });
      }, 5000);
      
      
    });
    
    return (
      <View style={styles.stackscreen}>
        <Text style={styles.queshead}>Question 2 of 8</Text>
        <Text style={styles.question}>Can you feel sensory vibrations on your right leg from motor 2 ?</Text>
        <View style={styles.ansrow}>
        <TouchableOpacity onPress={()=>{setQtwo(true)}}>
          <View style={[styles.but1, Qtwo ? styles.newbg : styles.oldbg]}>
          <Text style={[styles.opstext, Qtwo ? styles.newtxt : styles.oldtxt]}>Yes</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{setQtwo(false)}}>
          <View style={[styles.but1, Qtwo ?  styles.oldbg : styles.newbg ]}>
              <Text style={[styles.opstext, Qtwo ?  styles.oldtxt : styles.newtxt ]}>No</Text>
          </View>
        </TouchableOpacity>
        </View>
    </View>
    )
  }

  const Ques3 = () => {
    const navigation = useNavigation();
    const [Qthree, setQthree] = useState(false);

     useEffect(() => {
      const timer= setTimeout(async() => {
        navigation.navigate('Ques4')
        const QRef = doc(db, "Diagnosis", user.uid);
        await updateDoc(QRef,{
          sense3: Qthree,
        });
      }, 5000);
      
      
    });
    
    return (
      <View style={styles.stackscreen}>
        <Text style={styles.queshead}>Question 3 of 8</Text>
        <Text style={styles.question}>Can you feel sensory vibrations on your right leg from motor 3 ?</Text>
        <View style={styles.ansrow}>
        <TouchableOpacity onPress={()=>{setQthree(true)}}>
          <View style={[styles.but1, Qthree ? styles.newbg : styles.oldbg]}>
          <Text style={[styles.opstext, Qthree ? styles.newtxt : styles.oldtxt]}>Yes</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{setQthree(false)}}>
          <View style={[styles.but1, Qthree ?  styles.oldbg : styles.newbg ]}>
              <Text style={[styles.opstext, Qthree ?  styles.oldtxt : styles.newtxt ]}>No</Text>
          </View>
        </TouchableOpacity>
        </View>
    </View>
    )
  }

  const Ques4 = () => {
    const navigation = useNavigation();
    const [Qfour, setQfour] = useState(false);

     useEffect(() => {
      const timer= setTimeout(async() => {
        navigation.navigate('Ques5')
        const QRef = doc(db, "Diagnosis", user.uid);
        await updateDoc(QRef,{
          sense4: Qfour,
        });
      }, 5000);
      
      
    });
    
    return (
      <View style={styles.stackscreen}>
        <Text style={styles.queshead}>Question 4 of 8</Text>
        <Text style={styles.question}>Can you feel sensory vibrations on your right leg from motor 4 ?</Text>
        <View style={styles.ansrow}>
        <TouchableOpacity onPress={()=>{setQfour(true)}}>
          <View style={[styles.but1, Qfour ? styles.newbg : styles.oldbg]}>
          <Text style={[styles.opstext, Qfour ? styles.newtxt : styles.oldtxt]}>Yes</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{setQfour(false)}}>
          <View style={[styles.but1, Qfour ?  styles.oldbg : styles.newbg ]}>
              <Text style={[styles.opstext, Qfour ?  styles.oldtxt : styles.newtxt ]}>No</Text>
          </View>
        </TouchableOpacity>
        </View>
    </View>
    )
  }

  const Ques5 = () => {
    const navigation = useNavigation();
    const [Qfive, setQfive] = useState(false);

     useEffect(() => {
      const timer= setTimeout(async() => {
        navigation.navigate('Ques6')
        const QRef = doc(db, "Diagnosis", user.uid);
        await updateDoc(QRef,{
          sense5: Qfive,
        });
      }, 5000);
      
      
    });
    
    return (
      <View style={styles.stackscreen}>
        <Text style={styles.queshead}>Question 5 of 8</Text>
        <Text style={styles.question}>Can you feel sensory vibrations on your right leg from motor 5 ?</Text>
        <View style={styles.ansrow}>
        <TouchableOpacity onPress={()=>{setQfive(true)}}>
          <View style={[styles.but1, Qfive ? styles.newbg : styles.oldbg]}>
          <Text style={[styles.opstext, Qfive ? styles.newtxt : styles.oldtxt]}>Yes</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{setQfive(false)}}>
          <View style={[styles.but1, Qfive ?  styles.oldbg : styles.newbg ]}>
              <Text style={[styles.opstext, Qfive ?  styles.oldtxt : styles.newtxt ]}>No</Text>
          </View>
        </TouchableOpacity>
        </View>
    </View>
    )
  }

  const Ques6 = () => {
    const navigation = useNavigation();
    const [Qsix, setQsix] = useState(false);

     useEffect(() => {
      const timer= setTimeout(async() => {
        navigation.navigate('Ques7')
        const QRef = doc(db, "Diagnosis", user.uid);
        await updateDoc(QRef,{
          sense6: Qsix,
        });
      }, 5000);
      
     
    });
    
    return (
      <View style={styles.stackscreen}>
        <Text style={styles.queshead}>Question 6 of 8</Text>
        <Text style={styles.question}>Can you feel sensory vibrations on your right leg from motor 6 ?</Text>
        <View style={styles.ansrow}>
        <TouchableOpacity onPress={()=>{setQsix(true)}}>
          <View style={[styles.but1, Qsix ? styles.newbg : styles.oldbg]}>
          <Text style={[styles.opstext, Qsix ? styles.newtxt : styles.oldtxt]}>Yes</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{setQsix(false)}}>
          <View style={[styles.but1, Qsix ?  styles.oldbg : styles.newbg ]}>
              <Text style={[styles.opstext, Qsix ?  styles.oldtxt : styles.newtxt ]}>No</Text>
          </View>
        </TouchableOpacity>
        </View>
    </View>
    )
  }

  const Ques7 = () => {
    const navigation = useNavigation();
    const [Qseven, setQseven] = useState(false);

     useEffect(() => {
      const timer= setTimeout(async() => {
        navigation.navigate('Ques8')
        const QRef = doc(db, "Diagnosis", user.uid);
        await updateDoc(QRef,{
          sense7: Qseven,
        });
      }, 5000);
      
      
    });
    
    return (
      <View style={styles.stackscreen}>
        <Text style={styles.queshead}>Question 7 of 8</Text>
        <Text style={styles.question}>Can you feel sensory vibrations on your right leg from motor 7 ?</Text>
        <View style={styles.ansrow}>
        <TouchableOpacity onPress={()=>{setQseven(true)}}>
          <View style={[styles.but1, Qseven ? styles.newbg : styles.oldbg]}>
          <Text style={[styles.opstext, Qseven ? styles.newtxt : styles.oldtxt]}>Yes</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{setQseven(false)}}>
          <View style={[styles.but1, Qseven ?  styles.oldbg : styles.newbg ]}>
              <Text style={[styles.opstext, Qseven ?  styles.oldtxt : styles.newtxt ]}>No</Text>
          </View>
        </TouchableOpacity>
        </View>
    </View>
    )
  }

  const Ques8 = () => {
    const navigation = useNavigation();
    const [Qeight, setQeight] = useState(false);

     useEffect(() => {
      const timer= setTimeout(async() => {
        navigation.navigate('Ques9')
        const QRef = doc(db, "Diagnosis", user.uid);
        await updateDoc(QRef,{
          sense8: Qeight,
        });
      }, 5000);
      
      
    });
    
    return (
      <View style={styles.stackscreen}>
        <Text style={styles.queshead}>Question 8 of 8</Text>
        <Text style={styles.question}>Can you feel sensory vibrations on your right leg from motor 8 ?</Text>
        <View style={styles.ansrow}>
        <TouchableOpacity onPress={()=>{setQeight(true)}}>
          <View style={[styles.but1, Qeight ? styles.newbg : styles.oldbg]}>
          <Text style={[styles.opstext, Qeight ? styles.newtxt : styles.oldtxt]}>Yes</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{setQeight(false)}}>
          <View style={[styles.but1, Qeight ?  styles.oldbg : styles.newbg ]}>
              <Text style={[styles.opstext, Qeight ?  styles.oldtxt : styles.newtxt ]}>No</Text>
          </View>
        </TouchableOpacity>
        </View>
    </View>
    )
  }

  const Ques9 = () => {
    const navigation = useNavigation();
    const [Qnine, setQnine] = useState(false);

     useEffect(() => {
      const timer= setTimeout(async() => {
        navigation.navigate('Ques10')
        const QRef = doc(db, "Diagnosis", user.uid);
        await updateDoc(QRef,{
          sense9: Qnine,
        });
      }, 5000);
      
      
    });
    
    return (
      <View style={styles.stackscreen}>
        <Text style={styles.queshead}>Question 1 of 8</Text>
        <Text style={styles.question}>Can you feel sensory vibrations on your left leg from motor 1 ?</Text>
        <View style={styles.ansrow}>
        <TouchableOpacity onPress={()=>{setQnine(true)}}>
          <View style={[styles.but1, Qnine ? styles.newbg : styles.oldbg]}>
          <Text style={[styles.opstext, Qnine ? styles.newtxt : styles.oldtxt]}>Yes</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{setQnine(false)}}>
          <View style={[styles.but1, Qnine ?  styles.oldbg : styles.newbg ]}>
              <Text style={[styles.opstext, Qnine ?  styles.oldtxt : styles.newtxt ]}>No</Text>
          </View>
        </TouchableOpacity>
        </View>
    </View>
    )
  }

  const Ques10 = () => {
    const navigation = useNavigation();
    const [Qten, setQten] = useState(false);

     useEffect(() => {
      const timer= setTimeout(async() => {
        navigation.navigate('Ques11')
        const QRef = doc(db, "Diagnosis", user.uid);
        await updateDoc(QRef,{
          sense10: Qten,
        });
      }, 5000);
      
      
    });
    
    return (
      <View style={styles.stackscreen}>
        <Text style={styles.queshead}>Question 2 of 8</Text>
        <Text style={styles.question}>Can you feel sensory vibrations on your left leg from motor 2 ?</Text>
        <View style={styles.ansrow}>
        <TouchableOpacity onPress={()=>{setQten(true)}}>
          <View style={[styles.but1, Qten ? styles.newbg : styles.oldbg]}>
          <Text style={[styles.opstext, Qten ? styles.newtxt : styles.oldtxt]}>Yes</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{setQten(false)}}>
          <View style={[styles.but1, Qten ?  styles.oldbg : styles.newbg ]}>
              <Text style={[styles.opstext, Qten ?  styles.oldtxt : styles.newtxt ]}>No</Text>
          </View>
        </TouchableOpacity>
        </View>
    </View>
    )
  }

  const Ques11 = () => {
    const navigation = useNavigation();
    const [Qelev, setQelev] = useState(false);

     useEffect(() => {
      const timer= setTimeout(async() => {
        navigation.navigate('Ques12')
        const QRef = doc(db, "Diagnosis", user.uid);
        await updateDoc(QRef,{
          sense11: Qelev,
        });
      }, 5000);
      
      
    });
    
    return (
      <View style={styles.stackscreen}>
        <Text style={styles.queshead}>Question 3 of 8</Text>
        <Text style={styles.question}>Can you feel sensory vibrations on your left leg from motor 3 ?</Text>
        <View style={styles.ansrow}>
        <TouchableOpacity onPress={()=>{setQelev(true)}}>
          <View style={[styles.but1, Qelev ? styles.newbg : styles.oldbg]}>
          <Text style={[styles.opstext, Qelev ? styles.newtxt : styles.oldtxt]}>Yes</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{setQelev(false)}}>
          <View style={[styles.but1, Qelev ?  styles.oldbg : styles.newbg ]}>
              <Text style={[styles.opstext, Qelev ?  styles.oldtxt : styles.newtxt ]}>No</Text>
          </View>
        </TouchableOpacity>
        </View>
    </View>
    )
  }

  const Ques12 = () => {
    const navigation = useNavigation();
    const [Qtwel, setQtwel] = useState(false);

     useEffect(() => {
      const timer= setTimeout(async() => {
        navigation.navigate('Ques13')
        const QRef = doc(db, "Diagnosis", user.uid);
        await updateDoc(QRef,{
          sense12: Qtwel,
        });
      }, 5000);
      
      
    });
    
    return (
      <View style={styles.stackscreen}>
        <Text style={styles.queshead}>Question 4 of 8</Text>
        <Text style={styles.question}>Can you feel sensory vibrations on your left leg from motor 4 ?</Text>
        <View style={styles.ansrow}>
        <TouchableOpacity onPress={()=>{setQtwel(true)}}>
          <View style={[styles.but1, Qtwel ? styles.newbg : styles.oldbg]}>
          <Text style={[styles.opstext, Qtwel ? styles.newtxt : styles.oldtxt]}>Yes</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{setQtwel(false)}}>
          <View style={[styles.but1, Qtwel ?  styles.oldbg : styles.newbg ]}>
              <Text style={[styles.opstext, Qtwel ?  styles.oldtxt : styles.newtxt ]}>No</Text>
          </View>
        </TouchableOpacity>
        </View>
    </View>
    )
  }

  const Ques13 = () => {
    const navigation = useNavigation();
    const [Qthir, setQthir] = useState(false);

     useEffect(() => {
      const timer= setTimeout(async() => {
        navigation.navigate('Ques14')
        const QRef = doc(db, "Diagnosis", user.uid);
        await updateDoc(QRef,{
          sense13: Qthir,
        });
      }, 5000);
      
      
    });
    
    return (
      <View style={styles.stackscreen}>
        <Text style={styles.queshead}>Question 5 of 8</Text>
        <Text style={styles.question}>Can you feel sensory vibrations on your left leg from motor 5 ?</Text>
        <View style={styles.ansrow}>
        <TouchableOpacity onPress={()=>{setQthir(true)}}>
          <View style={[styles.but1, Qthir ? styles.newbg : styles.oldbg]}>
          <Text style={[styles.opstext, Qthir ? styles.newtxt : styles.oldtxt]}>Yes</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{setQthir(false)}}>
          <View style={[styles.but1, Qthir ?  styles.oldbg : styles.newbg ]}>
              <Text style={[styles.opstext, Qthir ?  styles.oldtxt : styles.newtxt ]}>No</Text>
          </View>
        </TouchableOpacity>
        </View>
    </View>
    )
  }

  const Ques14 = () => {
    const navigation = useNavigation();
    const [Qfourt, setQfourt] = useState(false);

     useEffect(() => {
      const timer= setTimeout(async() => {
        navigation.navigate('Ques15')
        const QRef = doc(db, "Diagnosis", user.uid);
        await updateDoc(QRef,{
          sense14: Qfourt,
        });
      }, 5000);
      
      
    });
    
    return (
      <View style={styles.stackscreen}>
        <Text style={styles.queshead}>Question 6 of 8</Text>
        <Text style={styles.question}>Can you feel sensory vibrations on your left leg from motor 6 ?</Text>
        <View style={styles.ansrow}>
        <TouchableOpacity onPress={()=>{setQfourt(true)}}>
          <View style={[styles.but1, Qfourt ? styles.newbg : styles.oldbg]}>
          <Text style={[styles.opstext, Qfourt ? styles.newtxt : styles.oldtxt]}>Yes</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{setQfourt(false)}}>
          <View style={[styles.but1, Qfourt ?  styles.oldbg : styles.newbg ]}>
              <Text style={[styles.opstext, Qfourt ?  styles.oldtxt : styles.newtxt ]}>No</Text>
          </View>
        </TouchableOpacity>
        </View>
    </View>
    )
  }

  const Ques15 = () => {
    const navigation = useNavigation();
    const [Qfift, setQfift] = useState(false);

     useEffect(() => {
      const timer= setTimeout(async() => {
        navigation.navigate('Ques16')
        const QRef = doc(db, "Diagnosis", user.uid);
        await updateDoc(QRef,{
          sense15: Qfift,
        });
      }, 5000);
      
      
    });
    
    return (
      <View style={styles.stackscreen}>
        <Text style={styles.queshead}>Question 7 of 8</Text>
        <Text style={styles.question}>Can you feel sensory vibrations on your left leg from motor 7 ?</Text>
        <View style={styles.ansrow}>
        <TouchableOpacity onPress={()=>{setQfift(true)}}>
          <View style={[styles.but1, Qfift ? styles.newbg : styles.oldbg]}>
          <Text style={[styles.opstext, Qfift ? styles.newtxt : styles.oldtxt]}>Yes</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{setQfift(false)}}>
          <View style={[styles.but1, Qfift ?  styles.oldbg : styles.newbg ]}>
              <Text style={[styles.opstext, Qfift ?  styles.oldtxt : styles.newtxt ]}>No</Text>
          </View>
        </TouchableOpacity>
        </View>
    </View>
    )
  }

  const Ques16 = () => {
    
    const [Qsixt, setQsixt] = useState(false);

    useEffect(() => {
      const timer= setTimeout(async() => {
        const QRef = doc(db, "Diagnosis", user.uid);
        await updateDoc(QRef,{
          sense16: Qsixt,
        });
      }, 5000);
    });
    
    return (
      <View style={styles.stackscreen}>
        <Text style={styles.queshead}>Question 8 of 8</Text>
        <Text style={styles.question}>Can you feel sensory vibrations on your left leg from motor 8 ?</Text>
        <View style={styles.ansrow}>
        <TouchableOpacity onPress={()=>{setQsixt(true)}}>
          <View style={[styles.but1, Qsixt ? styles.newbg : styles.oldbg]}>
          <Text style={[styles.opstext, Qsixt ? styles.newtxt : styles.oldtxt]}>Yes</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{setQsixt(false)}}>
          <View style={[styles.but1, Qsixt ?  styles.oldbg : styles.newbg ]}>
              <Text style={[styles.opstext, Qsixt ?  styles.oldtxt : styles.newtxt ]}>No</Text>
          </View>
        </TouchableOpacity>
        </View>
    </View>
    )
  }



  return (
    <View style={{height:200,marginTop:40}}>
    <NavigationContainer independent={true}>
    <Stack.Navigator>
        <Stack.Screen name='Ques1' component={Ques1} options={{headerShown:false}}/>
        <Stack.Screen name='Ques2' component={Ques2} options={{headerShown:false}}/>
        <Stack.Screen name='Ques3' component={Ques3} options={{headerShown:false}}/>
        <Stack.Screen name='Ques4' component={Ques4} options={{headerShown:false}}/>
        <Stack.Screen name='Ques5' component={Ques5} options={{headerShown:false}}/>
        <Stack.Screen name='Ques6' component={Ques6} options={{headerShown:false}}/>
        <Stack.Screen name='Ques7' component={Ques7} options={{headerShown:false}}/>
        <Stack.Screen name='Ques8' component={Ques8} options={{headerShown:false}}/>
        <Stack.Screen name='Ques9' component={Ques9} options={{headerShown:false}}/>
        <Stack.Screen name='Ques10' component={Ques10} options={{headerShown:false}}/>
        <Stack.Screen name='Ques11' component={Ques11} options={{headerShown:false}}/>
        <Stack.Screen name='Ques12' component={Ques12} options={{headerShown:false}}/>
        <Stack.Screen name='Ques13' component={Ques13} options={{headerShown:false}}/>
        <Stack.Screen name='Ques14' component={Ques14} options={{headerShown:false}}/>
        <Stack.Screen name='Ques15' component={Ques15} options={{headerShown:false}}/>
        <Stack.Screen name='Ques16' component={Ques16} options={{headerShown:false}}/>
    </Stack.Navigator>
    </NavigationContainer>
    </View>
  )
};

export default QStack

const styles = StyleSheet.create({
    queshead:{
      fontSize: 20,
      fontFamily:"SFProDisplayHeavy", 
      color:"#3A3A3A",
      fontWeight:"900"
    },
    question:{
      fontFamily:"CircularXXTTMedium",
      fontSize:17,
      lineHeight:23,
      color:'#8F8F8F',
      marginTop:5,
      marginBottom:30,
    },
    stackscreen:{
      backgroundColor:"#fff",
      height:"100%"
    },
    but1:{
      width:130,
      borderRadius:5,
      paddingVertical:13,
      alignSelf:'center',
      marginTop:5,
    },

    oldbg:{
      backgroundColor:"#EBEBEB",
    },
    newbg:{
      backgroundColor:"#000",
    },
    oldtxt:{
      color:"#3A3A3A",
    },
    newtxt:{
      color:"#fff",
    },
    opstext:{
        fontFamily:"CircularXXTTBold",
        fontSize:18,
        textAlign:'center'
    },
    ansrow:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-around',
    },
})
