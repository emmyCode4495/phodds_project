import React from 'react'
import colors from '../constants/Colors';
import AboutScreen from '../screens/utilityScreens/AboutScreen';
import Admin from '../screens/mainScreen/MessagesScreen';
import HomeScreen from '../screens/mainScreen/HomeScreen'
import VendorScreen from '../screens/authScreens/VendorScreen';
import SettingsScreen from '../screens/utilityScreens/SettingsScreen';

import { StyleSheet } from 'react-native';

import CustomDrawer from '../components/CustomDrawer';

//Imports for the Icons used
import Icon from 'react-native-vector-icons/AntDesign'
import VendorIcon from 'react-native-vector-icons/FontAwesome5'
import UserIcon from 'react-native-vector-icons/FontAwesome'
import AdminIcon from 'react-native-vector-icons/MaterialIcons'
import EntypoIcon from 'react-native-vector-icons/Entypo'

//The navigation imports
import { createDrawerNavigator } from '@react-navigation/drawer';
import MenuTabs from './MenuTabs';
import AdminScreen from '../screens/utilityScreens/AdminScreen';


const Drawer = createDrawerNavigator();

const AppStack = ()=> {
  return (
    <Drawer.Navigator
            drawerContent={props => <CustomDrawer {...props}/>}
            initialRouteName='MenuTabs'
            screenOptions={{
                headerShown:false,
                drawerActiveTintColor:colors.white,
                drawerActiveBackgroundColor:colors.main,
                drawerInactiveTintColor:'#333',
                drawerLabelStyle:{
                  marginLeft:-25,
                  fontFamily:'Roboto-Medium',
                  fontSize:16
                }      
            }}
        >
           
            <Drawer.Screen name="Home" component={MenuTabs}
            options={{
              drawerIcon:({color})=>(
                <EntypoIcon name="home" size={24} color={color}/>
              )
            }}/>
            <Drawer.Screen name="Become a Vendor" component={VendorScreen}
            options={{
              drawerIcon:({color})=>(
                <VendorIcon name="handshake" size={24} color={color}/>
              )
            }}
            />
            <Drawer.Screen name="Admin" component={AdminScreen}
              options={{
                drawerIcon:({color})=>(
                  <AdminIcon name="admin-panel-settings" size={29} color={color}/>
                )
              }}
            />
            <Drawer.Screen name="Settings" component={SettingsScreen}
              options={{
                drawerIcon:({color})=>(
                  <VendorIcon name="cog" size={24} color={color}/>
                )
              }}
            />
            
            <Drawer.Screen name="About" component={AboutScreen}
              options={{
                drawerIcon:({color})=>(
                  <EntypoIcon name="info-with-circle" size={24} color={color}/>
                )
              }}
            />
    </Drawer.Navigator>
  )
}

export default AppStack
