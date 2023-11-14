import { View, 
    Text,
    StyleSheet,TouchableOpacity,Image, ScrollView } from 'react-native'
import React from 'react'

import colors from '../constants/Colors'
import { useNavigation } from '@react-navigation/native';
import { widthPixel,heightPixel,pixelSizeHorizontal,pixelSizeVertical, fontPixel } from '../constants/dimensions';
import { FlatList } from 'react-native-gesture-handler';
import { vendorData } from '../constants/data';
import VendorCard from './VendorCard';
import { Screen } from 'react-native-screens';


const TopVendorsCards = () => {
  
const navigation = useNavigation();
return ( 
<View style={{...styles.mainView,flexDirection:'row'}}>    
<View style={{...styles.container}}>
  <FlatList
  showsHorizontalScrollIndicator={false}
  showsVerticalScrollIndicator={false}
  horizontal={true}
  data={vendorData}
  keyExtractor={(item,index)=>index.toString()}
  renderItem={({item,index})=>(
//   <View>  
//     <View style={styles.card2}>
//     <TouchableOpacity 
//      onPress={()=>{navigation.navigate("vendorDetail",{id:index,product:item.productName})}}
//     >
//        <Image
//        source={require('../../assets/images/phodds.png')}
//        style={styles.imageStyle}
//        />
//        <Text style={styles.categoryText}>J-Tech</Text>
//     </TouchableOpacity> 
//   </View>

//   <View style={styles.card2}>
//   <TouchableOpacity
//     onPress={()=>navigation.navigate("vendorDetail")}
//   >
//        <Image
//        source={require('../../assets/images/phodds.png')}
//        style={styles.imageStyle}
//        />
//        <Text style={{...styles.categoryText,paddingLeft:10,fontSize:fontPixel(15)}}>Ganyi's</Text>
//     </TouchableOpacity>
//   </View>

//   <View style={styles.card2}>
//   <TouchableOpacity
//   onPress={()=>navigation.navigate("vendorDetail")}
//   >
//        <Image
//        source={require('../../assets/images/phodds.png')}
//        style={styles.imageStyle}
//        />
//        <Text style={{...styles.categoryText,paddingLeft:5}}>MarvTech</Text>
//     </TouchableOpacity>
//   </View>

// <View style={{...styles.container}}>
  
//   <View style={styles.card2}>
//   <TouchableOpacity onPress={()=>navigation.navigate("vendorDetail")}>
//        <Image
//        source={require('../../assets/images/phodds.png')}
//        style={styles.imageStyle}
//        />
//        <Text style={{...styles.categoryText,paddingLeft:2,fontSize:fontPixel(15)}}>L-Tech</Text>
//     </TouchableOpacity>
//   </View>

//   <View style={styles.card2}>
//   <TouchableOpacity
//     onPress={()=>navigation.navigate("vendorDetail")}
//   >
//        <Image
//        source={require('../../assets/images/phodds.png')}
//        style={styles.imageStyle}
//        />
//        <Text style={{...styles.categoryText,paddingLeft:15,fontSize:fontPixel(15)}}>Avix</Text>
//     </TouchableOpacity>
//   </View>

//   <View style={styles.card2}>
//   <TouchableOpacity
//     onPress={()=>navigation.navigate("vendorDetail")}
//   >
//        <Image
//        source={require('../../assets/images/phodds.png')}
//        style={styles.imageStyle}
//        />
//        <Text style={{...styles.categoryText,fontSize:fontPixel(15)}}>Op-tech</Text>
//     </TouchableOpacity>
//   </View>
  
// </View> 
// </View>
<VendorCard
  vendorName={item.vendorName}
  onPressCard={()=>{navigation.navigate("vendorDetail",{id:index,vendor:item.vendorName})}}
  //onPressCard={()=>{navigation.navigate("vendorDetail",{screen:'HomeScreen',params:{id:id}})}}
/>
  )}
  />
  {/* <View style={styles.card2}>
    <TouchableOpacity 
     onPress={()=>{navigation.navigate("vendorDetail",{id:index,product:item.productName})}}
    >
       <Image
       source={require('../../assets/images/phodds.png')}
       style={styles.imageStyle}
       />
       <Text style={styles.categoryText}>J-Tech</Text>
    </TouchableOpacity> 
  </View>

  <View style={styles.card2}>
  <TouchableOpacity
    onPress={()=>navigation.navigate("vendorDetail")}
  >
       <Image
       source={require('../../assets/images/phodds.png')}
       style={styles.imageStyle}
       />
       <Text style={{...styles.categoryText,paddingLeft:10,fontSize:fontPixel(15)}}>Ganyi's</Text>
    </TouchableOpacity>
  </View>

  <View style={styles.card2}>
  <TouchableOpacity
  onPress={()=>navigation.navigate("vendorDetail")}
  >
       <Image
       source={require('../../assets/images/phodds.png')}
       style={styles.imageStyle}
       />
       <Text style={{...styles.categoryText,paddingLeft:5}}>MarvTech</Text>
    </TouchableOpacity>
  </View>
</View>
<View style={{...styles.container}}>
  
  <View style={styles.card2}>
  <TouchableOpacity onPress={()=>navigation.navigate("vendorDetail")}>
       <Image
       source={require('../../assets/images/phodds.png')}
       style={styles.imageStyle}
       />
       <Text style={{...styles.categoryText,paddingLeft:2,fontSize:fontPixel(15)}}>L-Tech</Text>
    </TouchableOpacity>
  </View>

  <View style={styles.card2}>
  <TouchableOpacity
    onPress={()=>navigation.navigate("vendorDetail")}
  >
       <Image
       source={require('../../assets/images/phodds.png')}
       style={styles.imageStyle}
       />
       <Text style={{...styles.categoryText,paddingLeft:15,fontSize:fontPixel(15)}}>Avix</Text>
    </TouchableOpacity>
  </View>

  <View style={styles.card2}>
  <TouchableOpacity
    onPress={()=>navigation.navigate("vendorDetail")}
  >
       <Image
       source={require('../../assets/images/phodds.png')}
       style={styles.imageStyle}
       />
       <Text style={{...styles.categoryText,fontSize:fontPixel(15)}}>Op-tech</Text>
    </TouchableOpacity>
  </View>
  
</View>    */}
{/* <ScrollView
  horizontal={true}
  showsHorizontalScrollIndicator={false}
>                         
</ScrollView> */}

</View>
</View>
)
}

export default TopVendorsCards

const styles = StyleSheet.create({
mainView:{
  flex:1,
  
},
container:{
    flexDirection:'row',
    justifyContent:"center",
    alignItems:'center',
    marginRight:5,
    maeginLeft:30,
    marginTop:5,
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