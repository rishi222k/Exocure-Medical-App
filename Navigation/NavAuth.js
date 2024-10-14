import { StyleSheet, Text, View } from 'react-native'
import React, {useContext, useState, useEffect} from 'react'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'
// import auth from '@react-native-firebase/auth';
import { onAuthStateChanged } from "firebase/auth";
import {auth} from '../firebaseConfig';
import {AuthContext} from './AuthProvider';

const NavAuth = () => {

    const {user, setUser} = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);

  const onNewAuth = (user) => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = onAuthStateChanged(auth,onNewAuth);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  return (
    <>
    {user ? <SignedIn /> : <SignedOut />}
    </>
  )
}

export default NavAuth;

 