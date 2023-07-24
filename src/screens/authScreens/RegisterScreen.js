import { View, 
  StyleSheet,
  ImageBackground,
  Image,
  SafeAreaView,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity, } from 'react-native'
import React, { useContext, useState } from 'react'
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
import { color } from 'react-native-elements/dist/helpers'

import { fontPixel,heightPixel, widthPixel,pixelSizeHorizontal,pixelSizeVertical } from '../../constants/dimensions'
import { AuthContext } from '../../navigation/AuthProvider'

function RegisterScreen({navigation}) {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [confirmPassword, setConfirmPassword] = useState()

  const {register} = useContext(AuthContext)

  return (
    <SafeAreaView style={styles.view1}>
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
            <Text style={styles.txtTitle}>CREATE ACCOUNT</Text>    
        </View>
    </View>
      <ScrollView keyboardShouldPersistTaps='always'>
      <View style={styles.view2}>
      <ImageBackground
            style={styles.imageBackgroundStyle}
              source={require('../../../assets/images/phodds.png')}
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
                  // autoFocus={true}
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
                  onChangeText={(userEmail) => setEmail(userEmail)}
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
                  onChangeText={(userPassword) => setPassword(userPassword)}
                  color={colors.main}
                  placeholderTextColor={colors.main}
                  style={styles.emailTextInput}
                  secureTextEntry={true}
                  autoFocus={false}
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
                  onChangeText={(userPassword) => setPassword(userPassword)}
                  color={colors.main}
                  secureTextEntry={true}
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
            onPress={() => register(email,password)}
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

export default RegisterScreen;

const styles = StyleSheet.create({
   emailStyle:{
    marginTop:Platform.OS === "ios" ? 10:1,
    marginLeft:Platform.OS === "ios" ? 12:10,
    // maxWidth:widthPixel(200),
    justifyContent:'flex-start'
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
    width:widthPixel(200),
    height:heightPixel(180)  
  },
  signupTxt:{
    fontSize:fontPixel(30),
    fontFamily:"Poppins-Bold"
  },
  InputViews:{
    flexDirection:'row',
    borderWidth:1,
    borderColor:colors.main,
    borderRadius:25,
    paddingLeft:5,
    marginTop:20,
    marginLeft:5,
    marginRight:5,
    height:heightPixel(60)  
  },
  InputViews1:{
    flexDirection:'row',
    borderWidth:1,
    borderColor:colors.main,
    borderRadius:25,
    paddingLeft:5,
    marginTop:Platform.OS === "ios" ? 20:20,
    marginLeft:5,
    marginRight:5,
    height:heightPixel(60),
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
    fontSize:fontPixel(18),
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
    justifyContent:'center',
    alignItems:'center'
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
    fontSize:fontPixel(18),
    color:colors.main,
    fontWeight:800
  }

})