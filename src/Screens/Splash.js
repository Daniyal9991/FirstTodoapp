import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Splash = () => {
  return (
    <View>
      <Image style={{height:100,width:100}} source={require('../assets/images/cloudthree.png')}/>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({})