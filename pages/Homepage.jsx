import React, {useState} from 'react'
import { View, Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import Welcome from '../components/Welcome'
import Card from '../components/Card'
import Options from '../components/Options'
import Transaction from '../components/home/Transaction'
import { useTheme } from '../components/ThemeProvider'

const Homepage = () => {

    const { isToggled } = useTheme();

  return (
    <SafeAreaView style={[styles.safeArea, {backgroundColor: isToggled ? '#0D0D26' : 'white'}]}>
      <ScrollView
      style={styles.scrollview}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}>
      <View>
        <Welcome />
        <Card />
        <Options />
        <Transaction />
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Homepage;


const styles = StyleSheet.create({
  safeArea: {
    paddingTop: 50
    
  },
  scrollview: {
    width: '100%',
  },
  contentContainer: {
    flexGrow: 1,
  }
})