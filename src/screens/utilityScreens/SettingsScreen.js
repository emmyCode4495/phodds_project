import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../../constants/Colors';

import FactorIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import VerifyIcon from 'react-native-vector-icons/MaterialIcons'
import DeleteIcon from 'react-native-vector-icons/Ionicons'
import ClientIcon from 'react-native-vector-icons/Foundation'
import Icon from 'react-native-vector-icons/AntDesign'
import SwitchIcon from 'react-native-vector-icons/Entypo'
import Header from '../../components/header'
import { useNavigation } from '@react-navigation/native';

const SettingsScreen = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
       <View style={{backgroundColor:colors.main, flexDirection:'row', height:60, paddingVertical:10}}>
        <TouchableOpacity onPress={()=> navigation.goBack()}>
      <Icon
      name="arrowleft"
      color={colors.white}
      style={{justifyContent:'flex-end',alignItems:'flex-end', marginLeft:20,height:25, marginRight:10}}
      size={30}
      />
      </TouchableOpacity>
       <View>
      <Text style={{color:colors.white, fontSize:26, fontFamily:"Poppins-Bold"}}>
        Settings
      </Text>
      </View>
      </View>
      
     <View style={styles.securityInfoView}>
            <Text style={styles.securityInfoText}>security</Text>
          </View>

      <View style={styles.ProfileMainView}>
      <TouchableOpacity>
          <View style={{...styles.fullSpecView,flexDirection:"row"}}>
            <ClientIcon
            name='unlock'
            style={{marginRight:7,marginLeft:5}}
            color={colors.darkGrey}
            size={18}
            />
              <Text style={styles.profileText}>change password</Text>
          </View>
          </TouchableOpacity>
          
          <TouchableOpacity>
          <View style={{...styles.fullSpecView,flexDirection:"row"}}>
            <FactorIcon
            name='fingerprint'
            style={{marginRight:7,marginLeft:5}}
            color={colors.darkGrey}
            size={18}
            />
              <Text style={styles.profileText}>Add Fingerprint</Text>
          </View>
          </TouchableOpacity>

          <TouchableOpacity>
          <View style={{...styles.fullSpecView,flexDirection:"row"}}>
            <FactorIcon
            name='fingerprint-off'
            style={{marginRight:7,marginLeft:5}}
            color={colors.darkGrey}
            size={18}
            />
              <Text style={styles.profileText}>delete Fingerprint</Text>
          </View>
          </TouchableOpacity>

          <TouchableOpacity>
          <View style={{...styles.fullSpecView,flexDirection:"row"}}>
          <FactorIcon
            name='two-factor-authentication'
            style={{marginRight:7,marginLeft:5}}
            color={colors.darkGrey}
            size={20}
            />
              <Text style={styles.profileText}>two factor authentication</Text>
          </View>
          </TouchableOpacity>
          </View>

          <View style={styles.securityInfoView}>
            <Text style={styles.securityInfoText}>appearance</Text>
          </View>

          <View style={styles.ProfileMainView}>
          <View style={{...styles.fullSpecView,flexDirection:"row"}}>
          <SwitchIcon
            name='switch'
            style={{marginRight:5,marginLeft:3}}
            color={colors.darkGrey}
            size={18}
            />
            <TouchableOpacity>
              <Text style={styles.profileText}>Switch Mode</Text>
            </TouchableOpacity>
          </View>
          </View>

          <View style={styles.securityInfoView}>
            <Text style={styles.securityInfoText}>switch accounts</Text>
          </View>

          <View style={styles.ProfileMainView}>
          <View style={{...styles.fullSpecView,flexDirection:"row"}}>
          <FactorIcon
            name='account-switch-outline'
            style={{marginRight:5,marginLeft:3}}
            color={colors.darkGrey}
            size={18}
            />
            <TouchableOpacity>
              <Text style={styles.profileText}>Switch to client acount</Text>
            </TouchableOpacity>
          </View>
          <View style={{...styles.fullSpecView,flexDirection:"row"}}>
          <FactorIcon
            name='account-switch'
            style={{marginRight:5,marginLeft:3}}
            color={colors.darkGrey}
            size={18}
            />
            <TouchableOpacity>
              <Text style={styles.profileText}>Switch to vendor acount</Text>
            </TouchableOpacity>
          </View>
          </View>
          
            
          <View style={styles.securityInfoView}>
            <Text style={styles.securityInfoText}>account verification</Text>
          </View>

          <View style={styles.ProfileMainView}>
          <View style={{...styles.fullSpecView,flexDirection:"row"}}>
          <VerifyIcon
            name='verified'
            style={{marginRight:5,marginLeft:3}}
            color={colors.darkGrey}
            size={18}
            />
            <TouchableOpacity>
              <Text style={styles.profileText}>verify account</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity>  
          <View style={{...styles.deleteAccount,flexDirection:"row"}}>
          <DeleteIcon
            name='md-trash-bin-outline'
            style={{marginRight:3,marginLeft:3}}
            color={colors.red}
            size={18}
            /> 
              <Text style={styles.deleteText}>delete account</Text>
          </View>
          </TouchableOpacity>
          </View>

          <View style={{marginTop:20, alignItems:'center'}}>
          <View >
            <Text style={{color:colors.main, fontFamily:"Roboto-Bold", fontSize:12}}>from</Text>
          </View>
          <View>
            <Text style={{color:colors.darkGrey, fontFamily:"Poppins-Bold", fontSize:15}}>phodds</Text>
          </View>
          </View>

  </View>
  )
}

export default SettingsScreen

const styles = StyleSheet.create({

  container:{
    margin:0,
    padding:0,
    flex:1
   },
    txtStyle:{
        fontSize:35,
        color:colors.main
    },
    
    imageView:{ 
    justifyContent:'center',
    alignItems:"center",
    paddingVertical:20
    },
    Imagestyle:{
      width:100,
    height:100  
    },
    userNameText:{
      color:colors.white,
      fontFamily:"Poppins-Regular",
      fontWeight:800,
      fontSize:18
    },
    userType:{
      color:colors.lightGrey,
      fontSize:18,
      fontFamily:"Roboto-Bold",
      fontWeight:800,
      marginLeft:5,
      marginTop:5
    },
    personalInfoView:{
      marginTop:10,
      marginBottom:10,
      paddingHorizontal:10,
      backgroundColor:colors.lightGrey,
      maxWidth:"90%",
      marginLeft:20,
      justifyContent:"center",
      alignItems:"center",
      borderRadius:25
    },
    securityInfoView:{
      marginTop:20,
      marginBottom:10,
      paddingHorizontal:10,
      backgroundColor:colors.lightGrey,
      maxWidth:"90%",
      marginLeft:20,
      justifyContent:"center",
      alignItems:"center",
      borderRadius:25
    },
    personalInfoText:{
      color:colors.darkGrey,
      fontSize:30,
      textTransform:'uppercase',
      fontFamily:'Roboto-Bold'
    },
    securityInfoText:{
      color:colors.darkGrey,
      fontSize:30,
      textTransform:'uppercase',
      fontFamily:'Roboto-Bold'
    },
    ProfileMainView:{
      borderWidth:1,
      paddingHorizontal: 5,
      paddingVertical:10,
      marginRight:15,
      marginLeft:20,
      borderBottomLeftRadius:20,
      borderTopRightRadius:20,
      backgroundColor:colors.white,
      borderColor:colors.white
    },
    fullSpecView:{
      color:colors.white,
    },
    profileText:{
      color:colors.darkGrey,
      fontSize:16,
      marginBottom:10,
      fontFamily:"Poppins-Bold",
      marginRight:10,
      textTransform:'uppercase',
      letterSpacing:1
    },
    updateDetails:{
      color:colors.white,
      fontSize:18,
      fontFamily:'Roboto-Bold',
      fontWeight:800
    },
    updateDetailView:{
      borderWidth:1,
      paddingHorizontal:10,
      paddingVertical:10,
      marginTop:12,
      backgroundColor:colors.main,
      borderRadius:30,
      borderColor:colors.main,
      alignItems:'center',
      justifyContent:'center'
    },
    deleteAccount:{
      alignItems:'center',
      justifyContent:"center",
      maxWidth:"50%",
    },
    deleteText:{
      fontSize:18,
      color:colors.red,
      textTransform:'uppercase',
      paddingHorizontal:10,
      paddingVertical:10,
      fontFamily:"Roboto-Bold"
    },
    signOutView:{
      borderWidth:1,
      maxWidth:"100%",
      borderColor:colors.main,
      height:50,
      marginRight:20,
      marginLeft:20,
      marginTop:20,
      marginBottom:10,
      padding:10,
      borderRadius:30,
      backgroundColor:colors.white,
      alignItems:'center',
      justifyContent:'center'
    },
    signoutText:{
      textTransform:'uppercase',
      color:colors.main,
      fontSize:20,
      fontFamily:'Poppins-Bold'
    } 
    
  })