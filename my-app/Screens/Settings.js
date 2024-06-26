import { View, Text, Image, TouchableOpacity, Switch, StyleSheet } from 'react-native';
import React, { useState } from 'react';


export default function Settings() {
   const [darkMode, setDarkMode] = useState(false);

  function toggleSwitch() {
    setDarkMode(previousState => !previousState);
  }

  return (
    <View style={[styles.container, { backgroundColor: darkMode ? 'black' : 'white' }]}>
      <TouchableOpacity>
        <View style={styles.optionContainer}>
          <Text style={{ color: darkMode ? 'white' : 'black' }}>Language</Text>
          <Image source={require('../assets/right.png')} style={styles.icon} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.optionContainer}>
          <Text style={{ color: darkMode ? 'white' : 'black' }}>Language</Text>
          <Image source={require('../assets/right.png')} style={styles.icon} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.optionContainer}>
          <Text style={{ color: darkMode ? 'white' : 'black' }}>Language</Text>
          <Image source={require('../assets/right.png')} style={styles.icon} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.optionContainer}>
          <Text style={{ color: darkMode ? 'white' : 'black' }}>Language</Text>
          <Image source={require('../assets/right.png')} style={styles.icon} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.optionContainer}>
          <Text style={{ color: darkMode ? 'white' : 'black' }}>Language</Text>
          <Image source={require('../assets/right.png')} style={styles.icon} />
        </View>
      </TouchableOpacity>
      <View style={styles.themeContainer}>
        <Text style={{ color: darkMode ? 'white' : 'black' }}>Theme</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={darkMode ? '#f5dd4b' : '#f4f3f4'}
          onValueChange={toggleSwitch}
          value={darkMode}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 30,
    marginBottom: 20,
    alignItems: 'center'
  },
  icon: {
    width: 30,
    height: 30
  },
  themeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20
  }
});
