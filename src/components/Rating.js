import React from 'react'
import {View,Text} from 'react-native'
import colors from '../constants/Colors';

import Icons from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/FontAwesome';

function Rating({value,text}) {
    const size = 14
    const color = '#f1c232'
  return (
    <View style={{flexDirection:'row',marginBottom:3}}>
        <Icon
            name={value >= 1 ? "star" : value >= 0.5 ? "star-half-o" : "star-o"}
            color={color}
            size={size}
        />

    <Icon 
            name={value >= 2 ? "star" : value >= 1.5 ? "star-half-o" : "star-o"}
            color={color}
            size={size}
        />

    <Icon 
            name={value >= 3 ? "star" : value >= 2.5 ? "star-half-o" : "star-o"}
            color={color}
            size={size}
        />

    <Icon 
            name={value >= 4 ? "star" : value >= 3.5 ? "star-half-o" : "star-o"}
            color={color}
            size={size}
        />

    <Icon 
            name={value >= 5 ? "star" : value >= 4.5 ? "star-half-o" : "star-o"}
            color={color}
            size={size}
        />

    <Icon 
            name={value >= 6 ? "star" : value >= 5.5 ? "star-half-o" : "star-o"}
            color={color}
            size={size}
        />
        {/* {
            text &&(
                <Text>
                    {text}  
                </Text>
            )
        } */}
       
    </View>
  )
}

export default Rating