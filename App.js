
import RootNavigator from '../Phodds/src/navigation/RootNavigator'
import { AuthProvider } from './src/navigation/AuthProvider';

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


export default function App(){
  return(
        <AuthProvider>
        <SafeAreaView style={{flex:1}}>
        <StatusBar 
         barStyle="light-content"
        backgroundColor={colors.main}/>
            <RootNavigator/>
        </SafeAreaView>
        </AuthProvider>
    )     
}
