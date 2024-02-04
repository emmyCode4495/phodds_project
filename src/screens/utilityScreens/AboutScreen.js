import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import colors from '../../constants/Colors';

import Icon from 'react-native-vector-icons/AntDesign'
import UpdateIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native';

const AboutScreen = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
     <View style={{backgroundColor:colors.main, flexDirection:'row', height:60, paddingVertical:10}}>
        <TouchableOpacity onPress={()=> navigation.goBack()}>
      <Icon
      name="arrowleft"
      color={colors.white}
      style={{justifyContent:'flex-end',alignItems:'flex-end', marginLeft:20,height:25, marginRight:10}}
      size={30}
      />
      </TouchableOpacity>
       <View>
      <Text style={{color:colors.white, fontSize:26, fontFamily:"Poppins-Bold"}}>
        About us
      </Text>
      </View>
      </View>

      <View style={styles.mainView}>
      <View style={styles.imageStyle}>
        <Image
        source ={require('../../../assets/images/phodds1.png')}
        style={{width:200, height:200}}
        />
        <View style={{marginTop:20, marginBottom:10}}>
          <Text style={{color:colors.main, fontFamily:"Poppins-Bold", fontSize:15}}>Version 1.0</Text>
        </View>
      </View>
      </View>

<TouchableOpacity>
      <View style={styles.updateStyle}>
        <UpdateIcon
        name="update"
        color={colors.black}
        style={styles.iconStyle}
        size={20}
        />
        <Text style={styles.aboutText}>
          Check for Updates
        </Text>
        <Icon
        name="arrowright"
        color={colors.black}
        style={{...styles.iconStyle, marginLeft:160}}
        size={20}
        />
      </View>
</TouchableOpacity>

  <View style={{alignItems:"center", marginTop:300}}>
    <Text style={{color:colors.black, fontSize:12, fontFamily:"Poppins-Bold", letterSpacing:1}}>
      Copyright 2024 Phodds. All rights Reserved.
    </Text>
  </View>
      </View>
  )
}

export default AboutScreen

const styles = StyleSheet.create({
  container:{
    margin:0,
    padding:0,
    backgroundColor:colors.white,
    flex:1
   },
    txtStyle:{
        fontSize:35,
        color:colors.main
    },
    imageStyle:{
      alignItems:'center',
      marginTop:25,
    },
    mainView:{
      backgroundColor:colors.lightGrey2
    },
    updateStyle:{
      backgroundColor:colors.lightGrey2,
      marginTop:7,
      flexDirection:"row",
      paddingVertical:20,
      
    
    },
    iconStyle:{
      marginLeft: 20
    },
    aboutText:{
      fontFamily:"Poppins-Bold",
      fontSize:18,
      marginLeft:10,
      color:colors.black
    }
    
  })