import { View, 
        Text,
        StyleSheet,TouchableOpacity,Image } from 'react-native'
import React from 'react'

import colors from '../constants/Colors'
import { useNavigation } from '@react-navigation/native';


const HomeScreenCards = () => {
  const navigation = useNavigation();
  return (
<View style={{flex:1,}}>    
    <View style={{...styles.container,marginRight:5}}>
      
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
           <Text style={{...styles.categoryText,paddingLeft:20,fontSize:18}}>ios</Text>
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
    <View style={{...styles.container,marginRight:5}}>
      
      <View style={styles.card2}>
      <TouchableOpacity onPress={()=>navigation.navigate("android")}>
           <Image
           source={require('../../assets/images/androidlogo.png')}
           style={styles.imageStyle}
           />
           <Text style={{...styles.categoryText,fontSize:18}}>Android</Text>
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
           <Text style={{...styles.categoryText,fontSize:18}}>Tablets</Text>
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
           <Text style={{...styles.categoryText,fontSize:18}}>accesories</Text>
        </TouchableOpacity>
      </View>
      
    </View>                            
    <View style={{...styles.container,marginRight:5}}>
      
      <View style={styles.card2}>
      <TouchableOpacity
      onPress={()=>navigation.navigate("powerbank")}
      >
           <Image
           source={require('../../assets/images/powerbank.png')}
           style={styles.imageStyle}
           />
            <Text style={{...styles.categoryText,fontSize:12}}>Powerbanks</Text>
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
            <Text style={{...styles.categoryText,fontSize:14}}>Airpods</Text>
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
           <Text style={{...styles.categoryText,fontSize:12,justifyContent:"center"}}>Smart Watches</Text>
        </TouchableOpacity>
      </View>
      
    </View>
</View>
    
  )
  }

export default HomeScreenCards

const styles = StyleSheet.create({
    container:{
       
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems:'center',
        marginLeft:12,
        marginRight:12,
        marginTop:10,
    },
    card1:{
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:50,
        paddingVertical:50,
        borderRadius:30,
        maxHeight:"60%",
        maxWidth:"50%",
        backgroundColor:colors.white
    },
    card2:{
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:30,
        paddingVertical:25,
        borderRadius:30,
        backgroundColor:colors.lightGrey2
    },
    viewText:{
        color:colors.black
    },
    imageStyle:{
        height:60,
        width:60,
        borderRadius:15,
    },
    categoryText:{
        color:colors.black,
        alignItems:'center',
        fontFamily:'Poppins-Regular',
        fontWeight:800,
        justifyContent:'center'
    }
})