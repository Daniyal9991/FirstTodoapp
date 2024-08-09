import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import CheckBox from '@react-native-community/checkbox';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';

const Home = () => {
   const navigation=useNavigation();
    const[toggleCheckBox,setToggleCheckBox]=useState(false)
  return (
    <View style={{backgroundColor:'#F1F5F9',height:'100%',flex:1}}>
      <View style={{backgroundColor:'#4A3780',height:'25%'}}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
        <TouchableOpacity style={{backgroundColor:'white',marginRight:30,borderRadius:50,left:10,top:10}}>
      <MaterialIcons name={'keyboard-arrow-left'} size={40} color={'black'} />
      </TouchableOpacity>
      <Text style={{color:'white',marginLeft:50,fontSize:18}}>October 20, 2022</Text>
      </View>
      <Text style={{color:'white',marginLeft:50,padding:50,fontSize:30,fontWeight:'bold'}}>My Todo List</Text>
      <View style={{backgroundColor:'white',height:'150%',margin:10,bottom:40,borderRadius:20}}>
      <View style={{flexDirection:'row',margin:10}}>
      <TouchableOpacity style={{margin:10,borderRadius:30,padding:10,marginRight:30,backgroundColor:'#DBECF6'}}>
      <MaterialCommunityIcons name={'post-outline'} size={30} color={'black'} />
      </TouchableOpacity>
      <Text style={{color:'black',margin:20,fontSize:20,fontWeight:'bold'}}>Study lesson</Text>
      <CheckBox style={{backgroundColor:'black',margin:20,color:'green'}}
    disabled={false}
    value={toggleCheckBox}
    onValueChange={(newValue) => setToggleCheckBox(newValue)}/>
      </View>
      <View style={{flexDirection:'row',margin:10}}>
      <TouchableOpacity style={{margin:10,borderRadius:30,padding:10,marginRight:30,backgroundColor:'#FEF5D3'}}>
      <Ionicons name={'trophy-outline'} size={30} color={'black'} />
      </TouchableOpacity>
      <Text style={{color:'black',margin:20,fontSize:20,fontWeight:'bold'}}>Run 5k</Text>
      <CheckBox style={{backgroundColor:'black',margin:20,left:55,color:'green'}}
    disabled={false}
    value={toggleCheckBox}
    onValueChange={(newValue) => setToggleCheckBox(newValue)}/>
      </View>
      <View style={{flexDirection:'row',margin:10}}>
      <TouchableOpacity style={{margin:10,borderRadius:30,padding:10,marginRight:30,backgroundColor:'#E7E2F3'}}>
      <MaterialCommunityIcons name={'calendar'} size={30} color={'black'} />
      </TouchableOpacity>
      <Text style={{color:'black',margin:20,fontSize:20,fontWeight:'bold'}}>Go to party</Text>
      <CheckBox style={{backgroundColor:'black',left:15,margin:20,color:'green'}}
    disabled={false}
    value={toggleCheckBox}
    onValueChange={(newValue) => setToggleCheckBox(newValue)}/>
      </View>
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate('HomeTwo')} activeOpacity={0.5} style={{backgroundColor:'#F1F5F9'}}>
      <Text style={{color:'black',fontSize:30,backgroundColor:'#4A3780',padding:20,margin:50,borderRadius:40,textAlign:'center'}}>Add New Task</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})