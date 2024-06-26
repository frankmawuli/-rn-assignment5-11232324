import { View, Text, ScrollView } from 'react-native'
import Profile from '../Componenets/Profile'
import  Card from "../Componenets/Card"
import Actions from '../Componenets/Actions'
import Transaction from '../Componenets/Transaction'




export default function Home() {
  return (
    <ScrollView>
      <View>
      <Profile/>
      <Card/>
      <Actions/>
      <Transaction/>
    </View>
    </ScrollView>
    
  )
}