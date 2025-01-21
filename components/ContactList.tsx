import { ScrollView, StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const ContactList = () => {
    const contacts=[
        {
            uid:1,
            name:'Ariana Bills',
            status:'The Leader in Action.',
            imageUrl:'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
            uid:2,
            name:'Juliana',
            status:'Beauty with Brain.',
            imageUrl:'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
            uid:3,
            name:'Cheng Yeong',
            status:'Curious yet Dashing.',
            imageUrl:'https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
            uid:4,
            name:'Bharat Kumar',
            status:'Not jus Indian IT guy.',
            imageUrl:'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
    ];

  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView
      style={styles.container}
      scrollEnabled={false}
      >
        {contacts.map(({ uid,name,status,imageUrl}) => (
            <View key={uid} style={styles.userCard}>
                <Image 
                source={{
                    uri: imageUrl
                }}
                style={styles.userImage}
                />
                <View>
                <Text style={styles.username}>{name}</Text>
                <Text style={styles.userStatus}>{status}</Text>
                </View>
            </View>            
        ))}
      </ScrollView>
    </View>
  )
}

export default ContactList

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8,
        color:'white',
    },
    container:{
       paddingHorizontal:16,
       marginBottom:4
    },
    userImage:{
        height:90,
        width:90,
        borderRadius:80/2,
        marginRight:16,
        marginBottom:4,
    },
    userCard:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        marginBottom:4,
        backgroundColor:'lightgrey',
        borderRadius:10,
        padding:4
    },
    userStatus:{
        fontSize:14,
        color:'white '
    },
    username:{
        color:'white',
        fontSize:16,
        fontWeight:'600',
    }
})