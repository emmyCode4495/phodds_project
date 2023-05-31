import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import colors from '../../constants/Colors'
const VendorScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.txtStyle}>VendorScreen</Text>
    </View>
  )
}

export default VendorScreen

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