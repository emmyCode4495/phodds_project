import React from "react";
import {View, Text, SafeAreaView} from 'react-native'
import VendorHeader from "../../components/vendorHeader";
import colors from "../../constants/Colors";
import VendorHomeComponent from "../../components/vendorHomeComponent";

const VendorDetailScreen= ({navigation,route}) =>{
    const {id, trending}  = route.params
    return(
        <SafeAreaView style={{flex:1, backgroundColor:colors.white}}>
            <VendorHeader id={id}/>
            <VendorHomeComponent/>
        </SafeAreaView>
    )
}

export default VendorDetailScreen;