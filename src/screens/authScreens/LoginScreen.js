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
import UserIcon from 'react-native-vector-icons/Entypo'
import PhoneIcons from 'react-native-vector-icons/MaterialIcons'
import LockedIcon from 'react-native-vector-icons/Fontisto'

import colors from '../../constants/Colors';
import {Formik} from "formik"

function LoginScreen({navigation}) {
  return (
      <ImageBackground
        source={require('../../../assets/images/drawerHeaderBackground.png')}
        style={{flex:1,width:null,height:null}}
      >
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
            <Text style={styles.txtTitle}>SIGN IN</Text>    
        </View>
    </View>
      <ScrollView keyboardShouldPersistTaps='always'>
      <View style={styles.view2}>
          <ImageBackground
            style={styles.imageBackgroundStyle}
              source={require('../../../assets/images/loginProfile.png')}
            />
            <Text style={styles.signupTxt}>SIGN IN</Text>
        </View>
        <Formik>
          {(props)=>(
            <View>

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
                  placeholder='test@gmail.com'
                  color={colors.white}
                  placeholderTextColor={colors.white}
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
                  placeholder='*********'
                  color={colors.white}
                  placeholderTextColor={colors.white}
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
            

            <View style={styles.buttonViewStyle}>
            <Button
            title="SIGN IN"
            buttonStyle={styles.buttonStyle}
            titleStyle={styles.titleViewStyle}
            onPress={()=>navigation.navigate("Home")}
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
              <Text style={{fontWeight:'bold', fontSize:30,color:colors.lightGrey}}>|</Text>
              <Icon
                name='google'
                size={30}
                style={styles.googleStyle}
              />
            </View>
            <View style={styles.biometricStyle}>
              <PhoneIcons
              name="fingerprint"
              color={colors.white}
              size={50}
              />
            <Text style={styles.biometrics}>Fingerprint Login</Text>
            </View>
            </View>
          )}
        </Formik>
        </ScrollView>     
</View>  
</ImageBackground>
  )
}

export default LoginScreen;

const styles = StyleSheet.create({
  emailStyle:{
    marginTop:1,
    marginLeft:5,
    maxWidth:"65%"
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
    alignItems:'center',
    justifyContent:'center',
    width:200,

    height:120  
  },
  signupTxt:{
    fontSize:30,
    fontFamily:"Pangolin-Regular",
    color:colors.black,
    fontWeight:800,
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
    padding:5  
  },
  email:{
    padding:0,
    marginTop:10,
    marginLeft:5,
  },
  email1:{
    padding:0,
    marginTop:10,
    marginRight:12
  },
  passwordTextInput:{
    fontSize:18,
    color:colors.white
  },
  emailTextInput:{
    fontSize:18,
    fontFamily:"Roboto-Regular"
  },
  buttonStyle:{
  borderWidth:1,
  borderColor:colors.white,
  borderRadius:30,
  backgroundColor:colors.white
  },
  buttonViewStyle:{
    paddingHorizontal:10,
    paddingVertical:20,
    width:"100%",
  },
  titleViewStyle:{
   paddingHorizontal:5,
   paddingVertical:7,
    fontFamily:"Poppins-Bold",
    color:colors.main,
    fontSize:18
  },
  newUserViewStyle:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  newUserText:{
    fontFamily:"Poppins-Bold",
    fontSize:14,
    color:colors.white,
    marginRight:5
  },
  createAccountText:{
    fontFamily:"Poppins-Bold",
    fontSize:14,
    color:colors.black
  },
  altViewStyle:{
    alignItems:'center',
    justifyContent:'center',
    marginTop:25,
  },
  altTextStyle:{
    color:colors.white,
    fontFamily:'Poppins-Bold',
    fontSize:20
  },
  signInWithViewStyle:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    paddingVertical:10,
    paddingHorizontal:10,

  },
  signInTextStyle:{
    color:colors.white,
    fontFamily:'Poppins-Bold',
    fontSize:12
  },
  facebookStyle:{
    marginRight:10,
    marginLeft:10,
    color:colors.white
  },
  googleStyle:{
    marginRight:10,
    marginLeft:10,
    color:colors.white
  },
  biometricStyle:{
    justifyContent:'center',
    alignItems:"center",
    marginTop:20
  },
  biometrics:{
    fontSize:30,
    fontFamily:'Roboto-Bold',
    color:colors.lightGrey
  }

})