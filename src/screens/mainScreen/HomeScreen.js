import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import colors from '../../constants/Colors';

import SnackDrawerBar from '../../components/SnackDrawerBar';

const HomeScreen = ({navigation})=> {
  return (
    <View style={styles.container}>
    
      <SnackDrawerBar navigation={navigation}/>
    
    </View>
  )
}
 
export default HomeScreen;

const styles = StyleSheet.create({
  container:{
  flex:1,
  },
  
})