import { StyleSheet, Text, View,TouchableOpacity,Image,FlatList, ImageBackground, TextInput } from 'react-native'
import React from 'react'
import  { useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'
const HomeTwo = () => {
  const navigation=useNavigation();
  
  return (
    <View style={{backgroundColor:'#F1F5F9',height:'100%',flex:1}}>
    <View style={{backgroundColor:'#4A3780',height:'15%'}}>
    <View style={{flexDirection:'row',alignItems:'center',margin:20}}>
    <TouchableOpacity onPress={()=>navigation.navigate('Home')} style={{backgroundColor:'white',marginRight:30,borderRadius:50,left:10,top:10}}>
    <MaterialCommunityIcons name={'close'} size={50} color={'black'} />
    </TouchableOpacity>
    <Text style={{color:'white',fontSize:28,top:10,marginLeft:20}}>Add New Task</Text>
    </View>
    </View>
    <Text style={{color:'black',margin:20,fontSize:20,fontWeight:'bold'}}>Task Title</Text>
  <TextInput style={{borderWidth:2,color:'black',margin:10,borderRadius:10,borderColor:'grey',backgroundColor:'white',paddingLeft:15}} placeholder='Task Title' placeholderTextColor={'black'}/>
  <View style={{flexDirection:'row'}}>
    <Text style={{color:'black',top:10,margin:10,fontSize:20,fontWeight:'bold'}}>Category</Text>
    <TouchableOpacity style={{margin:10,borderWidth:2,borderColor:'white',borderRadius:30,padding:10,backgroundColor:'#DBECF6'}}>
      <MaterialCommunityIcons name={'post-outline'} size={30} color={'black'} />
      </TouchableOpacity>
      <TouchableOpacity style={{margin:10,borderWidth:2,borderColor:'white',borderRadius:30,padding:10,backgroundColor:'#E7E2F3'}}>
      <MaterialCommunityIcons name={'calendar'} size={30} color={'black'} />
      </TouchableOpacity>
      <TouchableOpacity style={{margin:10,borderWidth:2,borderColor:'white',borderRadius:30,padding:10,backgroundColor:'#FEF5D3'}}>
      <Ionicons name={'trophy-outline'} size={30} color={'black'} />
      </TouchableOpacity>
  </View>
  <View style={{flexDirection:'row',alignItems:'center'}}>
    <Text style={{color:'black',fontSize:20,marginLeft:20,marginRight:150}}>Date</Text>
    <Text style={{color:'black',fontSize:20}}>Time</Text>
  </View>
  <View style={{flexDirection:'row'}}>
    <TextInput style={{borderRadius:10,borderWidth:2,color:'black',marginLeft:20,paddingRight:120,paddingLeft:10}} placeholder='Date' placeholderTextColor={'black'}/>
    <TextInput style={{borderRadius:10,borderWidth:2,color:'black',marginLeft:20,paddingRight:120,paddingLeft:10}} placeholder='Time' placeholderTextColor={'black'}/>
  </View>
  <Text style={{color:'black',margin:20,fontSize:20}}>Notes</Text>
  <TextInput style={{margin:10,color:'black',borderRadius:10,borderWidth:1,borderColor:'grey',paddingBottom:140,bottom:10}} placeholder='Notes' placeholderTextColor={'black'}/>
  <TouchableOpacity activeOpacity={0.8} >
    <Text style={{color:'white',padding:20,backgroundColor:'#4A3780',margin:20,borderRadius:30,textAlign:'center',fontSize:20}}>Save</Text>
  </TouchableOpacity>
  </View>
  )
}

export default HomeTwo

const styles = StyleSheet.create({})