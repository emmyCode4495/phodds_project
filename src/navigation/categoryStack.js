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
import ItemDetails from '../screens/utilityScreens/ItemDetails'
import VendorDetailScreen from '../screens/vendorsScreens/VendorDetailScreen'
import AppStack from './AppStack'


const catStack = createNativeStackNavigator();

export default function CategoryStack(){
  return ( 
    <catStack.Navigator
            screenOptions={{
                headerShown:false
            }}
            initialRouteName='app'
        >
            <catStack.Screen name="app" component={AppStack}/>
            <catStack.Screen name="ios" component={IosDataScreen}/>
            <catStack.Screen name="android" component={AndroidScreen}/>
            <catStack.Screen name="accessories" component={AccessoriesScreen}/>
            <catStack.Screen name="airpods" component={AirpodsScreen}/>
            <catStack.Screen name="laptops" component={LaptopsScreen}/>
            <catStack.Screen name="powerbank" component={PowerbanksScreen}/>
            <catStack.Screen name="watch" component={SmartWatchesScreen}/>
            <catStack.Screen name="tablets" component={TabletsScreen}/>
            <catStack.Screen name="vendorDetail" component={VendorDetailScreen}/>
            <catStack.Screen name="itemDetail" component={ItemDetails}/>
            
        </catStack.Navigator>
  )
}