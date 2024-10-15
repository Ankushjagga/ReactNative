import { Button, Image, Linking, ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
    const openLink = () =>{
        Linking.openURL('https://reactnative.dev/docs')
    }
    const users = [
        {
          uid: 1,
          name: "John Doe",
          image: "https://www.appsflyer.com/wp-content/uploads/2021/11/how-to-increase-daily-active-users.jpg",
          shortBio: "A passionate software developer with a love for coding hehehhe"
        },
        {
          uid: 2,
          name: "Jane Smith",
          image: "https://www.appsflyer.com/wp-content/uploads/2021/12/how-to-calculate-monthly-active-users-min.jpg",
          shortBio: "Graphic designer and illustrator specializing in branding and digital art."
        },
        {
          uid: 3,
          name: "Alex Johnson",
          image: "https://www.appsflyer.com/wp-content/uploads/2021/12/why-to-monitor-monthly-active-users-min.jpg",
          shortBio: "Full-stack developer with a focus on building scalable web applications."
        },
        {
          uid: 4,
          name: "Emily Davis",
          image: "https://www.appsflyer.com/wp-content/uploads/2021/12/how-to-increase-monthly-active-users-min.jpg",
          shortBio: "Content creator and social media expert with a knack for storytelling."
        },
        {
            uid: 5,
            name: "jagga Johnson",
            image: "https://www.appsflyer.com/wp-content/uploads/2021/12/why-to-monitor-monthly-active-users-min.jpg",
            shortBio: "Full-stack developer with a focus on building scalable web applications."
          },
       
      ];
      
  return (
    <View >
<ScrollView horizontal style = {styles.container}>

        <View style = {[styles.card1 , styles.cards]}>     
      <Text>Red</Text>
        </View>
        <View style= {[styles.card2 , styles.cards]} >     
      <Text>Green</Text>
        </View>
        <View style = {[styles.card3 , styles.cards]}>     
      <Text>Blue</Text>
        </View>
 
        <View style = {[styles.card1 , styles.cards]}>     
      <Text>Red</Text>
        </View>
        <View style= {[styles.card2 , styles.cards]} >     
      <Text>Green</Text>
        </View>
        <View style = {[styles.card3 , styles.cards]}>     
      <Text>Blue</Text>
        </View>
       
       
</ScrollView>
<View style = {styles.imageView}>

<Image style = {styles.image} source={ {uri : "https://c4.wallpaperflare.com/wallpaper/764/505/66/baby-groot-4k-hd-superheroes-wallpaper-preview.jpg"} } />
<Text style = {styles.heading}>hello heading</Text>
<Text style = {styles.content}>hello Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, id. Asperiores ut illum excepturi nemo enim, in ipsum nisi voluptatum error, reprehenderit minus nesciunt. A asperiores facilis qui reprehenderit expedita.</Text>
</View>
<View>
    <TouchableOpacity onPress={openLink}>

            <Text style ={styles.heading2}>Read More About React Native</Text>
    </TouchableOpacity>
            {/* numberOfLines={2} */}
            <Text style = {styles.footer}  >Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quos non mollitia dicta expedita, aut eum? Ducimus quae facilis vel quidem rem eaque error at, quia ullam, temporibus ut odio?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae veritatis reiciendis amet! Tenetur cupiditate rerum voluptas placeat sed illum tempora repellat laudantium? Consequuntur suscipit dolorem saepe sit reprehenderit voluptatum ratione. Lorem ipsum dolor sit amet consectetur adipisicing elit. In, ipsam voluptatem. Deserunt voluptas, atque iste assumenda tempore nulla totam repellat placeat facere maiores deleniti mollitia reprehenderit nesciunt ipsa dolor nihil?
            </Text>
        </View>
        <View>

        </View>
        {/* scrollEnabled = {true} */}
        <ScrollView  scrollEnabled = {true} style = {styles.userList} >
            <Text style = {styles.heading2}>Users List </Text>
            {users.map(({uid , name , image , shortBio})=> (
                <View key = {uid}  style = {styles.users}>
                    <Image source={{uri : image}} style ={styles.images} ></Image>
                    <View style = {styles.text2}>

                    <Text style = {styles.content2} >{name}</Text>
                    <Text style = {styles.content2} >{shortBio}</Text>
                    </View>
                </View>
            ))}
       
        </ScrollView>
</View>
  )
}

const styles = StyleSheet.create({

    container :{
      
    
        flexDirection : "row",
        flex : 1
    },
    cards :{  width : 100,
        height : 100,
        marginHorizontal : 8,
        justifyContent : "center",
        alignItems : "center",
        elevation : 10,
        shadowOffset :{
            width : 10,
            height : 10
        },
        shadowColor : "purple",
        shadowOpacity : 0.4,
        shadowRadius : 2,
        borderRadius : 10
       
        },
    card1:{backgroundColor : "#70322c"},
    card2:{backgroundColor : "#27272a"},
    card3:{backgroundColor : "#1f2937"},
    image : {
        // width : 100,
        height : 180,
        borderTopLeftRadius : 5,
        borderTopRightRadius : 5

    },
    imageView : {
        // flex : 1,
        // flexGrow : 1,
    //    justifyContent : "center",
    //    alignItems : "center"   ,
       backgroundColor : "#001",
       borderRadius : 5,
       marginVertical : 10 ,
       marginHorizontal : 30 ,
       width : 350,
       height : 360
    },
    heading : {
        fontSize : 20,
        fontWeight : "bold",
        color : "white" ,
        padding : 10,
        textAlign: "center"
        
    },
    content : {
        color : "#fff",
        padding : 10,
    },
    content2 : {
        color : "#fff",
        // padding : 5,
    },
    heading2 : {
        fontSize : 20,
        fontWeight : "bold",
       textAlign: "center",
        color : "#001" 
      },
      footer :{
       textAlign: "center",
        padding : 5
      },
      images :  {
        height : 60,
        width : 70,
        marginHorizontal :10 ,
        borderRadius : 60,
        marginVertical : 10
      },
      users : {
        flex : 1,
        flexDirection : "row", 
        backgroundColor : "#001",
        marginVertical : 5,
        marginHorizontal : 10,
        borderRadius : 5 ,
      },
      userList : {
        paddingHorizontal : 10,
        flex : 1
      } ,
      text2:{
        width : 280
      }
   

})