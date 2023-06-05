import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

import colors from '../../constants/Colors'
function BrandNewGadgetsScreen ({navigation}){
  return (
    <View style={styles.container}>
      <Text style={styles.txtStyle}>BrandNewGadgetsScreen</Text>
    </View>
  )
}

export default BrandNewGadgetsScreen

const styles = StyleSheet.create({
    container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
    },
    txtStyle:{
        fontSize:35,
        color:colors.main
    }
    
})