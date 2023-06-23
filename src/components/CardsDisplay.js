import { StyleSheet, 
        Text, 
        View,
    TouchableOpacity,Image } from 'react-native'
import React from 'react'

import Icon from 'react-native-vector-icons/MaterialIcons'
import Icons from 'react-native-vector-icons/FontAwesome';

import Rating from './Rating';
import colors from '../constants/Colors'
import { TrendingData } from '../constants/data';
import { useNavigation } from '@react-navigation/native';


export default function CardsDisplay({
    productName,
    rating,
    brandNewState,
    usedState,
    location,
    image,
    amount,
    description,
    stockAvailable,
    onPressCard,
    value,
    navigation,
    route
    
}) {
 
  return (
<View style={{backgroundColor:colors.lightGrey2}}>
    <TouchableOpacity
    
    onPress={onPressCard}>                                                                                      
        <View style={styles.mainView}>
            <View style={styles.container}>
                <Image
                style={styles.imageStyle}
                source={{uri:image}}
                />
            </View>

            <View style={{...styles.UtilitiesView}}>

                <View style={styles.productNameView}>
                    <Text style={{fontSize:12,textTransform:'uppercase',
                                    color:colors.main}}>Device: </Text>
                    <Text style={{...styles.productName,textTransform:'uppercase'}}>{productName}</Text>
                </View>

                <View style={styles.priceView}>
                <Text style={{fontSize:12,textTransform:'uppercase',
                                    color:colors.main}}>price: </Text>
                    <Text style={{...styles.amount,textTransform:'uppercase'}}>{amount}</Text>
                </View>

                <View style={styles.descriptionView}>
                    <Text style={styles.description}>{description}</Text>
                </View>

                <View style={styles.placeViewStyle}>
                    <Icon
                        name="place"
                        color={colors.main} 
                        style={styles.iconStyle}
                        size={24}            
                    />
                    <Text style={styles.locationText}>{location}</Text>
                </View>

                <View style={styles.stateStyles}>
                <Text style={styles.usedStateStyle}>{usedState}</Text>
                </View>
                
                {/* <View style={styles.stateStyles}>
                <Text style={styles.brandNewStateStyle}>{value == "brandnew" ? brandNewState: "brandnew"}</Text>
                </View> */}
                <View style={styles.RatingView}>
                <Rating value={TrendingData.rating}/>
                    <Text style={styles.StockText}>Qty: {stockAvailable}</Text>
                </View>

            </View>
        </View>
    </TouchableOpacity>
</View>
  )
}

const styles = StyleSheet.create({

  mainView:{
    marginTop:20,
    marginLeft:20,
    marginRight:15,
    flexDirection:'row',
    borderWidth:1,
    borderColor:colors.lightGrey,
    padding:0,
    borderRadius:20,
    backgroundColor:colors.white
  },
  UtilitiesView:{
    marginTop:5,
    marginLeft:5,
    marginRight:20,
  },
  productName:{
    color:colors.black,
    fontSize:12,
    fontFamily:"Poppins-Regular",
    fontWeight:800

  },
  productNameView:{
    flexDirection:'row'
  }, 
  priceView:{
    marginTop:5,
    flexDirection:'row'
  },
  amount:{
    color:colors.main,
    fontSize:12,
    fontFamily:"Poppins-Regular",
    fontWeight:800
  },
  
  imageStyle:{
    width:200,
    height:200,
    borderBottomLeftRadius:20,
    borderTopLeftRadius:20  
  },
  container:{
    justifyContent:"flex-start",
    alignItems:"flex-start",
  },
  
  description:{
    color:colors.black,
    fontSize:10,
    fontFamily:'Roboto-bold',
    alignItems:'center',
    fontWeight:800,
    textTransform:'capitalize'
  },
  descriptionView:{
    justifyContent:'center',
    alignItems:'center',
    marginTop:5,
    padding:2,
    marginRight:20
  },
  placeViewStyle:{
    flexDirection:'row',
    marginTop:10,
    alignItems:'center',
  },
  iconStyle:{
    color:colors.lightGrey2,
  },
  locationText:{
    color:colors.darkGrey,
    fontSize:16,
    fontFamily:'Roboto-Bold',
    textTransform:'capitalize'
  },

  stateStyles:{
    borderWidth:1,
    maxWidth:"45%",
    borderRadius:10,
    borderColor:colors.lightGrey,
    alignItems:'center',
    marginTop:8,
    backgroundColor:colors.lightGrey2,
    justifyContent:"flex-end"
    },
    // brandNewStateStyle:{
    //     color:colors.darkGrey,
    //     fontFamily:'Roboto-Bold',
    //     fontSize:18
    // },
    usedStateStyle:{
        color:colors.darkGrey,
        fontFamily:'Roboto-Bold',
        fontSize:18,
        fontWeight:800
    },
    RatingView:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:"center",
        marginTop:15,
        marginRight:20,
        
    },
    ratingText:{
        color:colors.main
    },
    StockText:{
        color:colors.main,
        marginRight:20
    },
    
})