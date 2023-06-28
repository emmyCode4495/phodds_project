import { View, 
    Text,
      StyleSheet,
    ScrollView,
    ImageBackground,
    TouchableOpacity,
  TextInput } from 'react-native'

import {Button} from 'react-native-elements'
import React from 'react'
import colors from '../../constants/Colors'


import ArrowIcon from 'react-native-vector-icons/AntDesign'
//Imports for the Icons used
import Icon from 'react-native-vector-icons/AntDesign'
import UserIcon from 'react-native-vector-icons/FontAwesome'
import PhoneIcons from 'react-native-vector-icons/MaterialIcons'
import LockedIcon from 'react-native-vector-icons/Fontisto'

import {Formik} from "formik"

const VendorScreen = () => {
  return (
    <View style={styles.mainView}>
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
      <View style={styles.view2}>
      <ImageBackground
            style={styles.imageBackgroundStyle}
              source={require('../../../assets/images/vendor.png')}
            />
        </View>

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
                  autoFocus={true}
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
                  placeholder='+234 800 000 000'
                  placeholderTextColor={colors.main}
                  keyboardType='numeric'
                  color={colors.main}
                  style={styles.emailTextInput}
                  
                  />
              </View>
            </View>

            <View style={styles.InputViews1}>
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
                  autoFocus={false}
                  />
              </View>

              {/* <View>
                <PhoneIcons
                  name="visibility-off"
                  color={colors.main}
                  size={24}
                  style={styles.email1}
                />
              </View> */}
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
    </View>
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
    backgroundColor:colors.white
  },
  container:{
    flexDirection:'row',
    marginTop:30,
    paddingHorizontal:15,
},
headerText:{
marginLeft:15,
marginTop:4,

},
txtTitle:{
  fontSize:24,
  fontFamily:"Poppins-Bold",
  color:colors.main
},
  view1:{
    justifyContent:'center',
  },
  view2:{
    flex:1,
    paddingHorizontal:10,
    paddingVertical:10,
    alignItems:'center',
    justifyContent:"center"
  },
  imageBackgroundStyle:{
    borderRadius:30,
    marginTop:5,
    resizeMode:'contain',
    alignItems:'center',
    justifyContent:'center',
    width:300,
    height:200  
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
    marginLeft:5,
    marginRight:5,
    height:60  
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
    height:60,
    padding:10  
  },
  email:{
    padding:0,
    marginTop:10,
    marginLeft:5
  },
  email1:{
    padding:0,
    marginTop:10,
    marginRight:12
  },
  emailTextInput:{
    fontSize:18,
  },
  buttonStyle:{
  borderWidth:1,
  borderColor:colors.main,
  borderRadius:30,
  backgroundColor:colors.main
  },
  buttonViewStyle:{
    paddingHorizontal:10,
    paddingVertical:25,
    width:"100%",
  },
  titleViewStyle:{
    paddingHorizontal:5,
    paddingVertical:5,
    fontFamily:"Poppins-Bold",
    color:colors.white,
    fontSize:16
  },
  newUserViewStyle:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  newUserText:{
    fontFamily:"Poppins-Bold",
    fontSize:14,
    marginRight:5,
    color:colors.darkGrey
  },
  createAccountText:{
    fontFamily:"Poppins-Bold",
    fontSize:14,
    color:colors.main,
    fontWeight:800
  }
    
  })