import { View, Text } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/FontAwesome"
const Icons = ({name}) => {
  return (
   name === "circle" ?  <Icon name = "circle-thin" size ={38} color = "#F7CD2E"/> :
   name === "cross" ?  <Icon name = "times" size ={38} color = "#38cc77"/> : <Icon name = "pencil" size ={38} color = "#F7CD2E"/>
  )
}

export default Icons