import { View, Text } from 'react-native'
import React,{createContext, useState} from 'react'
// import firestore from '@react-native-firebase/firestore';
// import auth from '@react-native-firebase/auth'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, setDoc} from "firebase/firestore";
import { auth, db } from '../firebaseConfig';



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
            await signInWithEmailAndPassword(auth, email, password).then(console.log('Successfully logged in!'));
          } catch (e) {
            console.log(e);
          }
        },
        register: async (name,age,email,password) =>{
            try {
            await createUserWithEmailAndPassword(auth, email, password).then(async cred=>{
              const DataRef = doc(db, "Users", cred.user.uid);
              
              await setDoc(DataRef,{
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
            await signOut(auth).then(console.log('Successfully logged out!'));
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
