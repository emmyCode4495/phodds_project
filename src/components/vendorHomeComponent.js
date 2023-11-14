import React from "react";

import { FlatList,View,Text, StyleSheet } from "react-native";
import { TrendingData } from "../constants/data";
import CardsDisplay from "./CardsDisplay";

import colors from "../constants/Colors";
import { fontPixel,heightPixel, widthPixel,pixelSizeHorizontal,pixelSizeVertical } from '../constants/dimensions/'
import VendoreCategoryCard from "./vendorCatCard";
import { useNavigation } from "@react-navigation/native";

export default function VendorHomeComponent(){
    const navigation = useNavigation()
return(
    <FlatList
        horizontal={false} 
          data={TrendingData}
          keyExtractor={(item,index)=>index.toString()}
          ListHeaderComponent={() =>(
            <>          
              <View style={styles.categoryViewStyle}>
                <Text style={styles.categoryStyle}>Categories</Text>
              </View>
              <VendoreCategoryCard/>

                <View style={styles.categoryViewStyle}>
                  <Text style={styles.categoryStyle}>Top Sales</Text>
                 </View>
            </>
          )}
          renderItem={({item,index})=>(
            <View>
                 <CardsDisplay
                image={item.images}
                productName={item.productName}
                amount={item.amount}
                navigation={navigation}
                description={item.description}
                location={item.location}
                usedState={item.usedState}
                stockAvailable={item.stockAvailable}
                rating={item.rating}
                onPressCard={()=>{navigation.navigate("itemDetail",{id:index,product:item.productName})}}
                />
            </View>
            )}
        />  
        )    
}

const styles = StyleSheet.create({
    categoryStyle:{
        color:colors.white,
        fontSize:fontPixel(25),
        fontFamily:"Poppins-Bold"
      },
      categoryViewStyle:{
        backgroundColor:colors.main,
        paddingHorizontal:pixelSizeHorizontal(12),
        paddingVertical:pixelSizeVertical(12),
        marginLeft:12,
        marginRight:12,
        marginTop:10,
        maxWidth:"100%",
        borderRadius:30
      }
})