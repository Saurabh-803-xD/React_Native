import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlatCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>FlatCards</Text>
      <View style={styles.container}>
        <View style={[styles.card,styles.cardOne]}>
            <Text>RED</Text>
        </View>
        <View style={[styles.card,styles.cardTwo]}>
            <Text>Green</Text>
        </View>
        <View style={[styles.card,styles.cardThree]}>
            <Text>Blue</Text>
        </View>
        <View style={[styles.card,styles.cardOne]}>
            <Text>RED</Text>
        </View>
      </View>
    </View>
  )
}

export default FlatCards

const styles = StyleSheet.create({
    headingText:{
      fontSize: 24,
      fontWeight:'bold',
      paddingHorizontal:8,
    },
    container:{
           flex:1,
           flexDirection:'row-reverse',
           padding:8,
    },
    card:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:200,
        height:100,
        margin:8,
        borderRadius:4,
    },
    cardOne:{
       backgroundColor: '#ef5354'
    },
    cardTwo:{
       backgroundColor: '#50dbb4'
    },
    cardThree:{
       backgroundColor: '#5da3fa'
    }
})