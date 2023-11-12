import { View, Text,StyleSheet,Dimensions  } from 'react-native'
import React from 'react'


//Imports for the Icons used
import Icon from 'react-native-vector-icons/MaterialIcons'
import PhoneIcons from 'react-native-vector-icons/MaterialIcons'
import LockedIcon from 'react-native-vector-icons/Fontisto'
import ArrowIcon from 'react-native-vector-icons/AntDesign'
import colors from '../constants/Colors'

var { height, width } = Dimensions.get('window');

const Header= ({title,type,navigation,Color})=>{
  
  return (
    <View style={styles.container}>
        <View style={styles.IconStyle}>
            <ArrowIcon 
                name={type}
                color={Color}
                size={30}
                navigation = {navigation}
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
        height:70,
        padding:20,
        marginBottom:20,
        backgroundColor:colors.main
    },
    txtTitle:{
        color:colors.white,
        fontSize:28,
        fontFamily:"Poppins-Bold",
        marginLeft:15
    }

})