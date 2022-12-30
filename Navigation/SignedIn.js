import { View, Text,LogBox } from 'react-native'
import React,{useState, useContext,useEffect} from 'react'
import {AuthContext, AuthProvider} from '../Navigation/AuthProvider';
// import firestore from '@react-native-firebase/firestore';
import { doc, getDoc } from "firebase/firestore";
import {db} from "../firebaseConfig"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Connect from '../Screens/Connect'
import TabNavigation from './TabNavigation';
import Onboarding from '../Screens/Onboarding'
import NavHeader from '../Components/NavHeader';
import Acknowledgment from '../Screens/Acknowledgment';
import MedicalInfo from '../Screens/MedicalInfo';
import Diagnosis from '../Screens/Diagnosis';
import Questionnaire from '../Screens/Questionnaire';
import Maps from '../Components/Maps';
import MainLoading from '../DummyScreens/MainLoading';
import Scanning from '../DummyScreens/Scanning';

const SignedIn = () => {
    const Stack = createStackNavigator();
    const {user,logout} = useContext(AuthContext);
    const [check, setcheck] = useState(null);


    const getUser = async()=>{
      const docRef = doc(db, 'Users', user.uid);
      const users = await getDoc(docRef).then(documentSnapshot => { 
      setcheck(documentSnapshot.data().questionnaire); 
      });
      
    };

    useEffect(() => {

      getUser();

      }, []);

      LogBox.ignoreLogs(['Possible Unhandled Promise Rejection (id: 0)']);
    
    
  return (
    <>
    { check==null? <MainLoading/>:
    <> 
    <NavHeader/>
    <NavigationContainer>
    <Stack.Navigator>
        {check ? null : <Stack.Screen name='Questionnaire' component={Questionnaire} options={{headerShown:false}}/>}
        <Stack.Screen name='TabNavigation' component={TabNavigation} options={{headerShown:false}}/>
        <Stack.Screen name='Connect' component={Connect} options={{headerShown:false}}/>
        <Stack.Screen name='Scanning' component={Scanning} options={{headerShown:false}}/>
        <Stack.Screen name='OnBoarding' component={Onboarding} options={{headerShown:false}}/>
        <Stack.Screen name='Acknowledgment' component={Acknowledgment} options={{headerShown:false}}/>
        <Stack.Screen name='MedicalInfo' component={MedicalInfo} options={{headerShown:false}}/>
        <Stack.Screen name='Diagnosis' component={Diagnosis} options={{headerShown:false}} />
        <Stack.Screen name='Map' component={Maps} options={{headerShown:false}} />
    </Stack.Navigator>
    </NavigationContainer>
    </>  
    }

   
    </>
  )
}

export default SignedIn