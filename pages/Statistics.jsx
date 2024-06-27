import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import { useTheme } from '../components/ThemeProvider'

const Statistics = () => {
  const {isToggled} = useTheme()
  return (
    <SafeAreaView style={styles.safeArea}>
    <View style={[styles.container, {backgroundColor: isToggled ? '#0D0D26' : 'white'}]}>
        <Text style={[styles.headerText, {color: isToggled ? 'white' : 'black'}]}>Statistics</Text>
    </View>
    </SafeAreaView>
  )
}

export default Statistics

const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingTop: 50
  },
  headerText: {
    fontSize: 30,
    alignItems: 'center',
  }
})
