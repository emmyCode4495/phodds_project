import { TouchableOpacity,StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { laptopData } from '../../constants/data'
import Header from '../../components/header'
import colors from '../../constants/Colors'
import { useNavigation } from '@react-navigation/native'

import Icons from 'react-native-vector-icons/Ionicons' 


export default function LaptopsScreen() {
  const navigation = useNavigation();
  return (
    <View style={{flex:1,backgroundColor:colors.lightGrey2}}>
        <Header title="Laptops and Accessories"
            type="arrowleft"
            Color={colors.white}
            navigation={navigation}
        />
        {
          laptopData.map((dataOutput,item)=>{
            return(
              <TouchableOpacity>
              <View style={styles.laptopDataStyle} key={item.id}>
                <Text style={styles.laptopDataText}>{dataOutput.title}</Text>
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
  laptopDataStyle:{
    flexDirection:'row',
    justifyContent:"space-between",
    // borderWidth:1,
    padding:20
  },
  laptopDataText:{
    fontSize:25,
    color:colors.black,
    fontFamily:"Poppins-Bold",
    marginBottom:15
  }
})