import React, { useState , useEffect } from "react";
import { Alert, Button, SafeAreaView, Text, View , StyleSheet , useColorScheme, ScrollView, TextInput, TouchableOpacity, StatusBar, Image, Pressable, Vibration, FlatList ,ActivityIndicator} from "react-native";
import FlatCards from "./FlatCards";
import BouncyCheckbox  from "react-native-bouncy-checkbox"
// import One from "./assests/one.png"
// import Two from "./assests/two.png"
// import Three from "./assests/three.png"
// import Four from "./assests/four.png"
// import Five from "./assests/five.png"
// import Six from "./assests/six.png"
import { currencyByRupee } from "./Constants";
import CurrancyButtom from "./Components/CurrancyButtom";
// import { setupPlayer , addTrack } from "../musicPlayerService";
// import MusicPlayer from "./screens/MusicPlayer";
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import HomeScreen from "./screens/HomeScreen";
import DetailScreen from "./screens/DetailScreen";
import { enableScreens } from 'react-native-screens';

enableScreens();

//FIRST PROJECT APPP 1,2 : HEHE

// const App = ()=>{
//   const buttonPress = () =>{
//     Alert.alert("yi click a buttonnnnn ")
//   }
//   const darkMode = useColorScheme() === "dark";
 
  
//   return (
//  //<SafeAreaView> 
//   <View style = {styles.container}>
//     <Text style = {  darkMode ? styles.blackText : "" } >HELLO JIIIIIII</Text>
  
//      <Button title="click mee" onPress={buttonPress}/>
//   </View>
// //</SafeAreaView>


//   )
//   }
//   const styles  = StyleSheet.create({
//     container: {
//       alignContent : "center"
//     } ,
//     whiteText : {
//       color : "#ffffff"
//     },
//     blackText : {
//       color : "red"
//       },
//   })

//   export default App



 
  

const Stack = createNativeStackNavigator();



const App = () =>{

  //project 3 , password generatorrr
const [password , setPassword] = useState("");
const [isPasswordGenerated , setIsPasswordGenerated] = useState(false);
const [lowerCase , setLowercase] = useState(true);
const [upperCase , setUpperCase] = useState(false);
const [number , setNumber ] = useState(false);
const [symbol , setSymbol] = useState(false);
const [passwordLength , setPasswordLength] = useState(null)
const [isPlayerReady, setIsPaylerReady] = useState(false)

// async function setup(){
//   let isSetup = await setupPlayer()

//   if (isSetup) {
//     await addTrack()
//   }

//   setIsPaylerReady(isSetup)
// }
// useEffect(() => {
//   setup()
// }, [])


const generatePasswordString = (passwordlength) =>{
  let chaharcterList = ""
  const upperlist =  "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerlist = "abcdefghijklmnopqrstuvwxyz";
  const digitlist = "0123456789";
  const specialcharacter = "!@#$%^&*()+-/="
  if(upperCase){
    chaharcterList+= upperlist
  }
  if(number){
    chaharcterList+=digitlist
  }
  if(symbol){
    chaharcterList+=specialcharacter
  }
  if(lowerCase){
    chaharcterList+=lowerlist
  }
  const passwordResult = createPassword(chaharcterList ,passwordlength);
  console.log(passwordResult , "passwordresulttt");
  
  setPassword(passwordResult)
  setIsPasswordGenerated(true)
}


const createPassword = (characters , passwordlength) =>{
  let result = ""
  for (let i = 0; i < passwordlength; i++) {
   const charIndex = Math.round(Math.random() * characters.length)
    result+= characters.charAt(charIndex)
  }
  return result
  
}

const resetState = () =>{
  setLowercase(true)
  setIsPasswordGenerated(false)
  setNumber(false)
  setUpperCase(false)
  setPassword("")
  setSymbol(false)
  setPasswordLength(null)
}



// project 4  genrate random colors 
const [randomColor , setRandomColor] = useState("#ffffff")
const generateColor = () =>{
  const hexRange = "123456789abcdef"
  let color = "#";
  for (let i = 0; i < 6; i++) {
      color+=   hexRange[Math.floor(Math.random()*16)]
    
  }
  setRandomColor(color)
}

// project 5 dice images rolls
// const [randomImage , setRandomImage] = useState(One)
const rollDice = ()=>{
  const random = Math.floor(Math.random() * 6) + 1
  switch (random) {
    case 1:
      setRandomImage(One)
      break;
      case 2:
        setRandomImage(Two)
        break;
        case 3:
          setRandomImage(Three)
          break;
          case 4:
            setRandomImage(Four)
            break;
            case 5:
              setRandomImage(Five)
              break;
              case 6:
                setRandomImage(Six)
                break;
    default:
      break;
  }
}
const Dice = ({imageUrl}) =>{
  return (
    <>
    <Image  style = {styles.imagestyle} source={imageUrl} />
    </>
  )
}

//project 6  flatcarts currencyconverted

const [inputValue, setInputValue] = useState('')
const [resultValue, setResultValue] = useState('')
const [targetCurrency, setTargetCurrency] = useState('')

const buttonPress = (targetValue) =>{
  const inputAmount = parseFloat(inputValue)
const convertedAmount = inputAmount * targetValue.value
const result = `${targetValue.symbol} ${convertedAmount.toFixed(3)} 🤑 `
setResultValue(result)
setTargetCurrency(targetValue.name)
}

console.log( typeof inputValue);
// if (!isPlayerReady) {
//   return (
//     <SafeAreaView>
//       <ActivityIndicator />
//     </SafeAreaView>
//   )
// }

  return (
<NavigationContainer>
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={HomeScreen} 
    options={{title : "Trending products"}}/>
    <Stack.Screen name="Details" component={DetailScreen}
    options={{title : "Product"}}/>
  </Stack.Navigator>
  </NavigationContainer> 




    // <SafeAreaView style = {[styles.safeArea , {backgroundColor : randomColor}] }>
    // <>
    // <Text style = {styles.heading}> React native heheh ! </Text>
    // <MusicPlayer/>
        /* <Text style = {styles.heading}> React native heheh ! </Text>
        <View>

<Text>₹</Text>
<TextInput maxLength={14} value={inputValue} 
 onChangeText={setInputValue} keyboardType="numeric" placeholder="eneter amount"/>
        </View>
        <View>
          {resultValue && (
            <Text>{resultValue}</Text>
          )}
        </View>
<View> 
  <FlatList 
   numColumns={1}
   data={currencyByRupee}
   keyExtractor={(itm)=> itm.name}
   renderItem={({item})=>(
    <Pressable onPress={()=> buttonPress(item)}  
    style={[
     styles.button, 
     targetCurrency === item?.name && styles.selected 
   ]}
    >
     <CurrancyButtom  {...item} />
   </Pressable>
 )
}
  />


</View> */
        /* <ScrollView> */
          /* <Dice imageUrl={randomImage} />
          <Pressable  onPress={()=> {rollDice() , 
          Vibration.vibrate(100);
          }  }   >
          <Text>Roll me over babay oh yeah !!</Text>
          </Pressable> */
          /* <StatusBar backgroundColor={"#000000"}/>
          <TouchableOpacity onPress={generateColor} >
            <View>
            <Text>Press me :hehe</Text>
            </View>
            </TouchableOpacity> */
          /* <Text>password Length</Text>
          <TextInput keyboardType="numeric" placeholder="enter password length" value={passwordLength}
          onChangeText ={(e)=> setPasswordLength(e)}  />
          <Text>Include Uppercase</Text>
           <BouncyCheckbox 
           fillColor="red"
           onPress={()=> setUpperCase(!upperCase)}
           isChecked={upperCase}
           />
           <Text>Include number</Text>
           
            <BouncyCheckbox 
           fillColor="green"
           onPress={()=> setNumber(!number)}
           isChecked={number}

           />
           <Text>Include symbbols</Text>
           
           <BouncyCheckbox 
           fillColor="blue"
           onPress={()=> setSymbol(!symbol)}
           isChecked = {symbol}
           />
           <TouchableOpacity onPress={()=> generatePasswordString(passwordLength)}>
           <Text >Generate Password</Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={()=>  resetState()}>
           <Text >reset Password</Text>
           </TouchableOpacity>
             <View>
              <Text selectable >{isPasswordGenerated ? password : null}</Text>
              </View> */
        /* <FlatCards/> */


        /* </ScrollView> */
        /* <StatusBar backgroundColor={"#000000"}/>
     <View >
         <Text >HELLOO</Text>
       </View>
        </>
    </SafeAreaView> */

//Navigationnnnn


    
  )
}

const styles = StyleSheet.create({
  heading : {
    fontSize : 30,
    fontWeight : "bold",
    marginHorizontal : 50,
    marginVertical : 10,
    color : "#001"
  },
  safeArea: {
    flex: 1,
  },
  imagestyle :{
    width : 100,
    height : 100
  },
  container: {
    flex: 1,
    backgroundColor: '#515151',
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  resultTxt: {
    fontSize: 32,
    color: '#000000',
    fontWeight: '800',
  },
  rupee: {
    marginRight: 8,

    fontSize: 22,
    color: '#000000',
    fontWeight: '800',
  },
  rupeesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputAmountField: {
    height: 40,
    width: 200,
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
  },
  bottomContainer: {
    flex: 3,
  },
  button: {
    flex: 1,

    margin: 12,
    height: 60,

    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  selected: {
    backgroundColor: '#ffeaa7',
  },
})


export default App