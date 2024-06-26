import { View, Text, Image , ScrollView } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './Screens/Home'
import Profile from './Screens/Profile'
import MyCards from './Screens/MyCards'
import Settings from './Screens/Settings'
import Statistics from './Screens/Statistics'
import { GestureHandlerRootView } from 'react-native-gesture-handler'


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <GestureHandlerRootView>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} options={{
            tabBarIcon: ({color , size}) =>(
              <Image source={require("./assets/home.png")}/>
          ),
            headerShown:false,
          }}/>
          <Tab.Screen name="MyCard" component={MyCards} options={{
            tabBarIcon:({color, size}) =>(
              <Image source={require("./assets/myCards.png")}/>
          )
          }}/>
          <Tab.Screen name="Statistics" component={Statistics} options={{
            tabBarIcon:({color, size}) =>(
              <Image source={require("./assets/statictics.png")}/>
            )
          }}/>
          <Tab.Screen name="Settings" component={Settings} options={{
            tabBarIcon:({color, size}) =>(
              <Image source={require("./assets/settings.png")}/>
            )
          }}/>



        </Tab.Navigator>
      </GestureHandlerRootView>
      
    </NavigationContainer>
  
  )
}