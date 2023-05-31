import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../constants/Colors'

import Icon from 'react-native-vector-icons/FontAwesome'
import { TouchableOpacity } from 'react-native'

const SnackDrawerBar = ({navigation})=> {
  return (
    
    <View style={styles.container}>

        <View style={styles.iconViewStyle}>
            <TouchableOpacity onPress={()=>navigation.openDrawer()}>
                <Icon 
                name="bars"
                size={30}
                color={colors.white}/>
            </TouchableOpacity>
        </View>

    <View>

    </View>
    </View>
  )
}

export default SnackDrawerBar
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        backgroundColor:colors.main,
        height:40
    },
    iconViewStyle:{
        marginLeft:15,
        justifyContent:'center',
        alignItems:'center'
    }
})