import { View,
          Text, 
          StyleSheet, 
          TouchableOpacity,
          Dimensions,
          ScrollView, FlatList,Image
         } from 'react-native'
import React,{useState} from 'react'

// Constants used in the project
import colors from '../../constants/Colors';
import { TrendingData } from '../../constants/data';

import SnackDrawerBar from '../../components/SnackDrawerBar';
import HomeScreenCards from '../../components/HomeScreenCards';
import CardsDisplay from '../../components/CardsDisplay';
import Rating from '../../components/Rating';


var { height, width } = Dimensions.get('window');

export default function HomeScreen({navigation}){
const [switchMode, setSwitchMode] = useState(true)

  return (
    <View style={styles.container}>  
      <SnackDrawerBar navigation={navigation}/>

      <View style={styles.mainView}>

      <View style={{...styles.brandNewView,
        backgroundColor:switchMode?colors.main:colors.lightGrey2,
        borderColor:switchMode?colors.white:colors.main}}>
        <TouchableOpacity 
        onFocus={()=>{navigation.navigate("brandnew")}}
        onPress={()=>{
          setSwitchMode(true)
          navigation.navigate('brandnew')
        }}>
          <Text style={{...styles.brandNewText,color:switchMode?colors.white:colors.main}}>
          Brand new Gadgets
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{...styles.fairlyUsedView,
        backgroundColor:switchMode?colors.lightGrey2:colors.main,
        borderColor:switchMode?colors.main:colors.white}}>
        <TouchableOpacity onPress={()=>{
          setSwitchMode(false)
          navigation.navigate("fairlyUsed")
        }}>
          <Text style={{...styles.fairlyUsedText,color:switchMode?colors.main:colors.white}}>
          Fairly Used Gadgets
          </Text>
        </TouchableOpacity>
      </View>
      
      </View>
      <ScrollView showsVerticalScrr ollIndicator={false}>
      <View style={styles.categoryViewStyle}>
        <Text style={styles.categoryStyle}>Categories</Text>
      </View>
      <HomeScreenCards/>
      <View style={styles.categoryViewStyle}>
        <Text style={styles.categoryStyle}>Trending</Text>
      </View>

      <View>
        <FlatList
        horizontal={false} 
          data={TrendingData}
          keyExtractor={(item,index)=>index.toString()}
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
        
      </View>
      </ScrollView>
    </View>
  )
}
 

const styles = StyleSheet.create({
  container:{
    flex:1, 
  },
  brandNewText:{
    color:colors.main,
    fontFamily:"Poppins-bold"
  },
  fairlyUsedText:{
    color:colors.main,
    fontFamily:"Poppins-bold"
  },
  mainView:{
    flexDirection:'row',
    justifyContent:"center",
    alignItems:"center",
    marginTop:10
  },
  brandNewView:{
    borderWidth:1,
    borderRadius:30,
    padding:10,
    width:width,
    maxWidth:"45%",
    justifyContent:"center",
    alignItems:"center",
    marginRight:2,
    marginLeft:15,
  },
  fairlyUsedView:{
    borderWidth:1,
    borderRadius:30,
    padding:10,
    maxWidth:"45%",
    justifyContent:"center",
    alignItems:"center",
    marginRight:15,
    width:width
  },
  categoryStyle:{
    color:colors.white,
    fontSize:25,
    fontFamily:"Poppins-Bold"
  },
  categoryViewStyle:{
    backgroundColor:colors.main,
    paddingHorizontal:12,
    paddingVertical:12,
    marginLeft:12,
    marginRight:12,
    marginTop:10,
    maxWidth:"100%",
    borderRadius:30
  }
  
})