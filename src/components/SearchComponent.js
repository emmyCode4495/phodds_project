import React from "react";
import { Dimensions, Modal } from "react-native";
import { View,Text, TextInput, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign'

import colors from "../constants/Colors";

var { height, width } = Dimensions.get('window');

const SearchComponent = ({navigation})=>{

    
    return(
    <View style={{flexDirection:"row"}}>
    <View style={styles.textInputView}>
       <TextInput
       placeholder="Search"
       placeholderTextColor={colors.lightGrey}
       style={styles.input}
       />
    </View>
    <View>
      <Icon 
        name="arrowleft"
        color={colors.main}
        size={30}
        style={styles.arrowIconStyle}
        onPress={()=>{navigation.goBack()}}
        />
      </View>
      {/* <Modal
      animationType="false"
      transparent={false}
      visible={modalVisible}
      >
        <View style={{alignItems:"center"}}>
            <Text>Opened Modal</Text>
        </View>
      </Modal> */}
    </View>
    )
}

export default SearchComponent

const styles = StyleSheet.create({
    input:{
        fontSize:18,
        width:width,
        // flex: 1,
        // paddingTop: 10,
        // paddingRight: 10,
        // paddingBottom: 10,
        // paddingLeft: 0,
    },
    textInputView:{
        borderWidth:1,
        borderColor:colors.darkGrey,
        // width:width,
        marginBottom:10,
        marginTop:10,
        borderRadius:30,
        paddingTop:10,
        paddingLeft:10,
        paddingRight:10,
        marginLeft:10,
        marginRight:10
    },
 
})