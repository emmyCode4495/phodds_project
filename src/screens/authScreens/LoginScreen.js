import { View, 
  StyleSheet,
  ImageBackground,
  Image,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  SafeAreaView, } from 'react-native'
import React , {useState, useContext, useEffect}from 'react'
import { Button } from 'react-native-elements'

import Header from '../../components/header'

import { fontPixel,heightPixel, widthPixel,pixelSizeHorizontal,pixelSizeVertical } from '../../constants/dimensions'


import ArrowIcon from 'react-native-vector-icons/AntDesign'
//Imports for the Icons used
import Icon from 'react-native-vector-icons/AntDesign'
import UserIcon from 'react-native-vector-icons/Entypo'
import PhoneIcons from 'react-native-vector-icons/MaterialIcons'
import LockedIcon from 'react-native-vector-icons/Fontisto'

import colors from '../../constants/Colors';                                                                    
import {Formik} from "formik"
import { AuthContext } from '../../navigation/AuthProvider'



function LoginScreen({navigation}) {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const {login, googlelogin} = useContext(AuthContext)


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
            <Text style={styles.txtTitle}>SIGN IN</Text>    
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
                <Icon
                  name="mail"
                  color={colors.main}
                  size={24}
                  style={styles.email}
                />
              </View>

              <View style={styles.emailStyle}>
                  <TextInput 
                  placeholder='test@gmail.com'
                  onChangeText={(userEmail) => setEmail(userEmail)}
                  color={colors.main}
                  placeholderTextColor={colors.main}
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
                  placeholder='*********'
                  color={colors.main}
                  onChangeText={(userPassword) => setPassword(userPassword)}
                  secureTextEntry={true}
                  placeholderTextColor={colors.main}
                  style={styles.emailTextInput}
                  autoFocus={false}
                  />
              </View>
            </View>
            
              <View style={styles.changePasswordView}>
                <Text style={styles.forgotPasswordText}>Forgot password?</Text>
              </View>
            <View style={styles.buttonViewStyle}>
            <Button
            title="SIGN IN"
            buttonStyle={styles.buttonStyle}
            titleStyle={styles.titleViewStyle}
            onPress={()=> login(email, password)}
            />
            </View>
            <View style={styles.newUserViewStyle}>
              <Text style={styles.newUserText}>New User? </Text>
              <TouchableOpacity onPress={()=>navigation.navigate("Register")}>
              <Text style={styles.createAccountText}>Create an account here!</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.altViewStyle}>
              <Text style={styles.altTextStyle}>OR</Text>
            </View>

            <View style={styles.signInWithViewStyle}>
              <Text style={styles.signInTextStyle}>Sign in with:</Text>
              <UserIcon
              name="facebook-with-circle"
              size={30}
              style={styles.facebookStyle}
              />
              <Text style={{fontWeight:'bold', fontSize:30,color:colors.black}}>|</Text>
             <TouchableOpacity
             onPress={googlelogin}
             >
              <Icon
                name='google'
                size={30}
                style={styles.googleStyle}
              />
              </TouchableOpacity>
            </View>
           
            {
               Platform.OS === "ios" ? <></>:
              <View style={styles.biometricStyle}>
              <PhoneIcons
              name="fingerprint"
              color={colors.main}
              size={50}/> 
              <Text style={styles.biometrics}>Fingerprint Login</Text>
              </View>  
            }
            
            </View>
          
          )}
        </Formik>
        </ScrollView>     
</SafeAreaView>  
  )
}

export default LoginScreen;

const styles = StyleSheet.create({
  emailStyle:{
    marginTop:Platform.OS === "ios" ? 12:0.2,
    marginLeft:Platform.OS === "ios" ? 10:0.5,
    maxWidth:"65%"
  },
  container:{
    flexDirection:'row',
    marginTop:Platform.OS == 'ios'?10:20,
    paddingHorizontal:20,
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
    flex:1,
    justifyContent:'center',
    
  },
  view2:{
    flex:1,
    paddingHorizontal:pixelSizeHorizontal(20),
    paddingVertical:pixelSizeVertical(20),
    alignItems:'center',
    justifyContent:"center"
  },

  changePasswordView:{
    marginTop:Platform.OS == 'ios'?10:5,
    marginLeft:Platform.OS == 'ios'?15:15
  },
  forgotPasswordText:{
    fontSize:fontPixel(16),
    color:colors.darkGrey
  },
  imageBackgroundStyle:{
    alignItems:'center',
    justifyContent:'center',
    width:widthPixel(200),
    height:heightPixel(190)  
  },
  signupTxt:{
    fontSize:fontPixel(30),
    fontFamily:"Poppins-Bold",
    color:colors.black,
    fontWeight:800,
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
    // justifyContent:'space-between',
    borderWidth:1,
    borderColor:colors.main,
    borderRadius:25,
    paddingLeft:5,
    marginTop:20,
    marginLeft:5,
    marginRight:5,
    height:heightPixel(60),
    padding:5  
  },
  email:{
    padding:0,
    marginTop:Platform.OS === "ios" ? 8:12,
    marginLeft:5,
  },
  email1:{
    padding:0,
    marginTop:10,
    marginRight:12
  },
  passwordTextInput:{
    fontSize:Platform.OS === "ios" ? fontPixel(20) : fontPixel(20),
    color:colors.white
  },
  emailTextInput:{
    fontSize:Platform.OS === "ios" ? fontPixel(20) : fontPixel(20),
    fontFamily:"Roboto-Bold"
  },

  buttonStyle:{
  borderWidth:1,
  borderColor:colors.main,
  borderRadius:30,
  backgroundColor:colors.main
  },
  buttonViewStyle:{
    paddingHorizontal:pixelSizeHorizontal(10),
    paddingVertical:pixelSizeVertical(20),
    width:widthPixel(400),
  },
  titleViewStyle:{
   paddingHorizontal:pixelSizeHorizontal(5),
   paddingVertical:pixelSizeVertical(7),
    fontFamily:"Poppins-Bold",
    color:colors.white,
    fontSize:Platform.OS === "ios" ? fontPixel(18) : fontPixel(20),
  },
  newUserViewStyle:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  newUserText:{
    fontFamily:"Poppins-Bold",
    fontSize:Platform.OS === "ios" ? fontPixel(15) : fontPixel(15),
    color:colors.main,
    marginRight:5
  },
  createAccountText:{
    fontFamily:"Poppins-Bold",
    fontSize:Platform.OS === "ios" ? fontPixel(15) : fontPixel(15),
    color:colors.black
  },
  altViewStyle:{
    alignItems:'center',
    justifyContent:'center',
    marginTop:Platform.OS === "ios" ? 20 : 25,
  },
  altTextStyle:{
    color:colors.darkGrey,
    fontFamily:'Poppins-Bold',
    fontSize:Platform.OS === "ios" ? fontPixel(20) : fontPixel(20),
  },
  signInWithViewStyle:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    paddingVertical:Platform.OS === 'ios'? pixelSizeVertical(15):pixelSizeVertical(5),
    paddingHorizontal:Platform.OS === "ios" ?pixelSizeHorizontal(10):pixelSizeHorizontal(10),

  },
  signInTextStyle:{
    color:colors.darkGrey,
    fontFamily:'Poppins-Bold',
    fontSize:Platform.OS === "ios" ? fontPixel(25) : fontPixel(20),
  },
  facebookStyle:{
    marginRight:10,
    marginLeft:10,
    color:colors.facebookBlue
  },
  googleStyle:{
    marginRight:10,
    marginLeft:10,
    color:colors.googleRed
  },
  biometricStyle:{
    justifyContent:'center',
    alignItems:"center",
    marginTop:Platform.OS === "ios" ? 15 : 20,
  },
  biometrics:{
    fontSize:30,
    fontFamily:'Roboto-Bold',
    color:colors.black
  }

})