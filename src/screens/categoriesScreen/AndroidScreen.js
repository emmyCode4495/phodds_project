import { TouchableOpacity,
        Image,
        StyleSheet, 
        Text, 
        View,ScrollView } from 'react-native'
import React from 'react'
import { androidData } from '../../constants/data'
import Header from '../../components/header'
import colors from '../../constants/Colors'
import { useNavigation } from '@react-navigation/native'

import Icons from 'react-native-vector-icons/Ionicons' 



export default function AndroidScreen() {
  const navigation = useNavigation();
  return (
    <View style={{flex:1,backgroundColor:colors.lightGrey2}}>
        <Header title="Android devices"
            type="arrowleft"
            Color={colors.white}
            navigation={navigation}
        />
        <ScrollView>
      {
          androidData.map((dataOutput,item)=>{
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
    </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  laptopDataStyle:{
    flexDirection:'row',
    justifyContent:"space-between",
    // borderWidth:1,
    padding:15
  },
  laptopDataText:{
    fontSize:25,
    color:colors.black,
    fontFamily:"Poppins-Bold",
    marginBottom:15
  },
  imageStyle:{
    width:100,
    height:100
  }
})