import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import colors from '../../constants/Colors';
import Rating from '../../components/Rating';
import { TrendingData } from '../../constants/data';
import Header from '../../components/header';


const SavedItemsScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header 
      title="Saved Items" 
      type="arrowleft"
      Color={colors.white}
      navigation={navigation}/>
      <View style={{justifyContent:'center',alignItems:'center'}}>
      <Text style={styles.txtStyle}>Saved Items go here</Text>
      </View>
  </View>
  )
}

export default SavedItemsScreen

const styles = StyleSheet.create({
    container:{
    flex:1,
    },
    txtStyle:{
        fontSize:35,
        color:colors.main
    }
    
  })