import { View, Text } from 'react-native'
import React from 'react'

//The Screens for navigation imports 
import LoginScreen from '../screens/authScreens/LoginScreen'
import RegisterScreen from '../screens/authScreens/RegisterScreen'
import WelcomeScreen from '../screens/authScreens/WelcomeScreen'
import HomeScreen from '../screens/mainScreen/HomeScreen'

//The navigation imports

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BrandNewGadgetsScreen from '../screens/utilityScreens/BrandNewGadgetsScreen'
import FairlyUsedGadgetsScreen from '../screens/utilityScreens/FairlyUsedGadgetsScreen'
import AppStack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     from './AppStack'
import CategoryStack from './categoryStack'

import IosDataScreen from '../screens/categoriesScreen/IosDataScreen'
import AndroidScreen from '../screens/categoriesScreen/AndroidScreen'
import AccessoriesScreen from '../screens/categoriesScreen/AccesoriesScreen'
import AirpodsScreen from '../screens/categoriesScreen/AirpodsScreen'
import LaptopsScreen from '../screens/categoriesScreen/LaptopsScreen'
import PowerbanksScreen from '../screens/categoriesScreen/PowerbanksScreen'
import SmartWatchesScreen from '../screens/categoriesScreen/SmartWatchesScreen'
import TabletsScreen from '../screens/categoriesScreen/TabletsSreen'
import ItemDetails from '../screens/utilityScreens/ItemDetails'
import RegisterOptions from '../screens/authScreens/RegisterOptionsScreen'
import { Screen } from 'react-native-screens'
import VendorScreen from '../screens/authScreens/VendorScreen'

const Stack = createNativeStackNavigator();

export default function AuthStack(){
  return (
    <Stack.Navigator
            screenOptions={{
                headerShown:false
            }}
            initialRouteName='welcome'
        >
          <Stack.Screen name="drawerNav" component={AppStack}/>
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="Register" component={RegisterScreen}/>
            <Stack.Screen name="RegisterOption" component={RegisterOptions}/>
            <Stack.Screen name="welcome" component={WelcomeScreen}/>
            <Stack.Screen name="vending" component={VendorScreen}/>
            <Stack.Screen name="brandnew" component={BrandNewGadgetsScreen}/>
            <Stack.Screen name="fairlyUsed" component={FairlyUsedGadgetsScreen}/>
            <Stack.Screen name="ios" component={IosDataScreen}/>
            <Stack.Screen name="android" component={AndroidScreen}/>
            <Stack.Screen name="accessories" component={AccessoriesScreen}/>
            <Stack.Screen name="airpods" component={AirpodsScreen}/>
            <Stack.Screen name="laptops" component={LaptopsScreen}/>
            <Stack.Screen name="powerbank" component={PowerbanksScreen}/>
            <Stack.Screen name="watch" component={SmartWatchesScreen}/>
            <Stack.Screen name="tablets" component={TabletsScreen}/>
            <Stack.Screen name="itemDetail" component={ItemDetails}/>
            <Stack.Screen name="drawer" component={AppStack}/>
            <Stack.Screen name="category" component={CategoryStack}/>
            
            
        </Stack.Navigator>
  )
}
