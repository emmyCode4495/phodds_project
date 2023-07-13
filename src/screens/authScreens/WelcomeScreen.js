import { View, 
        Text,
        SafeAreaView,
        StyleSheet,
        ImageBackground,
        Dimensions,
        TouchableOpacity } from 'react-native'

import colors from '../../constants/Colors'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { fontPixel, widthPixel,pixelSizeHorizontal,pixelSizeVertical } from '../../constants/dimensions'

const {height} = Dimensions.get("window")

function WelcomeScreen() {
    const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.container}>
        <View >
            <ImageBackground
            style={{                                                                                                                                                                                                                                                    
                height: height/1.8
            }}
            resizeMode='contain'
            source={require("../../../assets/images/phodds.png")}
            />
            <View style={{marginBottom:30}}>
                <Text style={styles.captionText}>HOME OF QUALITY GADGETS.</Text>
                <Text style={styles.captionText1}>...Optimal Satisfaction is guaranteed on every purchase</Text>
            </View>
        </View>
            <View style={styles.touchableOpacityViewStyle}>
                <TouchableOpacity 
                style={styles.touchOpacityStyle}
                onPress={()=>navigation.navigate("Login")}
                >
                    <Text style={styles.loginTextStyle}>LOGIN</Text>
                </TouchableOpacity>
            

                <TouchableOpacity 
                style={styles.touchOpacityStyle1}
                onPress={()=>navigation.navigate("RegisterOption")}
                >
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
        fontSize:fontPixel(25),
        color:colors.main,
        fontFamily:"Poppins-Bold",
        textAlign:'center',
        marginTop:10
    },
    captionText1:{
        fontSize:fontPixel(12),
        color:colors.black,
        fontWeight:800,
        fontFamily:"Poppins-Bold",
        textAlign:'center',
    },
    touchOpacityStyle:{
        backgroundColor:colors.main,
        width:widthPixel(200),
        paddingHorizontal: pixelSizeHorizontal(50),
        paddingVertical:pixelSizeVertical(20),
        borderRadius:30
    },
    touchOpacityStyle1:{
        backgroundColor:colors.white,
        width:widthPixel(200),
        paddingHorizontal: pixelSizeHorizontal(50),
        paddingVertical:pixelSizeVertical(20),
        borderRadius:30,
        marginLeft:5,
        marginRight:5
    },
    touchableOpacityViewStyle:{
        paddingHorizontal:20,
        marginTop:40,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    loginTextStyle:{
        textAlign:'center',
        fontFamily:"Poppins-Bold",
        color:colors.white,
        fontSize:fontPixel(15)  
},
registerTextStyle:{
    textAlign:'center',
    fontFamily:"Poppins-Bold",
    color:colors.main,
    fontSize:fontPixel(15)    
},
})        