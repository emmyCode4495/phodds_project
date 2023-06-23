import { FlatList,
        ScrollView, 
        StyleSheet, 
        Text, 
        View,
        ImageBackground,
      TouchableOpacity,
      TextInput } from 'react-native'
import React from 'react'
import { TrendingData,specificationData } from '../../constants/data'
import colors from '../../constants/Colors'
import ItemDetailHeader from '../../components/ItemDetailHeader'
import ItemDetailsCard from '../../components/ItemDetailsCard'
import CardsDisplay from '../../components/CardsDisplay'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Call from 'react-native-vector-icons/Entypo'

export default function ItemDetails({navigation,route}) {

    const {id, trending}  = route.params

  return (
    <View style={{backgroundColor:colors.lightGrey2}}>
   
        <ItemDetailHeader title="Details" 
        type="arrowleft" 
        Color={colors.white}
        navigation={navigation}
        />
   

    <ScrollView>

        <View>
          <ImageBackground
          source={{uri:TrendingData[id].images}}
          style={styles.ImageStyle}
          />
        </View>

          <View style={styles.itemMajorDetail}>
            <View style={styles.iconLocationView}>
            <Icon
            name="place"
            color={colors.lightGrey}
            size={15}
            />
            <Text style={styles.locationText}>{TrendingData[id].location}</Text>
          </View>

          <View>
              <Text style={styles.productText}>{TrendingData[id].productName}</Text>
          </View>

          <View style={{marginTop:3}}>
            <Text style={styles.descriptionText}>{TrendingData[id].description}</Text>
          </View>

          <View>
          <Text style={styles.amountText}>{TrendingData[id].amount}</Text>
          </View>

          <View style={styles.requestCallView}>

            <View style={styles.requestCall}>
            <TouchableOpacity>
              <Text style={styles.requestText}>Request a call</Text>
            </TouchableOpacity>
            </View>

            <View style={styles.call}>
           <TouchableOpacity>
            <View style={styles.innerStyle}>
            <Call
                name='phone'
                color={colors.white}
                size={24}
              />
              <Text style={styles.callText}>call</Text>
           </View>
            </TouchableOpacity>
            </View>  
          </View>

          </View>

          <View style={styles.itemMajorDetail}>

          <View style={styles.topView}>
              <Text style={{...styles.chatText}}>Start phodds chat with seller</Text>
          </View>

          <View style={styles.optionChat}>

            <View style={styles.optionChatView}>
              <TouchableOpacity>
                <Text style={{color:colors.main,fontFamily:'Roboto-Regular'}}>Make an offer</Text>
              </TouchableOpacity>   
            </View>
           
            <View style={styles.optionChatView}>
              <TouchableOpacity>
                <Text style={{color:colors.main,fontFamily:'Roboto-Regular'}}>still available</Text>
              </TouchableOpacity>   
            </View>

            <View style={styles.optionChatView}>
              <TouchableOpacity>
                <Text style={{color:colors.main,fontFamily:'Roboto-Regular'}}>last price</Text>
              </TouchableOpacity>   
            </View>

            <View style={styles.optionChatView}>
              <TouchableOpacity>
                <Text style={{color:colors.main,fontFamily:'Roboto-Regular'}}>Still in stock?</Text>
              </TouchableOpacity>   
            </View>
          </View>

          <View style={styles.textInputView}>
          <TextInput 
                  placeholder='type message here'
                  color={colors.black}
                  placeholderTextColor={colors.darkGrey}
                  style={{marginLeft:10}}
                  autoFocus={false}
                  />  
          </View>

          <TouchableOpacity>
          <View style={styles.startChatView}>
            
              <Text style={styles.startChatStyle}>Start Chat</Text>
            
          </View>
          </TouchableOpacity>

          </View>

          <View style={styles.itemMajorDetail1}>

          <View style={styles.specsView}>

            <View>
            <Text style={{color:colors.main, marginRight:40}}>{TrendingData[id].usedState}</Text>
            <Text style={{color:colors.black}}>condition</Text>
            </View>

            <View>
            <Text style={{color:colors.main}}>{TrendingData[id].specificationData.Brand}</Text>
            <Text style={{color:colors.black}}>brand</Text>
            </View>
          </View>

          <View style={styles.specsView}>
            <View>
            <Text style={{color:colors.main}}>{TrendingData[id].specificationData.Model}</Text>
            <Text style={{color:colors.black}}>Model</Text>
            </View>

            <View>
            <Text style={{color:colors.main}}>{TrendingData[id].specificationData.secondCondition}</Text>
            <Text style={{color:colors.black}}>Second Condition</Text>
            </View>
          </View>

          <View style={styles.specsView}>
            <View>
            <Text style={{color:colors.main}}>{TrendingData[id].specificationData.Sim}</Text>
            <Text style={{color:colors.black}}>Sim</Text>
            </View>

            <View>
            <Text style={{color:colors.main}}>{TrendingData[id].specificationData.displayType}</Text>
            <Text style={{color:colors.black}}>Display Type</Text>
            </View>
        </View>

        

        <View style={styles.specsView}>

            <View>
            <Text style={{color:colors.main}}>{TrendingData[id].specificationData.internalStorage}</Text>
            <Text style={{color:colors.black}}>internal Storage</Text>
            </View>
      
            <View>
            <Text style={{color:colors.main}}>{TrendingData[id].specificationData.CardSlot}</Text>
            <Text style={{color:colors.black}}>Cards</Text>
            </View>

        </View>

        <View style={styles.specsView}>
            <View>
            <Text style={{color:colors.main}}>{TrendingData[id].specificationData.screenSize}</Text>
            <Text style={{color:colors.black}}>screenSize</Text>
            </View>
                
            <View>
            <Text style={{color:colors.main}}>{TrendingData[id].specificationData.resolution}</Text>
            <Text style={{color:colors.black}}>Resolution</Text>
            </View>
        </View>

          </View>
    </ScrollView>

    </View> 
  )
}

const styles = StyleSheet.create({

  ImageStyle:{
    height:200
  },
  itemMajorDetail:{
    borderWidth:1,
    borderColor:colors.white,
    borderBottomEndRadius:20,
    borderTopStartRadius:20,
    backgroundColor:colors.white,
    maxWidth:"100%",
    height:200,
    marginTop:5,
    marginLeft:10,
    marginRight:10,
    padding:10
  },

  itemMajorDetail1:{
    borderWidth:1,
    borderColor:colors.white,
    borderBottomEndRadius:20,
    borderTopStartRadius:20,
    backgroundColor:colors.white,
    maxWidth:"100%",
    height:300,
    marginTop:5,
    marginLeft:10,
    marginRight:10,
    padding:10
  },

  iconLocationView:{
    flexDirection:'row',
    marginLeft: 10,
    marginTop:2,
    marginBottom:5
  },
  locationText:{
    color:colors.lightDark,
    fontFamily:"Poppins-Bold",
    fontWeight:800
  },
  productText:{
    color:colors.black,
    marginLeft:10,
    fontFamily:'Roboto-Bold',
    fontSize:18,
    textTransform:'uppercase'
  },
  descriptionText:{
    color:colors.black,
    marginLeft:10,
    fontFamily:'Poppins-Regular',
    fontSize:14,
  },
  amountText:{
    color:colors.main,
    marginLeft:10,
    fontFamily:'Poppins-Bold',
    fontSize:14,
  },
  requestCallView:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems:'center',
    marginTop:10
  },
  requestCall:{
    borderWidth:1,
    padding:5,
    borderRadius:30,
    maxWidth:"60%",
    paddingHorizontal:20,
    borderColor:colors.main
  },
  call:{
    borderWidth:1,
    padding:5,
    borderRadius:30,
    maxWidth:"60%",
    paddingHorizontal:45,
    borderColor:colors.main,
    backgroundColor:colors.main
  },
  innerStyle:{
    flexDirection:'row'
  },
  requestText:{
    color:colors.main,
    fontSize:16,
    fontFamily:"Poppins-Bold"
  },
  callText:{
    color:colors.main,
    fontSize:16,
    fontFamily:"Poppins-Bold",
    color:colors.white
  },
  chatText:{
    color:colors.black,
    marginLeft:10,
    fontFamily:'Roboto-Regular',
    fontSize:18,
  },
  optionChat:{
    flexDirection:'row',
    marginRight:10,
  },
  optionChatView:{
    borderWidth:1,
    borderRadius:20,
    paddingHorizontal:8,
    paddingVertical:5,
    borderColor:colors.main,
    marginRight:10
  },
  topView:{
    marginBottom:10
  },
  textInputView:{
    borderWidth:1,
    borderRadius:15,
    marginTop:10,
    marginBottom:10,
    borderColor:colors.main
  },
  startChatView:{
    borderWidth:1,
    height:50,
    maxwidth:"100%",
    justifyContent:'center',
    alignItems:'center',
    borderRadius:30,
    borderColor:colors.main,
    backgroundColor:colors.main
  },
  startChatStyle:{
    color:colors.white,
    textTransform:'uppercase',
    fontFamily:'Poppins-Bold',
    fontSize:18
  },

  specsView:{
    flexDirection:'row',
    marginRight:10,
    marginLeft:10,
    justifyContent:'space-around'}
})