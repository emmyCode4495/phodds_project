import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import colors from '../../constants/Colors';


const AdminScreen = () => {
  return (
    <View style={styles.container}>
    <Text style={styles.txtStyle}>For the odogwus</Text>
  </View>
  )
}

export default AdminScreen

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