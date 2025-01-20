import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'

function AppPro() {
    const isDarkMode = useColorScheme() === 'dark';
  
    return (
      <View style={styles.container}>
        <Text style={isDarkMode ? styles.darkText : styles.darkText}>Hello World</Text>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    darkText: {
      color: '#ffffff',
    },
    lightText: {
      color: '#000',
    },
  });
  
export default AppPro;