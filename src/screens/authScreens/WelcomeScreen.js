import { View, 
        Text,
        SafeAreaView,
        StyleSheet,
        ImageBackground,
        Dimensions,
        TouchableOpacity } from 'react-native'

import colors from '../../constants/Colors'
import React from 'react'

const {height} = Dimensions.get("window")

function WelcomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
        <View >
            <ImageBackground
            style={{
                height: height/1.8
            }}
            resizeMode='contain'
            source={require("../../../assets/images/newWelcomePg.png")}
            />
            <View style={{marginBottom:30}}>
                <Text style={styles.captionText}>HOME OF QUALITY GADGETS.</Text>
                <Text style={styles.captionText1}>...Optimal Satisfaction is guaranteed on every purchase</Text>
            </View>
        </View>
            <View style={styles.touchableOpacityViewStyle}>
                <TouchableOpacity style={styles.touchOpacityStyle}>
                    <Text style={styles.loginTextStyle}>LOGIN</Text>
                </TouchableOpacity>
            

                <TouchableOpacity style={styles.touchOpacityStyle1}>
                    <Text style={styles.registerTextStyle}>REGISTER</Text>
                </TouchableOpacity>
            </View>
    </SafeAreaView>
  )
}

export default WelcomeScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        
    },
    captionText:{
        fontSize:30,
        color:colors.main,
        fontFamily:"Poppins-Bold",
        textAlign:'center',
        marginTop:10
    },
    captionText1:{
        fontSize:12,
        color:colors.black,
        fontWeight:800,
        fontFamily:"Pangolin-Regular",
        textAlign:'center',
    },
    touchOpacityStyle:{
        backgroundColor:colors.main,
        width:'50%',
        paddingHorizontal: 55,
        paddingVertical:20,
        borderRadius:30
    },
    touchOpacityStyle1:{
        backgroundColor:colors.white,
        width:'50%',
        paddingHorizontal: 55,
        paddingVertical:20,
        marginLeft: 10,
        borderRadius:30
    },
    touchableOpacityViewStyle:{
        paddingHorizontal:20,
        marginTop:40,
        flexDirection:'row'
    },
    loginTextStyle:{
        textAlign:'center',
        fontFamily:"Poppins-Bold",
        color:colors.white,
    fontSize:15  
},
registerTextStyle:{
    textAlign:'center',
    fontFamily:"Poppins-Bold",
    color:colors.main,
    fontSize:15  
},
})