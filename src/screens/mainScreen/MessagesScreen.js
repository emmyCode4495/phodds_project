import { View, Text,StyleSheet, useWindowDimensions } from 'react-native'
import React from 'react'
import colors from '../../constants/Colors'
import {TabView, SceneMap, TabBar} from 'react-native-tab-view'


const FirstRoute = ()=>(
  <View style={styles.firstRoute}/>
);

const SecondRoute = () =>(
  <View style={styles.secondRoute}/>
)

const ThirdRoute = () =>(
  <View style={styles.thirdRoute}/>
)

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute
});


export default function MessagesScreen(){
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key:'first', title:'all'},
    {key: 'second', title:'unread'},
    {key: 'third', title:'spam'},
  ])

  const renderTabBar = props =>(
    <TabBar
    {...props}
    indicatorStyle={{backgroundColor:colors.main}}
    labelStyle={styles.labelStyle}
    tabStyle={styles.tabStyle}
    style={styles.MainTabStyle}
    contentContainerStyle={{alignItems:'center',justifyContent:'center'}}
    />
    )
  return (
    <View style={{flex:1}}>
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      renderTabBar={renderTabBar}
      initialLayout={{width:layout.width}}
      labelStyle = {styles.tabLabel}
    />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
    },
    txtStyle:{
        fontSize:35,
        color:colors.main
    },
    firstRoute:{
      backgroundColor:colors.white
    },
    secondRoute:{
      backgroundColor:colors.white
    },
    thirdRoute:{
      backgroundColor:colors.white
    },
    labelStyle:{
      fontFamily:"Roboto-Regular",
      fontSize:18,
      letterSpacing:0.5,
      color:colors.main
    },
    tabStyle:{
      elevation:10
    },
    MainTabStyle:{
      backgroundColor:colors.white,
    }
    
})