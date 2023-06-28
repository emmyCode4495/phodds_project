import { StatusBar, View,StyleSheet } from 'react-native';


import React from 'react';
import colors from '../Phodds/src/constants/Colors';

import RegisterScreen from '../Phodds/src/screens/authScreens/RegisterScreen';
import LoginScreen from '../Phodds/src/screens/authScreens/LoginScreen';
import AppStack from '../Phodds/src/navigation/AppStack'
import AuthStack from '../Phodds/src/navigation/AuthStack'
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from '../Phodds/src/navigation/RootNavigator'
import HomeScreenCards from './src/components/HomeScreenCards';
                                                                                                                                                               

export default function App(){
    return(
        // <NavigationContainer>
        <View style={styles.container}>
         <StatusBar 
        barStyle="light-content"
        backgroundColor= {colors.main}/>
        <RootNavigator />
        <HomeScreenCards/>
        {/* <VendorScreen/> */}
        </View>
        // </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})