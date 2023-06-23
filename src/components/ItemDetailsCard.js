import { ImageBackground, 
    StyleSheet,
     Text,
      View } from 'react-native'
import React from 'react'

export default function ItemDetailsCard({
    images,
    address,
    amount,
    description
}) {
  return (
    <View>
        <ImageBackground
            source={{uri:images}}
            style={styles.itemImage}
        />
        
    </View>
  )
}

const styles = StyleSheet.create({})