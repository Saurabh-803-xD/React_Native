import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ActionCard = () => {
    function openWebsite(websiteLink:string){
        Linking.openURL(websiteLink) // linking used to open the links provided
    }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card,styles.elevatedCard]}>
           <View style={styles.headingContainer}>
           <Text style={styles.headerText}>
            What's new in Javascript 21 - ES12
           </Text>
           </View>
           <Image
           source={{
            uri:'https://media.istockphoto.com/id/887987150/photo/blogging-woman-reading-blog.jpg?s=612x612&w=0&k=20&c=7SScR_Y4n7U3k5kBviYm3VwEmW4vmbngDUa0we429GA='
           }}
           style={styles.cardImage}
           />
           <View style={styles.cardBody}>
            <Text numberOfLines={2}>
            JavaScript is a versatile, high-level, interpreted programming language widely used for web development.
             It allows developers to create dynamic, interactive experiences in web browsers.
              JavaScript is often used alongside HTML and CSS to build modern web applications.
            </Text>
           </View>
           <View style={styles.SocialLinks}>
              <TouchableOpacity
              onPress={()=>{openWebsite('https://developer.mozilla.org/en-US/docs/Web/JavaScript')}}>
                <Text style={styles.footerBody}>Read More</Text>
              </TouchableOpacity>

              <TouchableOpacity
              onPress={()=>{openWebsite('https://github.com/Saurabh-803-xD')}}>
                <Text style={styles.SocialLinks}>Follow Me</Text>
              </TouchableOpacity>
           </View>
      </View>
    </View>
  )
}

export default ActionCard

const styles = StyleSheet.create({
    headingText:{},
    elevatedCard:{},
    card:{},
    headingContainer:{},
    headerText:{},
    cardImage:{
        height:200,
    },
    cardBody:{ },
    footerBody:{},
    SocialLinks:{}
})