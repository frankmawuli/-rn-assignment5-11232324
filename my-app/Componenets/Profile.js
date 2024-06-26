import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

export default function Profile() {
  return (
    <View style={styles.container}>
      <View style={styles.profileInfo}>
        <TouchableOpacity>
          <Image source={require('../assets/profile.png')} style={styles.profileImage} />
        </TouchableOpacity>
        <View style={styles.textContainer}>
          <Text style={styles.welcomeText}>Welcome</Text>
          <Text style={styles.nameText}>Christian Astu</Text>
        </View>
      </View>
      <TouchableOpacity>
        <View style={styles.searchContainer}>
          <Image source={require('../assets/search.png')} style={styles.searchIcon} />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
    paddingHorizontal: 20,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  textContainer: {
    marginLeft: 10,
  },
  welcomeText: {
    fontSize: 16,
    color: '#000',
  },
  nameText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  searchContainer: {
    borderWidth: 1,
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchIcon: {
    width: 25,
    height: 25,
  },
});
