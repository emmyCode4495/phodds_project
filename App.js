import { StatusBar } from 'react-native';


import React from 'react';
import colors from './src/constants/Colors';

import AppStack from '../phodds/src/navigation/AppStack'
import AuthStack from '../phodds/src/navigation/AuthStack'
import { NavigationContainer } from '@react-navigation/native';


 
export default function App(){
    return(
    <NavigationContainer>
         <StatusBar 
        barStyle="light content"
        backgroundColor= {colors.main}/>
        <AppStack/>
        {/* <AuthStack /> */}
    </NavigationContainer>
    )
}