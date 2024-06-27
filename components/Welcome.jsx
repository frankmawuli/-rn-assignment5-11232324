import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useTheme } from './ThemeProvider';

export default function Welcome() {
  const { isToggled } = useTheme();
  return (
  <SafeAreaView>
    <View style={styles.container}>
      <View style={styles.message}>
      <View style={styles.profileImage}>
      <TouchableOpacity>
        <Image styles={styles.profilePicture} source={require("../assets/icons/profile.png")} />
      </TouchableOpacity>
      </View>
      <View style={styles.text}>
      <Text style={[styles.welcomeMessage, {color: isToggled ? 'white' : 'black'}]}>Welcome back,</Text>
      <Text style={[styles.userName, {color: isToggled ? 'white' : 'black'}]}>Frank Gbadago</Text>
      </View>
      </View>
      <TouchableOpacity>
      <View style={[styles.searchImage, {backgroundColor: isToggled ? 'rgba(28, 28, 50, 10.0)' : 'lightgray'}]}>
        <Image styles={styles.profilePicture} source={require("../assets/icons/search.png")} tintColor={isToggled ? 'white' : 'black'}/>
      </View>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    paddingLeft: 15,
    paddingTop: 15,
    justifyContent: 'space-between'
  },
  message: {
    flexDirection: 'row',
  },
  welcomeMessage: {
    fontSize: 16,
    color: 'black',
    marginBottom: 5,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  profileImage: {
    marginRight: 10,
    height: 30,
    tintColor: 'black'
  },
  searchImage: {
    backgroundColor: 'lightgray',
    height: 60,
    width: 60,
    borderRadius: 30,
    marginTop: 2,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  }
})