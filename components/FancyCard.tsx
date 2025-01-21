import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FancyCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card,styles.cardElevated]}>
        <Image
        source={{
            uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Taj_Mahal_%28Edited%29.jpeg/640px-Taj_Mahal_%28Edited%29.jpeg'
        }}
        style={styles.cardImage}
        />
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Taj Mahal</Text>
            <Text style={styles.cardLable}>Agra Uttar Pradesh</Text>
            <Text style={styles.cardDescription}>Taj Mahal is place in Agra UP, also known as the symbol of Love.</Text>
            <Text style={styles.cardFooter}>15 mins away</Text>
        </View>
      </View>
    </View>
  )
}

export default FancyCard

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8,
    },
    card:{
        width:340,
        height:360,
        borderRadius:6,
        marginVertical:10,
        marginHorizontal:12,
    },
    cardElevated:{
         backgroundColor:'white',
         elevation:3,
         shadowOffset:{
            width:1,
            height:1
         }
    },
    cardImage:{
        height:200,  
        marginBottom:8,
        borderTopLeftRadius:6,
        borderTopRightRadius:6
    },
    cardBody:{
        flex:1,
        flexGrow:1,
        paddingHorizontal:12,
    },
    cardTitle:{
        color:'#000000',
        fontSize:22,
        fontWeight:'bold',
        marginBottom:4
    },
    cardLable:{
        color:'#000000',
        fontSize:14,
        marginBottom:6,
    },
    cardDescription:{
        color:'#242B2E',
        fontSize:12,
        marginBottom:12,
        marginTop:6,

    },
    cardFooter:{
        color:'#000000'
    }
})