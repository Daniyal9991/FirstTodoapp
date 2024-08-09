import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import weatherMain from './src/Screens/weatherMain'
import Splash from './Splash'
const stack=createNativeStackNavigator()
const App = () => {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName='Splash' screenOptions={{headerShown:false}}>
       <stack.Screen name='Splash' component={Splash}/>
        <stack.Screen name='Weather' component={weatherMain}/>
        <stack.Screen name='Bottom' component={bottomNavigation}/>
      </stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})