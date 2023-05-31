import { View, 
  StyleSheet,
  ImageBackground,
  Image,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity, } from 'react-native'
import React from 'react'
import { Button } from 'react-native-elements'

import Header from '../../components/header'

import ArrowIcon from 'react-native-vector-icons/AntDesign'
//Imports for the Icons used
import Icon from 'react-native-vector-icons/AntDesign'
import UserIcon from 'react-native-vector-icons/FontAwesome'
import PhoneIcons from 'react-native-vector-icons/MaterialIcons'
import LockedIcon from 'react-native-vector-icons/Fontisto'

import colors from '../../constants/Colors';
import {Formik} from "formik"

function RegisterScreen({navigation}) {
  return (
    <View style={styles.view1}>
      <View style={styles.container}>
        <View style={styles.IconStyle}>
            <ArrowIcon 
                name="arrowleft"
                color={colors.white}
                size={30}
                onPress={()=>{navigation.goBack()}}
            />
        </View>
        <View style={styles.headerText}>
            <Text style={styles.txtTitle}>CREATE ACCOUNT</Text>    
        </View>
    </View>
      <ScrollView keyboardShouldPersistTaps='always'>
      <View style={styles.view2}>
      <ImageBackground
         style={styles.imageBackgroundStyle}
         color={colors.lightGrey}
          source={require('../../../assets/images/profile.png')}
        />
        <Text style={styles.signupTxt}>SIGN UP</Text>
        </View>
        <Formik>
          {(props)=>(
            <View>

            <View style={styles.InputViews}>
              <View>
                <UserIcon
                  name="user"
                  color={colors.white}
                  size={24}
                  style={styles.email}
                />
              </View>

              <View style={styles.emailStyle}>
                  <TextInput 
                  placeholder='John Doe'
                  color={colors.main}
                  placeholderTextColor={colors.lightGrey}
                  style={styles.emailTextInput}
                  autoFocus={true}
                  />
              </View>
            </View>

            <View style={styles.InputViews}>
              <View>
                <Icon
                  name="mail"
                  color={colors.white}
                  size={24}
                  style={styles.email}
                />
              </View>

              <View style={styles.emailStyle}>
                  <TextInput 
                  placeholder='email'
                  color={colors.main}
                  placeholderTextColor={colors.lightGrey}
                  style={styles.emailTextInput}
                  />
              </View>
            </View>

            <View style={styles.InputViews}>
              <View>
                <PhoneIcons
                  name="phone-enabled"
                  color={colors.white}
                  size={24}
                  style={styles.email}
                />
              </View>

              <View style={styles.emailStyle}>
                  <TextInput 
                  placeholder='+234 800 000 000'
                  placeholderTextColor={colors.lightGrey}
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
                  color={colors.white}
                  size={24}
                  style={styles.email}
                />
              </View>

              <View style={styles.emailStyle}>
                  <TextInput 
                  placeholder='password'
                  color={colors.main}
                  placeholderTextColor={colors.lightGrey}
                  style={styles.emailTextInput}
                  autoFocus={false}
                  />
              </View>

              <View>
                <PhoneIcons
                  name="visibility-off"
                  color={colors.white}
                  size={24}
                  style={styles.email1}
                />
              </View>
            </View>

            <View style={styles.InputViews}>
              <View>
                <LockedIcon
                  name="locked"
                  color={colors.white}
                  size={24}
                  style={styles.email}
                />
              </View>

              <View style={styles.emailStyle}>
                  <TextInput 
                  placeholder='Confirm password'
                  color={colors.main}
                  placeholderTextColor={colors.lightGrey}
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

export default RegisterScreen;

const styles = StyleSheet.create({
  emailStyle:{
    marginTop:1,
    marginLeft:5,
    maxWidth:"65%",
    justifyContent:'flex-start'
  },
  container:{
    flexDirection:'row',
    marginTop:30,
    paddingHorizontal:20,
},
headerText:{
marginLeft:15,
marginTop:4,

},
txtTitle:{
  fontSize:24,
  fontFamily:"Poppins-Bold",
  color:colors.white
},
  view1:{
    flex:1,
    backgroundColor:colors.black,
    justifyContent:'center',
    
  },
  view2:{
    flex:1,
    paddingHorizontal:20,
    paddingVertical:20,
    alignItems:'center',
    justifyContent:"center"
  },
  imageBackgroundStyle:{
    borderRadius:30,
    resizeMode:'contain',
    alignItems:'center',
    justifyContent:'center',
    width:150,
    height:100  
  },
  signupTxt:{
    fontSize:30,
    fontFamily:"Poppins-Bold"
  },
  InputViews:{
    flexDirection:'row',
    borderWidth:1,
    borderColor:colors.white,
    borderRadius:25,
    paddingLeft:5,
    marginTop:20,
    marginLeft:5,
    marginRight:5,
    height:60  
  },
  InputViews1:{
    flexDirection:'row',
    justifyContent:'space-between',
    borderWidth:1,
    borderColor:colors.white,
    borderRadius:25,
    paddingLeft:5,
    marginTop:20,
    marginLeft:5,
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
  borderColor:colors.white,
  borderRadius:30,
  backgroundColor:colors. black
  },
  buttonViewStyle:{
    paddingHorizontal:10,
    paddingVertical:25,
    width:"100%",
  },
  titleViewStyle:{
    paddingHorizontal:10,
    paddingVertical:15,
    borderRadius:30,
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
    marginRight:5
  },
  createAccountText:{
    fontFamily:"Poppins-Bold",
    fontSize:14,
    color:colors.main
  }

})