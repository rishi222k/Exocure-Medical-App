import { StyleSheet, Text, View } from 'react-native'
import React, {useContext, useState, useEffect} from 'react'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'
import auth from '@react-native-firebase/auth';
import {AuthContext} from './AuthProvider';

const NavAuth = () => {

    const {user, setUser} = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);

  const onAuthStateChanged = (user) => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
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

 