import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { tabData } from '../../constants/data'
import Header from '../../components/header'
import colors from '../../constants/Colors'
import { useNavigation } from '@react-navigation/native'

import Icons from 'react-native-vector-icons/Ionicons' 

export default function TabletsScreen() {
  const navigation = useNavigation();
  return (
    <View>
        <Header title="Tablets"
            type="arrowleft"
            Color={colors.white}
            navigation={navigation}
        />

{
          tabData.map((dataOutput,item)=>{
            return(
              <TouchableOpacity>
              <View style={styles.tabDataStyle} key={item.id}>
                <Text style={styles.tabDataText}>{dataOutput.title}</Text>
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
  tabDataStyle:{
    flexDirection:'row',
    justifyContent:"space-between",
    // borderWidth:1,
    padding:20
  },
  tabDataText:{
    fontSize:25,
    color:colors.black,
    fontFamily:"Poppins-Bold",
    marginBottom:15
  }
})