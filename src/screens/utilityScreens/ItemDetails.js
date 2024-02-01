import { FlatList,
        ScrollView, 
        StyleSheet, 
        Text, 
        View,
        ImageBackground,
      Image,
      TouchableOpacity,
      TextInput } from 'react-native'
import React from 'react'
import { TrendingData,FeedBackData, vendorData } from '../../constants/data'
import colors from '../../constants/Colors'
import ItemDetailHeader from '../../components/ItemDetailHeader'
import ItemDetailsCard from '../../components/ItemDetailsCard'
import CardsDisplay from '../../components/CardsDisplay'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Call from 'react-native-vector-icons/Entypo'

import { fontPixel,heightPixel, widthPixel,pixelSizeHorizontal,pixelSizeVertical } from '../../constants/dimensions'
import { color } from 'react-native-elements/dist/helpers'
import ReviewReactions from '../../components/ReviewReactions'


export default function ItemDetails({navigation,route}) {

    const {id, trending}  = route.params

  return (
    <View style={{backgroundColor:colors.lightGrey2, flex:1}}>
   
        <ItemDetailHeader title="Details" 
        type="arrowleft" 
        Color={colors.white}
        navigation={navigation}
        />
    <ScrollView 
   contentContainerStyle={{flexGrow:1}}
    >

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

          <View style={styles.productNameView}>
              <Text style={styles.productText}>{TrendingData[id].productName}</Text>
          </View>

          <View style={styles.descriptionTextView}>
            <Text style={styles.descriptionText}>{TrendingData[id].description}</Text>
          </View>

          <View style={styles.amountTextMainView}>
            <View style={styles.amountTextView}>
            <Text style={{...styles.amountText, color:colors.red}}>Price:</Text>
            </View>

            <View style={styles.amountTextView}>
            <Text style={styles.amountText}>{TrendingData[id].amount}</Text>
            </View>

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

          <View style={styles.chatView}>
              <Text style={{...styles.chatText}}>Start phodds chat with seller</Text>
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

          <View style={styles.optionChat}>
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


          <TouchableOpacity>
          <View style={styles.startChatView}>
              <Text style={styles.startChatStyle}>Start Chat</Text>
          </View>
          </TouchableOpacity>

          </View>

          <View style={styles.itemMajorDetail1}>
            <View style={{marginRight:15, marginLeft:15, justifyContent:"center"}}>

            <View style={styles.specsView}>
            <View style={{marginBottom:14, marginRight:15,marginLeft:9}}>
            <Text style={{color:colors.main, marginRight:20}}>{TrendingData[id].usedState}</Text>
            <Text style={{color:colors.black}}>condition</Text>
            </View>

            <View>
            <Text style={{color:colors.main}}>{TrendingData[id].specificationData.Brand}</Text>
            <Text style={{color:colors.black}}>brand</Text>
            </View>
            </View>
          
          <View style={styles.specsView1}>

            <View style={{marginBottom:14, marginRight:15,marginLeft:9}}>
            <Text style={{color:colors.main}}>{TrendingData[id].specificationData.Model}</Text>
            <View style={{alignItems:"center"}}>
            <Text style={{color:colors.black}}>Model</Text>
            </View>
            </View>

            <View>
            <Text style={{color:colors.main}}>{TrendingData[id].specificationData.Sim}</Text>
            <View style={{alignItems:"center"}}>
            <Text style={{color:colors.black}}>Sim</Text>
            </View>
            </View>

          </View>

          <View style={styles.specsView1}>
            <View style={{marginBottom:14, marginRight:15,marginLeft:9}}>
            <View style={{alignItems:"center"}}>
            <Text style={{color:colors.main}}>{TrendingData[id].specificationData.displayType}</Text>
            </View>
            <View style={{alignItems:"center"}}>
            <Text style={{color:colors.black}}>Display Type</Text>
            </View>
            </View>
            <View>
            <View style={{alignItems:"center"}}>
            <Text style={{color:colors.main}}>{TrendingData[id].specificationData.internalStorage}</Text>
            </View>
            <View style={{alignItems:"center"}}>
            <Text style={{color:colors.black}}>internal Storage</Text>
            </View>
            </View>
      </View>

      <View style={styles.specsView1}>
            <View style={{marginBottom:14, marginRight:15,marginLeft:12}}>
            <Text style={{color:colors.main}}>{TrendingData[id].specificationData.CardSlot}</Text>
            <Text style={{color:colors.black}}>Cards</Text>
            </View>
            <View>
            <Text style={{color:colors.main}}>{TrendingData[id].specificationData.screenSize}</Text>
            <View style={{alignItems:"center"}}>
            <Text style={{color:colors.black}}>screenSize</Text>
            </View>
            </View>
      </View>
 
      <View style={styles.specsView1}>
            <View style={{marginBottom:14, marginRight:15,marginLeft:5}}>
            <Text style={{color:colors.main}}>{TrendingData[id].specificationData.resolution}</Text>
            <View style={{alignItems:"center"}}>
            <Text style={{color:colors.black}}>Resolution</Text>
            </View>
            </View>

            <View>
            <View style={{alignItems:"center"}}>
            <Text style={{color:colors.main}}>{TrendingData[id].specificationData.color}</Text>
            </View>
            <Text style={{color:colors.black}}>Device Colour</Text>
            </View>
       </View>
          </View>
          </View>


          <View style={styles.offerViewDetail}>
            <TouchableOpacity>
            <View style={styles.offerView}>
            <View>
              <Icon 
              name="message"
              color={colors.main}
              size={30}
              style={styles.IconStyle}
              />
            </View>
            <View>
              <Text style={{color:colors.main,fontSize:18, marginTop:15}}>Make an offer</Text>
            </View>
            </View>
            </TouchableOpacity>
          </View>
          <View style={styles.itemMajorDetail}> 
          <View style={styles.companyNameView}>
          <View style={styles.companyImageView}>
            <Image
            source={{uri:vendorData[id].vendorImage}} 
            style={{width: 40, height:40, borderRadius:50}}
            />
          </View>
            <View style={styles.companyText}>
              <Text style={{color:colors.black, fontFamily:"Roboto-Regular", fontSize: 20}}>
                {vendorData[id].vendorName}
              </Text>
              <Text style={{color:colors.darkGrey, fontWeight:"bold"}}>
                {vendorData[id].lastActive}
              </Text>
            </View>
            </View>
            <View style={{marginLeft:20, marginTop:10, marginBottom:10}}>
              <Text style={{color:colors.main, fontFamily:"Poppins-Bold"}}>
                Seller Reviews
              </Text>
            </View>
            <View style={styles.ReviewSectionStyle}>
            <View style={styles.iconLocationView}>
            <Image
            source={{uri:FeedBackData[id].profilePics}}
            style={{width: 30, height:30, borderRadius:50}}
            />
            <Text style={{marginRight:10, color:colors.black, marginTop:8, marginLeft:5, fontWeight:"bold"}}>{FeedBackData[id].userName}</Text>
          </View>
          <View style={{marginLeft:15,marginBottom:10}}>
            <Text style={{color:colors.black,letterSpacing:0.5}}>
              {FeedBackData[id].feedback}
            </Text>
          </View>
          </View>
          <ReviewReactions/>
          </View>
    </ScrollView>

    </View> 
  )
}

const styles = StyleSheet.create({

  ImageStyle:{
    height:heightPixel(200)
  },
  productNameView:{
    justifyContent:'center',
    alignItems:'center',
    fontSize:fontPixel(24),
    marginBottom:5
  },
  descriptionTextView:{
    marginBottom:10
  },
  amountTextView:{

  },
  amountTextMainView:{
    flexDirection:'row'
  },
  itemMajorDetail:{
    borderWidth:1,
    borderColor:colors.white,
    borderBottomEndRadius:20,
    borderTopStartRadius:20,
    backgroundColor:colors.white,
    maxWidth:"100%",
    height:Platform.OS === 'ios'?heightPixel(285):heightPixel(270),
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
    height:Platform.OS === 'ios'?heightPixel(300):heightPixel(300),
    marginTop:10,
    marginLeft:12,
    marginRight:12,
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
    fontSize:fontPixel(18),
    textTransform:'uppercase'
  },
  descriptionText:{
    color:colors.black,
    marginLeft:10,
    fontFamily:'Poppins-Regular',
    fontSize:fontPixel(15),
    letterSpacing:0.5
  },
  amountText:{
    color:colors.main,
    marginLeft:10,
    fontFamily:'Poppins-Bold',
    fontSize:fontPixel(15),
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
    paddingHorizontal:pixelSizeHorizontal(20),
    borderColor:colors.main
  },
  call:{
    borderWidth:1,
    padding:5,
    borderRadius:30,
    maxWidth:"60%",
    paddingHorizontal:pixelSizeHorizontal(45),
    borderColor:colors.main,
    backgroundColor:colors.main
  },
  innerStyle:{
    flexDirection:'row'
  },
  requestText:{
    color:colors.main,
    fontSize:fontPixel(16),
    fontFamily:"Poppins-Bold"
  },
  callText:{
    color:colors.main,
    fontSize:fontPixel(20),
    fontFamily:"Poppins-Bold",
    color:colors.white
  },
  chatText:{
    color:colors.black,
    marginLeft:10,
    fontWeight:800,
    fontFamily:'Roboto-Regular',
    fontSize:fontPixel(18),
  },
  chatView:{
    justifyContent:'center',
    alignItems:'center',
    marginBottom:5,
    marginTop:3
  },
  optionChat:{
    flexDirection:'row',
    marginTop:5,
    width:widthPixel(110),
    marginLeft:Platform.OS === 'ios'?25:30,
    marginBottom:Platform.OS === 'ios'?10:10
  },
  optionChatView:{
    borderWidth:1,
    paddingHorizontal:3,
    paddingVertical:2,
    borderRadius:20,
    justifyContent:'center',
    alignItems:'center',
    borderColor:colors.main,
    marginRight:10,
    marginBottom:10,
    // marginLeft:3
  },
 
  textInputView:{
    borderWidth:1,
    borderRadius:15,
    paddingVertical:Platform.OS === 'ios'? pixelSizeVertical(20):pixelSizeVertical(3),
    marginTop:10,
    marginBottom:10,
    borderColor:colors.main
  },
  startChatView:{
    borderWidth:1,
    height:heightPixel(50),
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
    fontSize:fontPixel(18)
  },

  specsView:{
    flexDirection:'row',
    marginRight:10,
    marginLeft:10,
    marginBottom:5,
    justifyContent:'space-between'
  },
  specsView1:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom:5,
  },
  offerView:{
    flexDirection:"row",
    justifyContent:"center",
    alignContent:"center",
    borderWidth:1,
    borderColor:colors.main,
    height:Platform.OS === 'ios'?heightPixel(300):heightPixel(60),
    borderRadius:30,
    marginRight:10,
    marginTop:10,
    marginLeft:10,
    marginBottom:10
  },
  offerViewDetail:{
    borderWidth:1,
    borderColor:colors.white,
    backgroundColor:colors.white,
    borderRadius:30,
    maxWidth:"100%",
    height:Platform.OS === 'ios'?heightPixel(300):heightPixel(80),
    marginTop:10,
    marginLeft:12,
    marginRight:12,
  },
  IconStyle:{
    marginTop:12,
    marginRight:10
  },
  companyNameView:{
    flexDirection:"row",

  },
  companyImageView:{
    marginLeft:15,
    marginRight: 10,
    marginTop:5
  },
  companyText:{
    marginTop:8,
     marginBottom:0
  },
  ReviewSectionStyle:{
    backgroundColor:colors.lightGrey,
    borderBottomRightRadius: 20,
    borderTopLeftRadius:20,
    height:Platform.OS === 'ios'?heightPixel(300):heightPixel(120),
    padding:10
  }
})