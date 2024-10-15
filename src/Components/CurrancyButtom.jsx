import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function CurrancyButtom(props) {
  return (
    <View style={styles.buttonContainer}>
      <Text style = {styles.flag}>{props.flag}</Text>
      <Text style= {styles.country}>{props.name}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    buttonContainer : {
        alignItems: 'center'
    },
    flag: {
        fontSize: 28,
        color: "#000000",
        marginBottom: 4
    },
    country: {
        fontSize: 14,
        color: "#2d3436",
    
    }
})
