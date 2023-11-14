import React from "react";
import {View,
    Text, 
    SafeAreaView,
    Image,StyleSheet} from 'react-native'

import colors from "../constants/Colors";
import EllipIcon from 'react-native-vector-icons/FontAwesome5'
import FavIcon from 'react-native-vector-icons/MaterialIcons'
import Icon from 'react-native-vector-icons/AntDesign'
import { vendorData,TrendingData } from "../constants/data"
import { useNavigation } from "@react-navigation/native";

export default function VendorHeader({route}){
    const navigation = useNavigation()
   //const {id, trending}  = route.params
    return(
    
        <SafeAreaView style={{backgroundColor:colors.main,paddingBottom:10}}>
            <View style={styles.imgViewStyle}>
            <Icon 
                  name="arrowleft"
                  color={colors.white}
                  size={30}
                  style={styles.arrowIconStyle}
                  onPress={()=>{navigation.goBack()}}
              />
            <Image
                source={require('../../assets/images/client.png')}
                style={styles.imageStyle}
            />
             <Text style={styles.vendorNameStyle}>J-tech</Text>
             <FavIcon
                name="favorite-outline"
                size={30}
                color={colors.white}
                style={styles.favIconStyle}
             />
               <Icon
                name="search1"
                size={28}
                color={colors.white}
                style={styles.ellipIconStyle}
             />
             <EllipIcon
                name="ellipsis-v"
                size={28}
                color={colors.white}
                style={styles.ellipIconStyle}
             />
            </View>
        </SafeAreaView>
    )
} 

const styles = StyleSheet.create({
 
imageStyle:{
    width:50,
    height:50,
    borderWidth:1,
    borderRadius:200/2,
    marginTop:10
},
vendorNameStyle:{
    color:colors.white,
    fontSize:30,
    marginTop:20,
    fontFamily:"Poppins-Bold",
},
imgViewStyle:{
    flexDirection:"row",
    justifyContent:"space-between"
},
favIconStyle:{
marginTop:23,
marginRight:10
},
ellipIconStyle:{
    marginTop:23,
    marginRight:20
    },
    arrowIconStyle:{
        marginTop:23,
        marginLeft:10
 },
})