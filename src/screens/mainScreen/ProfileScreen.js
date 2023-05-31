import { View, Text,StyleSheet } from 'react-native'
import colors from '../../constants/Colors'
import React from 'react'

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.txtStyle}>This is the ProfileScreen</Text>
    </View>
  )
}

export default ProfileScreen

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