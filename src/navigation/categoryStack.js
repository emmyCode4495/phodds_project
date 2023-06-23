import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import IosDataScreen from '../screens/categoriesScreen/IosDataScreen'
import AndroidScreen from '../screens/categoriesScreen/AndroidScreen'
import AccessoriesScreen from '../screens/categoriesScreen/AccesoriesScreen'
import AirpodsScreen from '../screens/categoriesScreen/AirpodsScreen'
import LaptopsScreen from '../screens/categoriesScreen/LaptopsScreen'
import PowerbanksScreen from '../screens/categoriesScreen/PowerbanksScreen'
import SmartWatchesScreen from '../screens/categoriesScreen/SmartWatchesScreen'
import TabletsScreen from '../screens/categoriesScreen/TabletsSreen'

const Stack = createNativeStackNavigator();

export default function CategoryStack(){
  return (
    <Stack.Navigator
            screenOptions={{
                headerShown:false
            }}
        >
            <Stack.Screen name="ios" component={IosDataScreen}/>
            <Stack.Screen name="android" component={AndroidScreen}/>
            <Stack.Screen name="accessories" component={AccessoriesScreen}/>
            <Stack.Screen name="airpods" component={AirpodsScreen}/>
            <Stack.Screen name="laptops" component={LaptopsScreen}/>
            <Stack.Screen name="powerbank" component={PowerbanksScreen}/>
            <Stack.Screen name="watch" component={SmartWatchesScreen}/>
            <Stack.Screen name="tablets" component={TabletsScreen}/>
            
        </Stack.Navigator>
  )
}