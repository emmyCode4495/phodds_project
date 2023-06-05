import { StatusBar, View,StyleSheet } from 'react-native';


import React from 'react';
import colors from './src/constants/Colors';

import RegisterScreen from './src/screens/authScreens/LoginScreen';
import AppStack from '../phodds/src/navigation/AppStack'
import AuthStack from '../phodds/src/navigation/AuthStack'
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from '../phodds/src/navigation/RootNavigator'

function Home(){
    return(
        <AuthStack />
    );
}
 
export default function App(){
    return(
        <View style={styles.container}>
         <StatusBar 
        barStyle="light content"
        backgroundColor= {colors.main}/>
        {/* <RootNavigator /> */}
        <RegisterScreen/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})