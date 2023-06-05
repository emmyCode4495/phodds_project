import { TouchableOpacity,StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { iosData } from '../../constants/data'
import Header from '../../components/header'
import colors from '../../constants/Colors'
import { useNavigation } from '@react-navigation/native'

import Icons from 'react-native-vector-icons/Ionicons' 

export default function IosDataScreen() {
  const navigation = useNavigation();
  return (
    <View style={{flex:1,backgroundColor:colors.lightGrey2}}>
        <Header title="ios"
            type="arrowleft"
            Color={colors.white}
            navigation={navigation}
        />
        {
          iosData.map((dataOutput,item)=>{
            return(
              <TouchableOpacity key={item.key}>
              <View style={styles.iosDataStyle}>
                <Text style={styles.iosDataText}>{dataOutput.title}</Text>
                <Icons 
                  name="ios-chevron-forward"
                  color={colors.black}
                  size={30}
                />
              </View>
              </TouchableOpacity>
            )
          })
        }

    </View>
  )
}

const styles = StyleSheet.create({
  iosDataStyle:{
    flexDirection:'row',
    justifyContent:"space-between",
    // borderWidth:1,
    padding:20
  },
  iosDataText:{
    fontSize:25,
    color:colors.black,
    fontFamily:"Poppins-Bold",
    marginBottom:15
  }
})