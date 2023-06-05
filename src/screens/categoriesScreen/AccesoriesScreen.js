import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { accesoriesData } from '../../constants/data'
import Header from '../../components/header'
import colors from '../../constants/Colors'
import { useNavigation } from '@react-navigation/native'

import Icons from 'react-native-vector-icons/Ionicons' 

export default function AccessoriesScreen() {
  const navigation = useNavigation();
  return (
    <View>
        <Header title="Accessories"
            type="arrowleft"
            Color={colors.white}
            navigation={navigation}
        />

{
          accesoriesData.map((dataOutput,item)=>{
            return(
              <TouchableOpacity key={item.key}>
              <View style={styles.accessoriesDataStyle}>
                <Text style={styles.accessoriesDataText}>{dataOutput.title}</Text>
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
  accessoriesDataStyle:{
    flexDirection:'row',
    justifyContent:"space-between",
    // borderWidth:1,
    padding:20
  },
  accessoriesDataText:{
    fontSize:25,
    color:colors.black,
    fontFamily:"Poppins-Bold",
    marginBottom:15
  }
})