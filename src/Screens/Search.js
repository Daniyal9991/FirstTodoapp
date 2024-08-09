import { StyleSheet, Text, View,ImageBackground,Image, TextInput} from 'react-native'
import React from 'react'
import Constant from '../Style/Constant'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Entypo from 'react-native-vector-icons/Entypo'
import List from '../Components/List'
const Search = () => {
  return (
    <View style={{backgroundColor:'#6380E9',flex:1}}>
    <View style={{flexDirection:'row',top:10,alignItems:'center',justifyContent:'space-between'}}>
    <Entypo name={'chevron-small-left'} size={25} color={'white'} />
    <Ionicons name={'reorder-three'} size={40} color={'white'} />
    </View>
<Text style={{fontSize:35,left:60,fontWeight:'bold',top:10,color:'white'}}>Add a Location</Text>

    
    <View style={{flexDirection:'row',alignItems:'center',backgroundColor:'#5D5D5D',margin:40,borderRadius:40,padding:15}}>
    <FontAwesome name={'search'} size={25} color={'white'} />
    <TextInput  placeholder='Search' placeholderTextColor={'white'}/>
    </View>
    <Text style={{color:'black',fontSize:30,top:10,left:10,fontWeight:'bold'}}>Resent</Text>
    <List/>
</View>
  )
}

export default Search

const styles = StyleSheet.create({})