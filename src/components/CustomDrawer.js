import { View, 
        Text,
    ImageBackground, 
    Image,
    StyleSheet,
    TouchableOpacity} from 'react-native'
import React from 'react'

//Imports for the Icons used
import Icon from 'react-native-vector-icons/AntDesign'
import UserIcon from 'react-native-vector-icons/FontAwesome'
import DarkIcon from 'react-native-vector-icons/Ionicons'
import ShareIcon from 'react-native-vector-icons/Entypo'
import LockedIcon from 'react-native-vector-icons/Fontisto'

import { DrawerContentScrollView,DrawerItemList } from '@react-navigation/drawer'
import colors from '../constants/Colors'

const CustomDrawer = (props) => {
  return (
    <View style={{flex:1}}>
    <DrawerContentScrollView {...props}
    contentContainerStyle={{backgroundColor:colors.main}}>
        <ImageBackground source={require('../../assets/images/drawerHeaderBackground.png')}
            style={{padding:20}}>
                <View style={{flexDirection:'row'}}>
                <Image
                source={require('../../assets/images/drawerProfile.png')}
                style={styles.imageStyle}
                />
                <DarkIcon name="moon" size={30} color={colors.black}/>
                </View>
                <Text style={styles.profileNameText}>Hello, Emmanuel Pius</Text>
                <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
                <UserIcon name="briefcase" style={styles.clientIconStyle}/>
                <Text style={styles.profileNameText1}>Client</Text>
                </View>
            </ImageBackground>
            <View style={styles.drawerListStyles}>
                <DrawerItemList {...props}/>
            </View>
    </DrawerContentScrollView>
    <View style={styles.bottomDrawerStyles}>
        <TouchableOpacity onPress={()=>{}} style={{paddingVertical:15}}>
            <View style={{flexDirection:'row', alignItems:'center'}}>
                <Icon name="sharealt" size={27} color={colors.main}/>
                <Text style={styles.shareAppTextStyle}>Share app</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{}} style={{paddingVertical:15}}>
            <View style={{flexDirection:'row', alignItems:'center'}}>
                <Icon name="logout" size={27} color={colors.main}/>
                <Text style={styles.shareAppTextStyle}>Sign Out</Text>
            </View>
        </TouchableOpacity>
        <View style={styles.VersionViewStyle}>
        <Text style={styles.VersionTextStyle}>v 0.0.1</Text>
        </View>
    </View>

    
       
    </View>
  
  )
}

export default CustomDrawer

const styles = StyleSheet.create({
    profileNameText:{
        fontFamily:"Poppins-Bold",
        color:colors.white,
        fontSize:18
    },
    profileNameText1:{
        fontFamily:"Roboto-Medium",
        color:colors.lightGrey,
        fontSize:14,
        fontWeight:800,
        },
    clientIconStyle:{
        marginRight:5,
        marginTop:3
    },
    drawerListStyles:{
        flex:1,
        paddingTop:10,
        backgroundColor:colors.white 
    },
    bottomDrawerStyles:{
        padding:20,
        borderTopWidth:1,
        borderTopColor:colors.lightDark
    },
    shareAppTextStyle:{
        color:colors.black, 
        marginLeft:10,
        fontSize:20, 
        fontFamily:'Roboto-Medium'
    },
    bottomDrawerStyles1:{
        padding:20,
        borderTopColor:colors.lightDark
    },
    imageStyle:{
        height:80,
        width:80,
        borderRadius:40,
        marginRight:100, 
        marginBottom:10
    },
    VersionTextStyle:{
        color:colors.black,
        fontFamily:'Poppins-bold',
        fontWeight:800
    },
    VersionViewStyle:{
        alignItems:'flex-end'
    }
})