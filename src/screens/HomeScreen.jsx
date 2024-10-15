import { View, Text, Button, FlatList, Pressable } from 'react-native'
import React from 'react'
import {NativeStackScreenProps} from "@react-navigation/native-stack"
import { PRODUCTS_LIST } from '../Data/data'
import Product from '../Components/Product'
const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <FlatList data={PRODUCTS_LIST}
      keyExtractor={(item)=> item.id} 
      // ItemSeparatorComponent={"************"}
      renderItem={({item})=>(
        <Pressable onPress={()=> navigation.navigate('Details', {
          product : item
        })}>
          <Product product={item}/>
        </Pressable>
      )}
      />
      {/* <Button title='GO TO DETAILS PAGE' onPress={()=> */}
        {/* // navigation.navigate('Details',{productId : "9876"}) */}
        {/* navigation.push('Details',{productId : "9876"}) */}
      {/* }></Button> */}
    </View>
  )
}

export default HomeScreen