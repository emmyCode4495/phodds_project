import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AppStack from './AppStack'
import AuthStack from './AuthStack'
import MenuTabs from './MenuTabs'

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <AuthStack/>
        {/* <AppStack/> */}
        
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})