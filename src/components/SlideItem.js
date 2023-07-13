import { View, 
    StyleSheet,
    ImageBackground,
    Image,
    Text,
    ScrollView,
    TextInput,
    TouchableOpacity,
    SafeAreaView,
    FlatList, } from 'react-native'
  import React from 'react'

  import { widthPixel,
    heightPixel,
    pixelSizeHorizontal,
    pixelSizeVertical,
    fontPixel } from '../constants/dimensions';

    import colors from '../constants/Colors';

import { ScreenWidth } from 'react-native-elements/dist/helpers';
import { TrendingData } from '../../constants/data';

  const SlideItem = ({item}) =>{
    return(
        <SafeAreaView style={{flex:1}}>
            {/* <View style={styles.textView}>
                <Text style={styles.textStyle}>PHODDS</Text>
            </View>

            <View style={{flex:1}}>
                <ImageBackground
                    style={styles.imageBackgroundStyle}
                      source={require('../../../assets/images/asVendor.png')}
                />
            </View>
            
            <TouchableOpacity>
            <View style={styles.textButtonView}>    
                <Text style={styles.registerText}>Register as vendor</Text>
            </View>
            </TouchableOpacity> */}

           <Image source={{uri:item.images}}/>
   </SafeAreaView>

        
    )
  }

  export default SlideItem;

  const styles = StyleSheet.create({
        textView:{
            justifyContent:'center',
            alignItems:'center',
            marginTop:30,
            backgroundColor:colors.white
        },
        textStyle:{
            fontSize: fontPixel(40),
            fontFamily:"Roboto-Bold",
            color:colors.main
        },
        imageBackgroundStyle:{
            flex:1,
            width:widthPixel(400),
            height:heightPixel(500),
            backgroundColor:colors.white
        },
        textButtonView:{
            borderWidth:1,
            borderRadius:30,
            marginLeft:10,
            marginRight:10,
            marginTop:10,
            marginBottom:Platform.OS === 'ios'?15:20,
            justifyContent:'center',
            alignItems:'center',
            paddingHorizontal:pixelSizeHorizontal(100),
            paddingVertical:pixelSizeVertical(25),
            borderColor:colors.main
        },
        registerText:{
            fontSize:Platform.OS === 'ios'?fontPixel(20):fontPixel(16),
            textTransform:'uppercase',
            fontFamily:'Poppins-Bold',
            fontWeight:800,
            color:colors.main
        }
  })