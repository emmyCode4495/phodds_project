import React, { createContext, useState,useEffect } from "react";
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

import auth from '@react-native-firebase/auth'
import TouchID from 'react-native-touch-id'
export const AuthContext = createContext();


export const AuthProvider = ({children}) => {

  useEffect(() =>{
    GoogleSignin.configure({
        webClientId:'391592148139-3916pijvrij3fbjff3pa3ne22bl7dpl2.apps.googleusercontent.com',
    })
  }, [])

  const optionalConfigObject = {
    title: 'Authentication Required', // Android
    imageColor: '#e00606', // Android
    imageErrorColor: '#ff0000', // Android
    sensorDescription: 'Touch sensor', // Android
    sensorErrorDescription: 'Failed', // Android
    cancelText: 'Cancel', // Android
    fallbackLabel: 'Show Passcode', // iOS (if empty, then label is hidden)
    unifiedErrors: false, // use unified error messages (default false)
    passcodeFallback: false, // iOS - allows the device to fall back to using the passcode, if faceid/touch is not available. this does not mean that if touchid/faceid fails the first few times it will revert to passcode, rather that if the former are not enrolled, then it will use the passcode.
  };


    const [user, setUser] = useState(null)
    const [isAuth, setIsAuth] = useState(false)

    return(
    <AuthContext.Provider
    value={{
          user,
          setUser,
          login: async (email, password) =>{
            try{
                await auth().signInWithEmailAndPassword(email,password);
            }catch(e){
                console.log(e);
            }
          },
          register: async (email, password)=> {
            try {
                await auth().createUserWithEmailAndPassword(email,password);
            }catch(e){
                console.log(e)
            }
          },
          logout: async () => {
            try {
                await auth().signOut()
            }catch(e){
                console.log(e)
            } 
          },
          googlelogin: async () => {
            try {
                await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
                // Get the user's unique ID token
               const {idToken} = await GoogleSignin.signIn();
                
               // Create a google credential with the token
               const googleCredential = auth.GoogleAuthProvider.credential(idToken)

               //sign in the user with the credentials
               return auth().signInWithCredential(googleCredential)

            } catch (error) {
              if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
                console.log(error)
              } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (e.g. sign in) is in progress already
                console.log(error)
              } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
                console.log(error)
              } else {
                // some other error happened
                console.log(error)
              }
            }
          },
          biometryLogin: async () =>{
              TouchID.isSupported(optionalConfigObject).then(biometryType=>{
                if (biometryType === 'FaceID') {
                  console.log('FaceID is supported.');
              } else {
                  console.log('TouchID is supported.');
                  TouchID.authenticate('',optionalConfigObject).then((success) => {
                   if (success){
                    onLoginwithFingerprint()
                   }
                    setIsAuth(user)
                  }).catch((err)=>{
                    console.log('Error', err)
                  }) 
              }
            })
            .catch(error => {
              // Failure code
              console.log(error);
            });
            
            }
    }}>
        {children}
    </AuthContext.Provider>
)
}


