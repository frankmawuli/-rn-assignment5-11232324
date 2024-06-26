import { View, Image } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Card() {
  return (
    <TouchableOpacity>
      <View style={{margin: 20, flexDirection: "row", width: '100%'}}>
      <Image 
        source={require("../assets/Card.png")}  
      />
    </View>
    </TouchableOpacity>
  );
}