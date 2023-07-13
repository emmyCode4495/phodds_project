import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import colors from '../../constants/Colors';

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
    <Text style={styles.txtStyle}>SettignsScreen</Text>
  </View>
  )
}

export default SettingsScreen

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