import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const Product = ({product}) => {
    console.log(product.imageUrl);
    
  return (
    <View>
      <Image  style={styles.image}  source={{uri : product?.imageUrl}} alt='image'/>
      <Text>{product?.name}</Text>
      <Text>{product.rating} ★</Text>
      <Text>{product.ratingCount.toLocaleString()} </Text>
      <Text>₹{product.originalPrice.toLocaleString()} </Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 18,
      backgroundColor: '#FFFFFF',
    },
    image: {
      width: 300,
      height: 450,
      resizeMode: 'contain',
    },
    rowContainer: {
      flexDirection: 'row',
    },
    name: {
      marginBottom: 4,
  
      fontSize: 20,
      fontWeight: '500',
    },
    ratingContainer: {
      marginVertical: 12,
    },
    priceContainer: {
      paddingVertical: 12,
      paddingHorizontal: 12,
  
      marginBottom: 12,
  
      borderRadius: 6,
      backgroundColor: '#deffeb',
    },
    rating: {
      marginRight: 4,
  
      borderRadius: 4,
      paddingHorizontal: 8,
      justifyContent: 'center',
      backgroundColor: '#008c00',
    },
    ratingText: {
      color: '#fff',
      fontSize: 14,
      fontWeight: '600',
    },
    ratingCount: {
      fontSize: 14,
      color: '#878787',
    },
    originalPrice: {
      fontSize: 18,
      fontWeight: '600',
      marginRight: 8,
  
      color: 'rgba(0, 0, 0, 0.5)',
      textDecorationLine: 'line-through',
    },
    discountPrice: {
      fontSize: 18,
      color: '#000000',
      fontWeight: '600',
    },
    offerPercentage: {
      fontSize: 17,
      fontWeight: '600',
      color: '#4bb550',
  
      marginRight: 8,
    },
    badge: {
      margin: 2,
      flexWrap: 'wrap',
      flexDirection: 'row',
    },
    tagBadge: {
      paddingVertical: 2,
      paddingHorizontal: 4,
  
      borderWidth: 1,
      borderRadius: 4,
      borderColor: 'rgba(0, 0, 0, 0.5)',
  
      color: 'rgba(0, 0, 0, 0.8)',
    },
  });
  
export default Product