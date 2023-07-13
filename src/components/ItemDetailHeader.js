import { View, Text,StyleSheet,Dimensions  } from 'react-native'
import React from 'react'


//Imports for the Icons used
import Icon from 'react-native-vector-icons/MaterialIcons'
import OptionsIcons from 'react-native-vector-icons/SimpleLineIcons'
import LockedIcon from 'react-native-vector-icons/Fontisto'
import ArrowIcon from 'react-native-vector-icons/AntDesign'
import colors from '../constants/Colors'

var { height, width } = Dimensions.get('window');

const ItemDetailHeader= ({title,type,navigation,Color})=>{
  return (
    <View style={styles.container}>
        <View style={{justifyContent:'center',alignItems:'center'}}>
            <ArrowIcon 
                name={type}
                color={Color}
                size={24}
                onPress={()=>{navigation.goBack()}}
            />
        </View>
        <View style={styles.headerText}>
            <Text style={styles.txtTitle}>{title}</Text>    
        </View>
        <View style={styles.iconViewStyle}>
          <LockedIcon
            name='favorite'
            color={colors.white}
            size={24}    
            style={{marginRight:30}}
          />
          <OptionsIcons
            name="options-vertical"
            color={colors.white}
            size={24}
          />
        </View>
    </View>
  )
}

export default ItemDetailHeader;

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        height:70,
        padding:20,
        marginBottom:5,
        backgroundColor:colors.main
    },
    txtTitle:{
        color:colors.white,
        fontSize:24,
        fontFamily:"Poppins-Bold",
        marginLeft:15
    },
    iconViewStyle:{
        flexDirection:'row',
        justifyContent:"center",
        alignItems:'center'
    },
    headerText:{
        marginRight:155,
        alignItems:'center',
        justifyContent:'center'
    }
})