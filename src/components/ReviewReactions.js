import React from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "react-native";
import colors from "../constants/Colors";
import Icon from 'react-native-vector-icons/AntDesign'
const ReviewReactions = ()=>{

    return (
        <View style={styles.mainView}>
            <View>
            <Text style={styles.textEditView}>Like</Text>
            </View>
            <View>
                <Text style={styles.textEditView}>
                    Reply
                </Text>
            </View>
            <View style={{flexDirection:"row"}}>
                <Icon
                name="like2"
                style={styles.iconStyle}
                size={15}
                />
                <Text style={{...styles.textEditView, marginLeft:2}}>
                    1
                </Text>
            </View>
            <View>
                <Text style={styles.textEditView}>
                    19/02/24
                </Text>
            </View>
        </View>
        
    )
}

export default ReviewReactions

const styles = StyleSheet.create({
 mainView:{
    backgroundColor:colors.white, 
    flexDirection:"row", 
    justifyContent:"space-between",
    marginTop:10,
    marginLeft:10,
    marginRight:15
 },
 textEditView:{
    color:colors.darkGrey,
    fontFamily:"Roboto-Bold",
    fontSize:15
 },
 iconStyle:{
    color: colors.main,

 }
})