import React from "react";
import {View, Text, SafeAreaView} from 'react-native'
import VendorHeader from "../../components/vendorHeader";
import colors from "../../constants/Colors";
import VendorHomeComponent from "../../components/vendorHomeComponent";

const VendorDetailScreen= () =>{
    return(
        <SafeAreaView style={{flex:1, backgroundColor:colors.white}}>
            <VendorHeader/>
            <VendorHomeComponent/>
        </SafeAreaView>
    )
}

export default VendorDetailScreen;