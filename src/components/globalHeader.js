                                     import { View, Text,StyleSheet  } from 'react-native'
import React from 'react'


//Imports for the Icons used
import Icon from 'react-native-vector-icons/MaterialIcons'
import PhoneIcons from 'react-native-vector-icons/MaterialIcons'
import LockedIcon from 'react-native-vector-icons/Fontisto'
import ArrowIcon from 'react-native-vector-icons/AntDesign'
import colors from '../constants/Colors'

const GlobalHeader= ({title})=>{
  return (
    <View style={styles.container}>
        <View style={styles.IconStyle}>
            <ArrowIcon 
                name="arrowleft"
                colors={colors.white}
                size={28}
                onPress={()=>{navigation.goBack()}}
            />
        </View>
        <View style={styles.headerText}>
            <Text style={styles.txtTitle}>{title}</Text>    
        </View>
    </View>
  )
}

export default Header;

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        height:20,
        paddingTop:20,
    },
    txtTitle:{
        color:colors.white,
        fontSize:28,
        fontFamily:"Poppins-Bold"
    }

})