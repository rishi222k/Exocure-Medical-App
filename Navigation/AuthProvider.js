import { View, Text } from 'react-native'
import React,{createContext, useState} from 'react'
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth'


export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    
  return (
    <AuthContext.Provider
    value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            await auth().signInWithEmailAndPassword(email, password).then(console.log('Successfully logged in!'));
          } catch (e) {
            console.log(e);
          }
        },
        register: async (name,age,email,password) =>{
            try {
            await auth().createUserWithEmailAndPassword(email, password).then(async cred=>{
              await firestore().collection('Users').doc(cred.user.uid).
                set({
                  name: name,
                  email: email,
                  age:age,
                  uid: cred.user.uid,
                  questionnaire:false,
                });
              console.log('User account created!');
            });

          } catch (e) {
            console.log(e);
          }
        },
        logout: async () =>{
            try {
            await auth().signOut().then(console.log('Successfully logged out!'));
          } catch (e) {
            console.log(e);
          }
        },
    }}
    >
    {children}
    </AuthContext.Provider>
  )
}
