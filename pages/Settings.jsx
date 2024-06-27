import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image, Switch } from 'react-native'
import { useTheme } from '../components/ThemeProvider';

const Settings = () => {
  const {isToggled, toggleTheme} = useTheme();

  return (
    <SafeAreaView style={[styles.safeArea, {backgroundColor: isToggled ? '#0D0D26' : 'white'}]}>
    <View style={styles.header}>
      <Text style={[styles.headerText, {color: isToggled ? 'white' : 'black'}]}>Settings</Text>
    </View>


    <View style={styles.container}>
      <TouchableOpacity>
      <View style={styles.page}>
      <Text style={[styles.text, {color: isToggled ? 'white' : 'black'}]}>Language</Text>
      <Image style={styles.arrow} source={require("../assets/icons/arrow.png")} />
      </View>
      </TouchableOpacity>
      
      <TouchableOpacity>
      <View style={styles.page}>
      <Text style={[styles.text, {color: isToggled ? 'white' : 'black'}]}>My Profile</Text>
      <Image style={styles.arrow} source={require("../assets/icons/arrow.png")} />
      </View>
      </TouchableOpacity>

      <TouchableOpacity>
      <View style={styles.page}>
      <Text style={[styles.text, {color: isToggled ? 'white' : 'black'}]}>Contact Us</Text>
      <Image style={styles.arrow} source={require("../assets/icons/arrow.png")} />
      </View>
      </TouchableOpacity>

      <TouchableOpacity>
      <View style={styles.page}>
      <Text style={[styles.text, {color: isToggled ? 'white' : 'black'}]}>Change Password</Text>
      <Image style={styles.arrow} source={require("../assets/icons/arrow.png")} />
      </View>
      </TouchableOpacity>

      <TouchableOpacity>
      <View style={styles.page}>
      <Text style={[styles.text, {color: isToggled ? 'white' : 'black'}]}>Privacy Policy</Text>
      <Image style={styles.arrow} source={require("../assets/icons/arrow.png")} />
      </View>
      </TouchableOpacity>

      <View style={styles.theme}>
        <Text style={[styles.themeText, {color: isToggled ? 'white' : 'black'}]}>Theme</Text>
        <Switch 
        style={styles.switch}
        trackColor={{false: "gray", true: "yellow"}}
        thumbColor={isToggled? "white": "white"}
        onValueChange={toggleTheme}
        value={isToggled}
        />
      </View>
    </View>
    </SafeAreaView>
  )
}

export default Settings



const styles = StyleSheet.create({
  safeArea:{
    paddingTop: 70,
    height: '100%',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'left',
  },
  page: {
    flexDirection: 'row',
    height: 60,
    borderBottomWidth: 0.5,
    borderBottomColor: 'lightblue',
    marginTop: 20,
    paddingLeft: 20,
    paddingTop: 20,
    justifyContent: 'space-between'
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  headerText: {
    fontSize: 22,
    fontWeight: '500',
  },
  theme: {
    marginTop: 50,
    paddingLeft: 20,
    flexDirection: "row",
    justifyContent:'space-between',
    paddingRight: 10,
  },
  themeText: {
    fontSize: 24,
    fontWeight: '500',
    paddingTop: 5
  },
  arrow:{
  height: 30,
  width: 30,
  paddingRight: 10
  },
  switch: {
    marginLeft: 200
  }
})