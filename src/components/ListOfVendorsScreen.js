import React from "react";
import { StyleSheet, View, Text, FlatList, TouchableOpacity, ScrollView } from "react-native";
import colors from "../constants/Colors";
import Header from "./header";
import { vendorData } from "../constants/data";
import { Image } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign'

const ListOfVendorsScreen = ({navigation, route}) =>{
    return (
        <View style={{flex:1}}>
        <View style={{backgroundColor:colors.main, flexDirection:'row', height:60, paddingVertical:10}}>
        <TouchableOpacity onPress={()=> navigation.goBack()}>
            <Icon
            name="arrowleft"
            color={colors.white}
            style={{justifyContent:'flex-end',alignItems:'flex-end', marginLeft:20,height:25, marginRight:10}}
            size={30}
            />
        </TouchableOpacity>
            <View>
            <Text style={{color:colors.white, fontSize:26, fontFamily:"Poppins-Bold"}}>
                Vendors
            </Text>
            </View>
            </View>
          
            <ScrollView>
           <FlatList
            data={vendorData}
            keyExtractor={(item) => item.id}
            renderItem={({item})=>
            <TouchableOpacity 
            onPress={()=>{navigation.navigate("vendorDetail")}}
            >
            <View style={styles.mainView}>
            <View style={{flexDirection:"row"}}>
                <Image
                source={{uri:item.vendorImage}}
                style={styles.imageStyle}
                />
                <Text style={styles.vendorText}>{item.vendorName}</Text>
            </View>
            </View>
            </TouchableOpacity>
        }
           />
           </ScrollView>
          
        </View>
    )
}

export default ListOfVendorsScreen

const styles = StyleSheet.create({
    mainView:{
        backgroundColor:colors.lightGrey, 
        marginBottom:10,
        marginRight:10,
        marginLeft:10,
        borderRadius: 30,
        padding: 10
    },
    vendorText:{
        color:colors.darkGrey,
        fontSize: 30,
        fontFamily:"Roboto-Bold",
        fontWeight:"bold"
    },
    imageStyle:{
        width:50,
        height:50,
        borderRadius:50,
        marginRight:10
    }
})