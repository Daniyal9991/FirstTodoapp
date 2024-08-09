import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
const List = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor:'#514EFD',borderRadius:20,margin:10,top:10}}>
<View style={{flexDirection:'row',padding:20,justifyContent:'space-between'}}>
     <Text style={{color:'white',fontSize:25,fontWeight:'bold',top:35}}>LAHORE</Text>
     <Text style={{color:'white',fontWeight:'bold',top:20,fontSize:40,left:10}}>32</Text>
   <Text style={{color:'white',fontSize:20,fontWeight:'bold',top:15,right:25}}>.C</Text>
   <View style={{top:12}}>
   <FontAwesome name={'circle'} size={60} color={'yellow'} />
   </View>
    </View>
    <View style={{flexDirection:'row',padding:20,left:25,bottom:20,justifyContent:'space-between'}}>
     <Text style={{color:'white',fontSize:25,fontWeight:'bold',right:20,top:35}}>ISLAMABAD</Text>
     <Text style={{color:'white',fontWeight:'bold',top:20,fontSize:40}}>17</Text>
   <Text style={{color:'white',fontSize:20,fontWeight:'bold',top:15,right:17}}>.C</Text>
   <View style={{top:10,right:20}}>
   <FontAwesome5  name={'cloud-showers-heavy'} size={60} color={'#E4D9D9'} />
   </View>
    </View>
    <View style={{flexDirection:'row',padding:20,left:25,bottom:30,justifyContent:'space-between'}}>
     <Text style={{color:'white',fontSize:25,fontWeight:'bold',right:20,top:35}}>FAISALABAD</Text>
     <Text style={{color:'white',fontWeight:'bold',top:20,fontSize:40,left:10}}>20</Text>
   <Text style={{color:'white',fontSize:20,fontWeight:'bold',top:15,right:3}}>.C</Text>
   <View style={{right:10}}>
   <FontAwesome name={'circle'} size={60} color={'yellow'} />
   <View style={{bottom:50}}>
   <FontAwesome5  name={'cloud'} size={60} color={'#E4D9D9'} />
   </View>
   </View>
    </View>
    <View style={{flexDirection:'row',bottom:80,left:25,justifyContent:'space-between'}}>
     <Text style={{color:'white',fontSize:25,fontWeight:'bold',top:35}}>RAWALPINDI</Text>
     <Text style={{color:'white',fontWeight:'bold',top:20,fontSize:40,left:10}}>28</Text>
   <Text style={{color:'white',fontSize:20,fontWeight:'bold',top:15,right:15}}>.C</Text>
   <View style={{right:40}}>
    <View style={{left:30}}>
   <FontAwesome name={'circle'} size={60} color={'yellow'} />
   </View>
   <View style={{bottom:50}}>
   <FontAwesome5  name={'cloud'} size={60} color={'#E4D9D9'} />
   </View>
   </View>
    </View>
    <View style={{flexDirection:'row',bottom:120,left:70,justifyContent:'space-between'}}>
     <Text style={{color:'white',fontSize:25,fontWeight:'bold',top:35,right:40}}>HYDERABAD</Text>
     <Text style={{color:'white',fontWeight:'bold',top:20,right:40,fontSize:40}}>17</Text>
   <Text style={{color:'white',fontSize:20,fontWeight:'bold',right:20,top:15,right:62}}>.C</Text>
   <View style={{top:10,right:75}}>
   <FontAwesome5  name={'cloud-moon-rain'} size={70} color={'#E4D9D9'} />
   </View>
    </View>
    </ScrollView>
  )
}

export default List

const styles = StyleSheet.create({})