import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './pages/Homepage';
import Settings from './pages/Settings';
import MyCards from './pages/MyCards';
import Statistics from './pages/Statistics';
import { ThemeProvider, useTheme } from './components/ThemeProvider.jsx'


const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <ThemeProvider>
    <NavigationContainer> 
      <Tab.Navigator>
        <Tab.Screen name='Home' component={Home} options={{tabBarIcon: ({color, size}) => (
          <Image source={require("./assets/icons/home.png")} />
        ), headerShown: false}}/>
        <Tab.Screen name='MyCards' component={MyCards} options={{tabBarIcon: ({color, size}) => (
          <Image source={require("./assets/icons/myCards.png")} />
        ), headerShown: false}} />
        <Tab.Screen name='Statistics' component={Statistics} options={{tabBarIcon: ({color, size}) => (
          <Image source={require("./assets/icons/statictics.png")} />
        ), headerShown: false}} />
        <Tab.Screen name='Settings' component={Settings} options={{tabBarIcon: ({color, size}) => (
          <Image source={require("./assets/icons/settings.png")} />
        ), headerShown: false}} />
      </Tab.Navigator>
    </NavigationContainer>
    </ThemeProvider>

  );
}


