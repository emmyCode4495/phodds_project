import { StyleSheet, Text, TouchableOpacity,View } from 'react-native'
import React from 'react'
import { airpodsData } from '../../constants/data'
import Header from '../../components/header'
import colors from '../../constants/Colors'
import { useNavigation } from '@react-navigation/native'

import Icons from 'react-native-vector-icons/Ionicons' 

export default function AirpodsScreen() {
  const navigation = useNavigation();
  return (
    <View>
        <Header title="Airpods"
            type="arrowleft"
            Color={colors.white}
            navigation={navigation}
        />

{
          airpodsData.map((dataOutput,item)=>{
            return(
              <TouchableOpacity>
              <View style={styles.airpodsDataStyle} key={item.id}>
                <Text style={styles.airpodsDataText}>{dataOutput.title}</Text>
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
  airpodsDataStyle:{
    flexDirection:'row',
    justifyContent:"space-between",
    // borderWidth:1,
    padding:20
  },
  airpodsDataText:{
    fontSize:25,
    color:colors.black,
    fontFamily:"Poppins-Bold",
    marginBottom:15
  }
})