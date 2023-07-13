import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { powerbankData } from '../../constants/data'
import Header from '../../components/header'
import colors from '../../constants/Colors'
import { useNavigation } from '@react-navigation/native'

import Icons from 'react-native-vector-icons/Ionicons' 

export default function PowerbanksScreen() {
  const navigation = useNavigation();
  return (
    <View>
        <Header title="Power Bank"
            type="arrowleft"
            Color={colors.white}
            navigation={navigation}
        />

{
          powerbankData.map((dataOutput,item)=>{
            return(
              <TouchableOpacity>
              <View style={styles.powerbankDataStyle} key={item.id}>
                <Text style={styles.powerbankDataText}>{dataOutput.title}</Text>
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
  powerbankDataStyle:{
    flexDirection:'row',
    justifyContent:"space-between",
    // borderWidth:1,
    padding:20
  },
  powerbankDataText:{
    fontSize:25,
    color:colors.black,
    fontFamily:"Poppins-Bold",
    marginBottom:15
  }
})