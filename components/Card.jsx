import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Card() {
  return (
    <TouchableOpacity>
    <View style={styles.cardContainer}>
    <Image style={styles.cardImage} source={require('../assets/icons/Card.png')} />
    </View>       
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    cardContainer: {
      width: '95%',
      height: 300,
      marginLeft: 13,
      marginTop: 10,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center'
    },
  });