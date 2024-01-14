import React from "react";
import { SafeAreaView, View } from "react-native";
import SearchComponent from "../../components/SearchComponent";

import colors from "../../constants/Colors";


export default function SearchScreen(){
    return(
        <SafeAreaView style={{flex:1,backgroundColor:colors.white}}>
            <SearchComponent/>
        </SafeAreaView>
        
    )
}