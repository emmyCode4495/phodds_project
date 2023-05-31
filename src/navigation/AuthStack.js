import { View, Text } from 'react-native'
import React from 'react'

//The Screens for navigation imports 
import LoginScreen from '../screens/authScreens/LoginScreen'
import RegisterScreen from '../screens/authScreens/RegisterScreen'
import WelcomeScreen from '../screens/authScreens/WelcomeScreen'
import HomeScreen from '../screens/mainScreen/HomeScreen'

//The navigation imports

import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const AuthStack = ()=> {
  return (
    <Stack.Navigator
            screenOptions={{
                headerShown:false
                
            }}
        >
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="Register" component={RegisterScreen}/>
            
        </Stack.Navigator>
  )
}

export default AuthStack