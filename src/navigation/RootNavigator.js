import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import auth from '@react-native-firebase/auth'
import { AuthContext } from './AuthProvider'

import { NavigationContainer } from '@react-navigation/native'
import AppStack from './AppStack'
import AuthStack from './AuthStack'
import MenuTabs from './MenuTabs'
import CategoryStack from './categoryStack'

export default function RootNavigator() {

  const {user, setUser} = useContext(AuthContext)
  const [initializing, setInitializing] = useState(true)

  const onAuthStateChanged = (user) =>{
    setUser(user);
    if (initializing) setInitializing(false)
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged)
    return subscriber;
  }, []);

  if (initializing) return null;

  return (
      <NavigationContainer>
      {user ? <CategoryStack/>: <AuthStack/> }
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})