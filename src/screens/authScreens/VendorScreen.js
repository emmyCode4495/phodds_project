import { View, 
    Text,
      StyleSheet,
    ScrollView,
    ImageBackground,
    TouchableOpacity,
  TextInput, 
  SafeAreaView} from 'react-native'

import {Button} from 'react-native-elements'
import React from 'react'
import colors from '../../constants/Colors'

import { fontPixel,heightPixel, widthPixel,pixelSizeHorizontal,pixelSizeVertical } from '../../constants/dimensions'



import ArrowIcon from 'react-native-vector-icons/AntDesign'
//Imports for the Icons used
import Icon from 'react-native-vector-icons/AntDesign'
import UserIcon from 'react-native-vector-icons/FontAwesome'
import PhoneIcons from 'react-native-vector-icons/MaterialIcons'
import LockedIcon from 'react-native-vector-icons/Fontisto'
import LandIcon from 'react-native-vector-icons/Entypo'
import BusinessIcon from 'react-native-vector-icons/FontAwesome5'
import SelectDropdown from 'react-native-select-dropdown'

import {Formik} from "formik"


import { businessCategory } from '../../constants/data'
import { useNavigation } from '@react-navigation/native'

const VendorScreen = () => {
  const navigation= useNavigation()
  return (
    <SafeAreaView style={styles.mainView}>
       <View style={styles.container}>
        <View style={styles.IconStyle}>
            <ArrowIcon 
                name="arrowleft"
                color={colors.main}
                size={30}
                onPress={()=>{navigation.goBack()}}
            />
        </View>
        <View style={styles.headerText}>
            <Text style={styles.txtTitle}>BECOME A VENDOR</Text>    
        </View>
    </View>
      <ScrollView keyboardShouldPersistTaps='always'>
        <Formik>                                                                                                                                                                                
          {(props)=>(
            <View>

            <View style={styles.InputViews}>
              <View>
                <UserIcon
                  name="user"
                  color={colors.main}
                  size={24}
                  style={styles.email}
                />
              </View>

              <View style={styles.emailStyle}>
                  <TextInput 
                  placeholder='John Doe'
                  color={colors.main}
                  placeholderTextColor={colors.main}
                  style={styles.emailTextInput}
                  />
              </View>
            </View>

            <View style={styles.InputViews}>
              <View>
                <Icon
                  name="mail"
                  color={colors.main}
                  size={24}
                  style={styles.email}
                />
              </View>

              <View style={styles.emailStyle}>
                  <TextInput 
                  placeholder='email'
                  color={colors.main}
                  placeholderTextColor={colors.main}
                  style={styles.emailTextInput}
                  />
              </View>
            </View>

           
            <View style={styles.InputViews}>
              <View>
                <PhoneIcons
                  name="phone-enabled"
                  color={colors.main}
                  size={24}
                  style={styles.email}
                />
              </View>

              <View style={styles.emailStyle}>
                  <TextInput 
                  placeholder='Contact'
                  placeholderTextColor={colors.main}
                  keyboardType='numeric'
                  color={colors.main}
                  style={styles.emailTextInput}
                  
                  />
              </View>

            </View>

            <View style={styles.InputViews}>
              <View>
                <PhoneIcons
                  name="home"
                  color={colors.main}
                  size={24}
                  style={styles.email}
                />
              </View>

              <View style={styles.emailStyle}>
                  <TextInput 
                  placeholder='7 musaha Close'
                  placeholderTextColor={colors.main}
                  color={colors.main}
                  style={styles.emailTextInput}
                  />
              </View>

            </View>

           
            <View style={styles.InputViews}>
              <View>
                <PhoneIcons
                  name="business"
                  color={colors.main}
                  size={24}
                  style={styles.email}
                />
              </View>

              <View style={styles.emailStyle}>
                  <TextInput 
                  placeholder='Business Name'
                  placeholderTextColor={colors.main}
                  color={colors.main}
                  style={styles.emailTextInput}
                  
                  />
              </View>
            </View>

            <View style={styles.contactStyle}>
            <View style={styles.InputViews2}>
              <View>
                <PhoneIcons
                  name="mail"
                  color={colors.main}
                  size={24}
                  style={styles.email}
                />
              </View>

              <View style={styles.emailStyle}>
                  <TextInput 
                  placeholder='Business email'
                  placeholderTextColor={colors.main}
                  keyboardType='email-address'
                  color={colors.main}
                  style={styles.emailTextInput}
                  
                  />
              </View>

            </View>

            <View style={styles.InputViews2}>
              <View>
                <LandIcon
                  name="landline"
                  color={colors.main}
                  size={24}
                  style={styles.email}
                />
              </View>

              <View style={styles.emailStyle}>
                  <TextInput 
                  placeholder='Business contact'
                  placeholderTextColor={colors.main}
                  keyboardType='numeric'
                  color={colors.main}
                  style={styles.emailTextInput}
                  
                  />
              </View>

            </View>
            </View>

            <View style={{maarginTop:15}}>
              <SelectDropdown
                data={businessCategory}
                onSelect={(selectedItem,index) => {
                  console.log(selectedItem,index)
                }}
                defaultButtonText='Business Category'
                buttonTextAfterSelection={(selectedItem,index) =>{
                  return selectedItem
                }}
                rowTextForSelection={(selectedItem,index) =>{
                  return selectedItem
                }}
                buttonStyle={styles.dropDownButtonStyle}
                buttonTextStyle={styles.dropTextStyle}
                renderDropdownIcon={isOpened =>{
                  return <UserIcon 
                    name={isOpened?'chevron-up':'chevron-down'} 
                    color={colors.main} 
                    size={18}
                    style={{marginLeft:10}}
                    />
                }}
                dropdownIconPosition='left'
                dropdownStyle={styles.dropDownStyle}
                rowStyle={styles.rowFormatstyle}
                rowTextStyle={styles.rowFormatTextStyle}
              />
            </View>

            <View style={styles.InputViews}>
              <View>
                <LockedIcon
                  name="locked"
                  color={colors.main}
                  size={24}
                  style={styles.email}
                />
              </View>

              <View style={styles.emailStyle}>
                  <TextInput 
                  placeholder='password'
                  color={colors.main}
                  placeholderTextColor={colors.main}
                  style={styles.emailTextInput}
                  />
              </View>
            </View>

            <View style={styles.InputViews}>
              <View>
                <LockedIcon
                  name="locked"
                  color={colors.main}
                  size={24}
                  style={styles.email}
                />
              </View>

              <View style={styles.emailStyle}>
                  <TextInput 
                  placeholder='Confirm password'
                  color={colors.main}
                  placeholderTextColor={colors.main}
                  style={styles.emailTextInput}
                  />
              </View>
            </View>

            <View style={styles.buttonViewStyle}>
            <Button
            title="CREATE ACCOUNT"
            buttonStyle={styles.buttonStyle}
            titleStyle={styles.titleViewStyle}
            />
            </View>
            <View style={styles.newUserViewStyle}>
              <Text style={styles.newUserText}>Already have an account? </Text>
              <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
              <Text style={styles.createAccountText}>Sign in here!</Text>
              </TouchableOpacity>
            </View>
            </View>
          )}
        </Formik>
        </ScrollView> 
    </SafeAreaView>
  )
}

export default VendorScreen

const styles = StyleSheet.create({
  emailStyle:{
    marginTop:1,
    marginLeft:5,
    maxWidth:"65%",
    justifyContent:'flex-start'
  },
  mainView:{
    backgroundColor:colors.white,
    flex:1
  },
  container:{
    flexDirection:'row',
    marginTop:30,
    paddingHorizontal:pixelSizeHorizontal(15),
},
headerText:{
marginLeft:15,
marginTop:4,

},
txtTitle:{
  fontSize:fontPixel(24),
  fontFamily:"Poppins-Bold",
  color:colors.main
},
  view1:{
    justifyContent:'center',
  },
  view2:{
    flex:1,
    paddingHorizontal:pixelSizeHorizontal(10),
    paddingVertical:pixelSizeVertical(10),
    alignItems:'center',
    justifyContent:"center"
  },
  imageBackgroundStyle:{
    borderRadius:30,
    marginTop:5,
    resizeMode:'contain',
    alignItems:'center',
    justifyContent:'center',
    width:widthPixel(300),
    height:heightPixel(200)  
  },
  signupTxt:{
    fontSize:30,
    fontFamily:"Poppins-Bold"
  },
  InputViews:{
    flexDirection:'row',
    borderWidth:1,
    borderColor:colors.main,
    borderRadius:10,
    paddingLeft:5,
    marginTop:20,
    marginLeft:10,
    marginRight:10,
    height:heightPixel(60)  
  },
  InputViews1:{
    flexDirection:'row',
    borderWidth:1,
    borderColor:colors.main,
    borderRadius:10,
    paddingLeft:5,
    marginTop:20,
    marginLeft:10,
    marginRight:5,
    height:Platform.OS === 'ios'?heightPixel(60):heightPixel(70),
    padding:10  
  },
  email:{
    padding:0,
    marginTop:Platform.OS == 'ios'?10:11,
    marginLeft:Platform.OS == 'ios'?8:5,
  },
  email1:{
    padding:0,
    marginTop:10,
    marginRight:12
  },
  emailTextInput:{
    fontSize:fontPixel(18),
    marginTop:Platform.OS === 'ios'?10:10
  },
  buttonStyle:{
  borderWidth:1,
  borderColor:colors.main,
  borderRadius:30,
  backgroundColor:colors.main
  },
  buttonViewStyle:{
    paddingHorizontal:pixelSizeHorizontal(10),
    paddingVertical:pixelSizeVertical(25),
    width:widthPixel(400),
  },
  titleViewStyle:{
    paddingHorizontal:pixelSizeHorizontal(5),
    paddingVertical:pixelSizeVertical(5),
    fontFamily:"Poppins-Bold",
    color:colors.white,
    fontSize:fontPixel(16)
  },
  newUserViewStyle:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  newUserText:{
    fontFamily:"Poppins-Bold",
    fontSize:fontPixel(14),
    marginRight:5,
    color:colors.darkGrey
  },
  createAccountText:{
    fontFamily:"Poppins-Bold",
    fontSize:fontPixel(14),
    color:colors.main,
    fontWeight:800
  },
  contactStyle:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },
  InputViews2:{
    flexDirection:'row',
    borderWidth:1,
    borderColor:colors.main,
    width:widthPixel(192),
    borderRadius:10,
    paddingLeft:5,
    marginTop:20,
    marginLeft:5,
    marginRight:5,
    height:heightPixel(60)  
  },
  dropDownButtonStyle:{
    borderWidth:1,
    borderRadius:10,
    marginTop:20,
    marginRight:10,
    marginLeft:10,
    width:widthPixel(390),
    height:heightPixel(60),
    backgroundColor:colors.white,
    borderColor:colors.main
  },
  dropTextStyle:{
    color:colors.main,
    fontSize:fontPixel(20)
  },
  dropDownStyle:{
    borderWidth:1,
    borderRadius:20,
    backgroundColor:colors.white,
    borderColor:colors.white
  },
  rowFormatstyle:{
  
    marginTop:5,
    marginBottom:5,
    borderRadius:10,
    marginLeft:5,
    marginRight:5,
    borderColor:colors.main,
    backgroundColor:colors.white,
  },
  rowFormatTextStyle:{
    color:colors.main
  }
    
  })