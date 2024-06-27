import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import { useTheme } from '../components/ThemeProvider'

const MyCards = () => {
  const {isToggled} = useTheme()
  return (
    <SafeAreaView style={styles.safeArea}>
    <View style={[styles.container, {backgroundColor: isToggled ? '#0D0D26' : 'white'}]}>
        <Text style={[styles.headerText, {color: isToggled ? 'white' : 'black'}]}>MyCards</Text>
    </View>
    </SafeAreaView>
  )
}

export default MyCards

const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingTop: 50
  },
  headerText: {
    fontSize: 30,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
