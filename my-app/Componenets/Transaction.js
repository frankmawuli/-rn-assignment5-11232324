import { View, Text, Image , StyleSheet} from 'react-native'
import React from 'react'

// Updated data array with unique ids
const data = [
  {
    id: 1,
    image: require("../assets/topUp.png"),
    name: "Apple Store",
    category: "Entertainment",
    price: "$5.99"
  },
  {
    id: 2,
    image: require("../assets/topUp.png"),
    name: "Apple Store",
    category: "Entertainment",
    price: "$5.99"
  },
  {
    id: 3,
    image: require("../assets/topUp.png"),
    name: "Apple Store",
    category: "Entertainment",
    price: "$5.99"
  },
  {
    id: 4,
    image: require("../assets/topUp.png"),
    name: "Apple Store",
    category: "Entertainment",
    price: "$5.99"
  },
  {
    id: 5,
    image: require("../assets/topUp.png"),
    name: "Apple Store",
    category: "Entertainment",
    price: "$5.99"
  },
  {
    id: 6,
    image: require("../assets/topUp.png"),
    name: "Apple Store",
    category: "Entertainment",
    price: "$5.99"
  },
  {
    id: 7,
    image: require("../assets/topUp.png"),
    name: "Apple Store",
    category: "Entertainment",
    price: "$5.99"
  }
]

export default function Transaction() {
  const newData = data.map((element) => {
    return (
      <ListItem key={element.id} {...element} />
    )
  })

  return (
    <View>
      {newData}
    </View>
  )
}

const ListItem = (props) => {
  return (
    <View style = {styles.container}>
      <View style ={{flexDirection: 'row', gap: 20 , alignItems: "center"}}>
        <View style = {{width: 60 , 
          height: 60 , 
          borderRadius: 30, 
          flexDirection:'row',
          justifyContent:"center",
          paddingTop:20,
          backgroundColor:"#696969"
          }}><Image source={props.image}/></View>
        <View>
          <Text>{props.name}</Text>
          <Text>{props.category}</Text>
        </View>
      </View>
      <View>
        <Text>{props.price}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flexDirection: "row",
    justifyContent:'space-between',
    margin: 10,
    padding:10,
    marginRight:20,
    alignItems: "center"

  }
})

