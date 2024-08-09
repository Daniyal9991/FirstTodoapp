import { Image, ImageBackground, ScrollView,TextInput, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Styles from '../Style/Styles'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Flat from '../Components/Flat'
const Weather = () => {
  const[Data,setData]=useState([])
  const[cityName,setcityName]=useState('Karachi')
  const API_KEY='cee337c3c79e64ed08baec0edba038e8'
  useEffect(()=>{
CurrentWeather()
  },[])
 const CurrentWeather=async ()=>{
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`)
  const json=await response.json()
setData(json)
}
  return (
    <View style={{backgroundColor:'#6380E9',flex:1}}>
        
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',top:10}}>
        <Image source={require('../assets/images/weather.png')}/>
        <Ionicons name={'reorder-three'} size={40} color={'white'} />
        </View>
    
    <Text style={{fontSize:35,left:35,top:30,fontWeight:'bold',color:'white'}}>WEATHER TODAY</Text>
    <View style={{flexDirection:'row',alignItems:'center',backgroundColor:'#5D5D5D',margin:30,borderRadius:40,padding:10,justifyContent:'space-between'}}>
    <TextInput style={{fontSize:20,left:10}}onChange={(val)=>setcityName(val)} placeholder='Search' placeholderTextColor={'white'}/>
    <TouchableOpacity activeOpacity={0.5} onPress={CurrentWeather}>
    <FontAwesome name={'search'} size={25} color={'white'}/>
    </TouchableOpacity>
    </View>
    <Text style={{color:'black',fontSize:30,top:10,left:20,fontWeight:'bold'}}>KARACHI</Text>
    <View style={{backgroundColor:'#514EFD',flexDirection:'row',padding:20,borderRadius:20,margin:10,top:20}}>
         <Text style={{color:'white',fontSize:40}}>01/3</Text>
         <Text style={{color:'#071A9A',fontWeight:'bold',top:10,fontSize:40,left:10}}>{Data?.main?.temp}</Text>
        <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}> .C</Text>
        <FontAwesome5  name={'cloud'} size={50} color={'#F9F5F5'} />
       <View style={{right:30,bottom:10}}>
       <FontAwesome name={'circle'} size={50} color={'yellow'} />
       </View>
        </View>
        <View style={{backgroundColor:'#514EFD',padding:20,borderRadius:20,margin:10,top:45}}>
       <View style={{flexDirection:'row',alignItems:'center',justifyContent:'flex-end'}}>
        <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>More Details</Text>
        <MaterialIcons name={'keyboard-arrow-right'} size={25} color={'white'} />
        </View>
        <View style={{flexDirection:'row',padding:10,justifyContent:'space-between'}}>
        <Text style={{color:'white',fontSize:25}}>Today Clear</Text>
        <Text style={{color:'white',fontSize:25}}>30/16</Text>
        </View>
        </View>
    <Flat/>
    </View>
  )
}

export default Weather

const styles = StyleSheet.create({})