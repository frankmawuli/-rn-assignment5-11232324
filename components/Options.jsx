import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useTheme } from './ThemeProvider'

export default function Options() {

    const { isToggled } = useTheme()

  return (
    <View style={styles.container}>
        <View style={styles.optionsContainer}>
        <TouchableOpacity>
        <View style={[styles.button, {backgroundColor: isToggled ? 'rgba(28, 28, 50, 10.0)' : 'lightgray'}]}>
        <Image style={styles.image} source={require("../assets/icons/send.png")} tintColor={isToggled ? 'white' : 'black'}/>
        </View>
        </TouchableOpacity>
        <Text style={[styles.text, {color: isToggled ? 'gray' : 'black'}]}>Sent</Text>
        </View>


        <View style={styles.optionsContainer}>
        <TouchableOpacity>
        <View style={[styles.button, {backgroundColor: isToggled ? 'rgba(28, 28, 50, 10.0)' : 'lightgray'}]}>
        <Image  style={styles.image}  source={require("../assets/icons/recieve.png")} tintColor={isToggled ? 'white' : 'black'}/>
        </View>
        </TouchableOpacity>
        <Text style={[styles.text, {color: isToggled ? 'gray' : 'black'}]}>Receive</Text>
        </View>


        <View style={styles.optionsContainer}>
        <TouchableOpacity>
        <View style={[styles.button, {backgroundColor: isToggled ? 'rgba(28, 28, 50, 10.0)' : 'lightgray'}]}>
        <Image style={styles.image} source={require("../assets/icons/loan.png")} tintColor={isToggled ? 'white' : 'black'}/>
        </View>
        </TouchableOpacity>
        <Text style={[styles.text, {color: isToggled ? 'gray' : 'black'}]}>Loan</Text>
        </View>


        <View style={styles.optionsContainer}>
        <TouchableOpacity>
        <View style={[styles.button, {backgroundColor: isToggled ? 'rgba(28, 28, 50, 10.0)' : 'lightgray'}]}>
        <Image  style={styles.image}  source={require("../assets/icons/topUp.png")} tintColor={isToggled ? 'white' : 'black'}/>
        </View>
        </TouchableOpacity>
        <Text style={[styles.text, {color: isToggled ? 'gray' : 'black'}]}>Topup</Text>
        </View>

    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    button: {
        height: 60,
        width: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        paddingTop: 5,   
    },
    optionsContainer: {
        alignItems: 'center',
        justifyContent: 'center',
               
    },
});