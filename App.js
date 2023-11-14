import RootNavigator from '../phodds_main/src/navigation/RootNavigator'
import { AuthProvider } from '../phodds_main/src/navigation/AuthProvider';

import React, { Component, useState,useEffect } from 'react';
import {
  SafeAreaView,
  StatusBar,
  FlatList,
  View,
  Text
} from 'react-native';

import colors from './src/constants/Colors';

import firestore from '@react-native-firebase/firestore';
import VendorDetailScreen from './src/screens/vendorsScreens/VendorDetailScreen';


export default function App(){
  return(
        <AuthProvider>
        <SafeAreaView style={{flex:1}}>
        <StatusBar 
         barStyle="light-content"
        backgroundColor={colors.main}/>
            <RootNavigator/>
            {/* <VendorDetailScreen/> */}
        </SafeAreaView>
        </AuthProvider>
    )     
}
