import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { smartwatchData } from '../../constants/data'
import Header from '../../components/header'
import colors from '../../constants/Colors'
import { useNavigation } from '@react-navigation/native'

import Icons from 'react-native-vector-icons/Ionicons' 

export default function SmartWatchesScreen() {
  const navigation = useNavigation();
  return (
    <View>
        <Header title="Smart Watches"
            type="arrowleft"
            Color={colors.white}
            navigation={navigation}
        />
        
{
          smartwatchData.map((dataOutput,item)=>{
            return(
              <TouchableOpacity>
              <View style={styles.smartwatchDataStyle} key={item.id}>
                <Text style={styles.smartwatchDataText}>{dataOutput.title}</Text>
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
  smartwatchDataStyle:{
    flexDirection:'row',
    justifyContent:"space-between",
    // borderWidth:1,
    padding:20
  },
  smartwatchDataText:{
    fontSize:25,
    color:colors.black,
    fontFamily:"Poppins-Bold",
    marginBottom:15
  }
})