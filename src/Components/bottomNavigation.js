import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Weather from './src/Screens/Weather'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Search from './src/Screens/Search'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
const bottom = createBottomTabNavigator();
const App = () => {
  return (
    <bottom.Navigator screenOptions={{headerShown:false}}>
      <bottom.Screen name='Home' options={{tabBarIcon:()=>(
        <MaterialCommunityIcons name="home" color={'white'} size={30} />
      ),tabBarActiveBackgroundColor:'blue',tabBarInactiveBackgroundColor:'skyblue' }} component={Weather}/>
      <bottom.Screen name='Search' options={{tabBarIcon:()=>( 
        <MaterialIcons name="search" color={'white'} size={30} />
      ),tabBarActiveBackgroundColor:'blue',tabBarInactiveBackgroundColor:'skyblue' }}  component={Search}/>
    </bottom.Navigator>
  )
}
export default App

const styles = StyleSheet.create({})