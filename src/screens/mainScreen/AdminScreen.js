import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import colors from '../../constants/Colors'

const Admin = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.txtStyle}>This is the Admin</Text>
    </View>
  )
}

export default Admin

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