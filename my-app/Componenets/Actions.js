import { View, Text, Image, StyleSheet , TouchableOpacity} from 'react-native'
import React from 'react'

export default function Actions() {
  return (
    <View style = {styles.container}>
      <TouchableOpacity>
        <View style = {styles.componenet} >
          <Image source={require("../assets/send.png")}/>
          <Text>Sent</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style = {styles.componenet} >
          <Image source={require("../assets/recieve.png")}/>
          <Text>Receive</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style = {styles.componenet} >
          <Image source={require("../assets/send.png")}/>
          <Text>Sent</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style = {styles.componenet} >
          <Image source={require("../assets/send.png")}/>
          <Text>Sent</Text>
        </View>
      </TouchableOpacity>
      
    </View>
  )
}

const styles = StyleSheet.create({
  componenet:{
    width: 70,
    height: 70,
    borderRadius: 35,
    flexDirection:"column",
    alignItems: "center",
    paddingTop: 15,
    borderWidth: 1,
    borderColor: "gray"


  },
  container:{
    flexDirection: "row",
    // justifyContent: "space-between",
    gap:20,
    marginLeft: 20,
    marginRight: 20
  }
})