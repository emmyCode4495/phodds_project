import { StyleSheet, Text, View,Dimensions, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import colors from '../constants/Colors'


import Icon from 'react-native-vector-icons/FontAwesome'
import { TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { Modal } from 'react-native'

var { height, width } = Dimensions.get('window');

const SnackDrawerBar = ({navigation,usestate})=> {
    const [modalVisible, setModalVisible] = useState(false)

  return (
    
    <View style={styles.container}>
       
       <View style={styles.iconViewStyle}>
            <TouchableOpacity onPress={()=>navigation.openDrawer()}>
                <Icon 
                name="bars"
                size={30}
                color={colors.white}/>
            </TouchableOpacity>
        </View>

    <View style={styles.textInputView}>
     
        <Icon 
        name="search"
        size={25}
        style={styles.iconStyle}
        />
    <TouchableWithoutFeedback
    onPress={()=>{
        setModalVisible(true)
    }}
    >
        <TextInput
            placeholder='what are you buying?'
            placeholderTextColor={colors.white}
            style={styles.input}
            onFocus={()=>navigation.navigate("search")}
        />
    </TouchableWithoutFeedback>

    <Modal
    animationType="false"
    transparent={false}
    visible={modalVisible}
    >
        <View style={styles.modalView}>
            <TouchableWithoutFeedback
                onPress={()=>{setModalVisible(false)}}
            >
            <Text>This is the modal</Text>
            </TouchableWithoutFeedback>
        </View>
    </Modal>
    </View>
        
    
    </View>
  )
}

export default SnackDrawerBar


const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        backgroundColor:colors.main,
        height:80,
      
    },
    iconViewStyle:{
        marginLeft:15,
        marginRight:15,
        justifyContent:'center',
        alignItems:'center'
    },
    headerTextStyle:{
        fontSize:30,
        color:colors.white,
        marginRight:100,
        alignItems:'center'
    },
    textInputView:{
        borderWidth:1,
        borderColor:colors.white,
        maxWidth:"84%",
        flex: 1,
        marginBottom:10,
        marginTop:10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:30,
        justifyContent:'center' 
    },
    input:{
        fontSize:18,
        width:width,
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
    },
    searchIcon:{
        padding: 10,
        marginRight:10
    },
    iconStyle:{
        marginRight:10,
        marginLeft:10,
        color:colors.white
    },
    modalView:{
        flex:1
    }
 
})