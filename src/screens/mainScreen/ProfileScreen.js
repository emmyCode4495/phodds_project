import { View, TouchableOpacity,Text,StyleSheet, Image,ScrollView } from 'react-native'
import colors from '../../constants/Colors'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import ClientIcon from 'react-native-vector-icons/Foundation'
import FactorIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import VerifyIcon from 'react-native-vector-icons/MaterialIcons'
import DeleteIcon from 'react-native-vector-icons/Ionicons'
import Header from '../../components/header'

import UserIcon from 'react-native-vector-icons/FontAwesome'
import { TrendingData } from '../../constants/data'


const ProfileScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
    {/* <Header 
    title="Profile"                                                                     
    type="arrowleft"
    Color={colors.white}
    navigation={navigation}/> */}
    <View style={{backgroundColor:colors.main}}>
      <Icon
      name="arrowleft"
      color={colors.white}
      style={{justifyContent:'flex-end',alignItems:'flex-end', marginLeft:20,height:25}}
      size={30}
      />
      </View>
    <View style={{...styles.imageView,backgroundColor:colors.main}}>
    
      <Image
      source={require('../../../assets/images/profile.png')}
      style={styles.Imagestyle}
      />  
      <View>
        <Text style={styles.userNameText}>User: Emmanuel Pius</Text>
      </View>

      <View>
        <Text style={styles.userNameText}>Email: enyaemmanuel33@gmail.com</Text>
      </View>

      <View style={{flexDirection:'row',justifyContent:'flex-end', alignItems:'flex-end'}}>
            <UserIcon name="briefcase"
            size={18}
            color={colors.lightGrey} 
            style={styles.clientIconStyle}/>
            <Text style={styles.userType}>Client</Text>
        </View>
    </View>

      
  <ScrollView style={{flexGrow:1}}>
      <View>    
          <View style={styles.personalInfoView}>
            <Text style={styles.personalInfoText}>Personal Information</Text>
          </View>
          
      <View style={styles.ProfileMainView}>
          <View style={{...styles.fullSpecView,flexDirection:"row"}}>
            <Icon
            name='user'
            style={{marginRight:5,marginLeft:3}}
            color={colors.darkGrey}
            size={18}
            />
              <Text style={styles.profileText}>USERNAME: ENYA EMMANUEL PIUS</Text>
          </View>

          <View style={{...styles.fullSpecView,flexDirection:"row"}}>
          <Icon
            name='mail'
            style={{marginRight:5,marginLeft:3}}
            color={colors.darkGrey}
            size={18}
            />
            <Text style={styles.profileText}>EMAIL: enyaemmanuel33@GMAIL.COM </Text>
          </View>

            
          <View style={{...styles.fullSpecView,flexDirection:"row"}}>
          <Icon
            name='phone'
            style={{marginRight:5,marginLeft:3}}
            color={colors.darkGrey}
            size={18}
            />
              <Text style={styles.profileText}>PHONE NUMBER: +234 800 000 000</Text>
          </View>

            
          <View style={{flexDirection:'row',marginRight:50}}>
          <ClientIcon
            name='torso-business'
            style={{marginRight:7,marginLeft:5}}
            color={colors.darkGrey}
            size={18}
            />
              <Text style={styles.profileText}>USER TYPE: </Text>
              <View>
            <TouchableOpacity>
              <Text style={styles.profileText}>Client</Text>
            </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity>
            <View style={styles.updateDetailView}>
                <Text style={styles.updateDetails}>UPDATE DETAILS</Text>
            </View>
          </TouchableOpacity>

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
            <Text style={styles.securityInfoText}>settings</Text>
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

          <View style={{borderTopWidth:1,
                        borderColor:colors.lightGrey,
                        marginTop:15,
                        marginRight:5,
                        marginLeft:5}}></View>

          <TouchableOpacity>
            <View style={styles.signOutView}>
              <Text style={styles.signoutText}>Sign out</Text>
            </View>
          </TouchableOpacity>
      </View>
  </ScrollView>
</View>
  )
} 

export default ProfileScreen

const styles = StyleSheet.create({
   container:{
    margin:0,
    padding:0,
    flex:1
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