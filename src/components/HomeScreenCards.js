import { View, 
        Text,
        StyleSheet,TouchableOpacity,Image } from 'react-native'
import React from 'react'

import colors from '../constants/Colors'
import { useNavigation } from '@react-navigation/native';
import { widthPixel,heightPixel,pixelSizeHorizontal,pixelSizeVertical, fontPixel } from '../constants/dimensions';


const HomeScreenCards = () => {
  const navigation = useNavigation();
  return (
<View style={styles.mainView}>    
    <View style={{...styles.container}}>
      
      <View style={styles.card2}>
        <TouchableOpacity>
           <Image
           source={require('../../assets/images/hotsale.jpg')}
           style={styles.imageStyle}
           />
           <Text style={styles.categoryText}>Trending</Text>
        </TouchableOpacity> 
      </View>

      <View style={styles.card2}>
      <TouchableOpacity
        onPress={()=>navigation.navigate("ios")}
      >
           <Image
           source={require('../../assets/images/iphone.png')}
           style={styles.imageStyle}
           />
           <Text style={{...styles.categoryText,paddingLeft:20,fontSize:fontPixel(15)}}>ios</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card2}>
      <TouchableOpacity
      onPress={()=>navigation.navigate("laptops")}
      >
           <Image
           source={require('../../assets/images/laptop.png')}
           style={styles.imageStyle}
           />
           <Text style={{...styles.categoryText,paddingLeft:10}}>Laptops</Text>
        </TouchableOpacity>
      </View>
      
    </View>
    <View style={{...styles.container}}>
      
      <View style={styles.card2}>
      <TouchableOpacity onPress={()=>navigation.navigate("android")}>
           <Image
           source={require('../../assets/images/androidlogo.png')}
           style={styles.imageStyle}
           />
           <Text style={{...styles.categoryText,fontSize:fontPixel(15)}}>Android</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card2}>
      <TouchableOpacity
        onPress={()=>navigation.navigate("tablets")}
      >
           <Image
           source={require('../../assets/images/tablet.png')}
           style={styles.imageStyle}
           />
           <Text style={{...styles.categoryText,fontSize:fontPixel(15)}}>Tablets</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card2}>
      <TouchableOpacity
        onPress={()=>navigation.navigate("accessories")}
      >
           <Image
           source={require('../../assets/images/phontrepas.png')}
           style={styles.imageStyle}
           />
           <Text style={{...styles.categoryText,fontSize:fontPixel(15)}}>accesories</Text>
        </TouchableOpacity>
      </View>
      
    </View>                            
    <View style={{...styles.container}}>
      
      <View style={styles.card2}>
      <TouchableOpacity
      onPress={()=>navigation.navigate("powerbank")}
      >
           <Image
           source={require('../../assets/images/powerbank.png')}
           style={styles.imageStyle}
           />
            <Text style={{...styles.categoryText,fontSize:fontPixel(12)}}>Powerbanks</Text>
        </TouchableOpacity>
      </View>

  
      <View style={styles.card2}>
      <TouchableOpacity
        onPress={()=>navigation.navigate("airpods")}
      >
           <Image
           source={require('../../assets/images/rairpods.png')}
           style={styles.imageStyle}
           />
            <Text style={{...styles.categoryText,fontSize:fontPixel(14)}}>Airpods</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card2}>
      <TouchableOpacity
        onPress={()=>navigation.navigate("watch")}
      >
           <Image
           source={require('../../assets/images/smart.png')}
           style={styles.imageStyle}
           />
           <Text style={{...styles.categoryText,fontSize:fontPixel(12),justifyContent:"center"}}>Smart Watches</Text>
        </TouchableOpacity>
      </View>
      
    </View>
</View>
    
  )
  }

export default HomeScreenCards

const styles = StyleSheet.create({
  mainView:{
      flex:1,
      width:widthPixel(200)
  },
    container:{
        flexDirection:'row',
        justifyContent:"center",
        alignItems:'center',
        marginRight:5,
        maeginLeft:30,
        marginTop:10,
        width:widthPixel(400)
    },
    card2:{
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:pixelSizeVertical(20),
        paddingVertical:pixelSizeVertical(20),
        marginTop:10,
        marginLeft:20,
        borderRadius:30,
        backgroundColor:colors.lightGrey2
    },
    viewText:{
        color:colors.black
    },
    imageStyle:{
        height:heightPixel(60),
        width:widthPixel(60),
        borderRadius:15,
    },
    categoryText:{
        color:colors.black,
        alignItems:'center',
        fontFamily:'Poppins-Regular',
        fontWeight:800,
        justifyContent:'center',
        fontSize:fontPixel(16)
    }
})