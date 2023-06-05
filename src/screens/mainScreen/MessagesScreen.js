import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import colors from '../../constants/Colors'

const MessagesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.txtStyle}>Messages go here</Text>
    </View>
  )
}

export default MessagesScreen

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