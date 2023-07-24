import React, { createContext, useState,useEffect } from "react";
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

import auth from '@react-native-firebase/auth'

export const AuthContext = createContext();


export const AuthProvider = ({children}) => {

  useEffect(() =>{
    GoogleSignin.configure({
        webClientId:'391592148139-3916pijvrij3fbjff3pa3ne22bl7dpl2.apps.googleusercontent.com',
    })
  }, [])

    const [user, setUser] = useState(null)
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
          }
    }}>
        {children}
    </AuthContext.Provider>
)
}


