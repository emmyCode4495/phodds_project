import { TouchableOpacity, StyleSheet,FlatList, Text, View } from 'react-native'
import { iosData } from '../../constants/data'
import Header from '../../components/header'
import colors from '../../constants/Colors'
import { useNavigation } from '@react-navigation/native'
import ArrowIcon from 'react-native-vector-icons/AntDesign'

import Icons from 'react-native-vector-icons/Ionicons'

import { AuthProvider } from './src/navigation/AuthProvider';

import React, { Component, useState,useEffect } from 'react';

import firestore from '@react-native-firebase/firestore';


class LaptopsScreen extends Component{
  constructor(props){
    super(props);

    this.state={
      data:'',
    }
    
  }


componentDidMount(){

this.callFunctionToPopulateFlatList()

firestore()
.collection('iosData')
.orderBy('id')
.get()
.then(querySnapshot => {
    console.log('Total Users: ',querySnapshot.size)

    querySnapshot.forEach(documentSnapshot =>{
        console.log("User ID: ", documentSnapshot.id, documentSnapshot.data())
    })
})

}

callFunctionToPopulateFlatList = () =>{
  var newArrayOfData = [];

firestore()
.collection('laptopData')
.orderBy('id')
.get()
.then(querySnapshot => {
    querySnapshot.forEach(documentSnapshot => {
        newArrayOfData.push(documentSnapshot.data())
    });
}).then(testing =>{
  this.setState({data:newArrayOfData})
})

}
  render(navigation){
  return (  
    <View style={{ flex: 1, backgroundColor: colors.lightGrey2 }}>
  <View style={styles.headerMain}>
        <ArrowIcon 
                  name="arrowleft"
                  color={colors.white}
                  size={30}
                  style={styles.arrowIconStyle}
                  onPress={()=> this.props.navigation.goBack()}
              />
        <View style={{marginLeft:50}}>
          <Text style={styles.txtTitle}>
            Laptops
          </Text>
        </View>
      </View>
      <FlatList
        data={this.state.data}
        renderItem={({ item }) => (
          
          <View style={styles.laptopDataStyle}>
            <Text style={styles.laptopDataText}> {item.title} </Text>
            <TouchableOpacity>
            <Icons
                  name="ios-chevron-forward"
                  color={colors.black}
                  size={30}
                />
              </TouchableOpacity>
          </View>
          
        )}
      />
    </View>
  )
    }
  }

  export default LaptopsScreen




// export default function LaptopsScreen() {
//   
//         {
//           laptopData.map((dataOutput,item)=>{
//             return(
//               <TouchableOpacity>
//               <View style={styles.laptopDataStyle} key={item.id}>
//                 <Text style={styles.laptopDataText}>{dataOutput.title}</Text>
//                 <Icons 
//                   name="ios-chevron-forward"
//                   color={colors.black}
//                   size={30}
//                 />
//               </View>
//               </TouchableOpacity>
//             )
//           })
//         }

//     </View>
//   )
// }

const styles = StyleSheet.create({
  laptopDataStyle:{
    flexDirection:'row',
    justifyContent:"space-between",
    // borderWidth:1,
    padding:20
  },
  laptopDataText:{
    fontSize:25,
    color:colors.black,
    fontFamily:"Poppins-Bold",
    marginBottom:15
  },
  headerMain:{
    height:70,
    padding:20,
    marginBottom:20,
    flexDirection:"row", 
    backgroundColor:colors.main
  },
  txtTitle:{
    color:colors.white,
    fontSize:28,
    fontFamily:"Poppins-Bold",
    marginLeft:15
}
})