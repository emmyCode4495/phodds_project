import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AboutScreen, Admin, HomeScreen, ProfileScreen } from "../components/TabsIndex";
import {View,Text} from 'react-native'
import colors from "../constants/Colors";

//Imports for the Icons used
import Icon from 'react-native-vector-icons/AntDesign'
import UserIcon from 'react-native-vector-icons/Entypo'
import PhoneIcons from 'react-native-vector-icons/MaterialIcons'
import FavIcon from 'react-native-vector-icons/Fontisto'

const Tab = createBottomTabNavigator()

const screenOptions={
    tabBarShowLabel:false,
    headerShown: false,
    tabBarStyle:{
        position:'absolute',
        bottom:0,
        right:0,
        left:0,
        elevation:0,
        height:60,
        background: "#fff"
    }
}
export default function MenuTabs() {
  return (
    <Tab.Navigator 
        screenOptions={screenOptions}
    >
        <Tab.Screen 
        name="HomeScreen" 
        component={HomeScreen}
        options={{
            tabBarIcon:({focused})=>{
                return(
                    <View style={{alignItems:'center',justifyContent:'center'}}>
                    <UserIcon name="home" 
                    size={24}
                    color={focused ? colors.main:colors.black}
                    />
                    <Text style={{fontSize:12,color:focused?colors.main:colors.black}}>HOME</Text>
                </View>
                )      
            }
        }}/>
        
        <Tab.Screen 
        name="About" 
        component={AboutScreen}
        options={{
            tabBarIcon:({focused})=>{
                return(
                    <View style={{alignItems:'center',justifyContent:'center'}}>
                    <FavIcon name="favorite" 
                    size={24}
                    color={focused ? colors.main:colors.black}
                    />
                    <Text style={{fontSize:12,color:focused?colors.main:colors.black}}>SAVED</Text>
                </View>
                )      
            }
        }}/>
        <Tab.Screen 
        name="Admin" 
        component={Admin}
        options={{
            tabBarIcon:({focused})=>{
                return(
                    <View style={{alignItems:'center',justifyContent:'center'}}>
                    <Icon name="message1" 
                    size={24}
                    color={focused ? colors.main:colors.black}
                    />
                    <Text style={{fontSize:12,color:focused?colors.main:colors.black}}>MESSAGE</Text>
                </View>
                )      
            }
        }}/>

<Tab.Screen 
        name="Profile" 
        component={ProfileScreen}
        options={{
            tabBarIcon:({focused})=>{
                return(
                    <View style={{alignItems:'center',justifyContent:'center'}}>
                    <UserIcon name="user" 
                    size={24}
                    color={focused ? colors.main:colors.black}
                    />
                    <Text style={{fontSize:12,color:focused?colors.main:colors.black}}>PROFILE</Text>
                </View>
                )      
            }
        }}
        />
    </Tab.Navigator>
  )
}
