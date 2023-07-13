import { View, 
    StyleSheet,
    ImageBackground,
    Image,
    Text,
    ScrollView,
    TextInput,
    TouchableOpacity,
    SafeAreaView,
    FlatList,Dimensions } from 'react-native'
  import React from 'react'

  const {width, height} = Dimensions.get('screen')

  import ArrowIcon from 'react-native-vector-icons/AntDesign'

  import { widthPixel,
    heightPixel,
    pixelSizeHorizontal,
    pixelSizeVertical,
    fontPixel } from '../../constants/dimensions';

    import colors from '../../constants/Colors';

    const imageWidth = width * 0.7;
    const imageHeight = imageWidth * 1.54;


import SlideItem from '../../components/SlideItem';
import { useNavigation } from '@react-navigation/native';



const carouselData = [ 

    {images:({navigation}) =>
         
    <View>
            <View style={styles.vendingView}>
                <Text style={styles.vendingTextt}>
                    ...Vending just got easier
                </Text>
            </View>
            <Image source={require('../../../assets/images/asVendor.png')} style={styles.imageStyle}/>
            <TouchableOpacity
                onPress={()=>navigation.navigate("vending")}
            >
                <View style={styles.textButtonView}>    
                <Text style={styles.registerText}>Register as vendor</Text>
                </View>
            </TouchableOpacity>
            </View>,
   
        id:1},
    {images:({navigation}) => <View>
        
        <View style={styles.vendingView}>
                <Text style={styles.vendingText1}>
                    ...get quality gadgets!
                </Text>
            </View>
        <Image source={require('../../../assets/images/client.png')} style={styles.imageStyle}/>
        <TouchableOpacity
            onPress={()=>navigation.navigate("Register")}
        >
                <View style={styles.textButtonView1}>    
                <Text style={styles.registerText1}>Register as client</Text>
                </View>
            </TouchableOpacity>
    </View>,
        id:2}
    
]
  const RegisterOptions =({item,navigation}) =>{

    return(
        <SafeAreaView style={{flex:1,backgroundColor:colors.white}}> 
            <View style={{marginLeft:20,marginTop:10}}>
            <ArrowIcon 
                name="arrowleft"
                color={colors.main}
                size={30}
                onPress={()=>{navigation.goBack()}}
            />
            </View>
            <FlatList data={carouselData}
            horizontal
            pagingEnabled
            keyExtractor={(_,index)=>index.toString()}
            renderItem={({item}) => {
                return (
                    <View style={{width,justifyContent:'center',alignItems:'center'}}>
                        {item.images({navigation})}
                    
                    </View>
                )
            }}                                                                                                                  
            />
            
        </SafeAreaView>

        
    )
  }

  export default RegisterOptions;

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
            borderRadius:40,
            marginLeft:10,
            marginRight:10,
            marginTop:10,
            marginBottom:Platform.OS === 'ios'?15:20,
            justifyContent:'center',
            alignItems:'center',
            paddingHorizontal:Platform.OS === 'ios'?pixelSizeHorizontal(95):pixelSizeHorizontal(100),
            paddingVertical:pixelSizeVertical(20),
            borderColor:colors.main
        },
        textButtonView1:{
            borderWidth:1,
            borderRadius:40,
            marginLeft:10,
            marginRight:10,
            marginTop:10,
            marginBottom:Platform.OS === 'ios'?15:20,
            justifyContent:'center',
            alignItems:'center',
            paddingHorizontal:Platform.OS === 'ios'?pixelSizeHorizontal(95):pixelSizeHorizontal(100),
            paddingVertical:pixelSizeVertical(20),
            borderColor:colors.main,
            backgroundColor:colors.main
        },
        registerText:{
            fontSize:Platform.OS === 'ios'?fontPixel(18):fontPixel(16),
            textTransform:'uppercase',
            fontFamily:'Poppins-Bold',
            fontWeight:800,
            color:colors.main
        },
        registerText1:{
            fontSize:Platform.OS === 'ios'?fontPixel(18):fontPixel(16),
            textTransform:'uppercase',
            fontFamily:'Poppins-Bold',
            fontWeight:800,
            color:colors.white
        },
        imageStyle:{width:imageWidth,
            height:imageHeight, 
            resizeMode:'contain',
            borderRadius:60,
            marginLeft:50
        },
        vendingView:{
            juustifyContent:'center',
            alignItems:'center'
        },
    
        vendingTextt:{
            fontSize:Platform.OS === 'ios'?fontPixel(25):fontPixel(30),
            color:colors.main,
            fontFamily:'Poppins-Regular',
            letterSpacing:2,
            fontWeight:800
    
        },
    
        vendingText1:{
            fontSize:fontPixel(30),
            color:colors.main,
            fontFamily:'Poppins-Bold',
            letterSpacing:1
    
        }
       
       
  })