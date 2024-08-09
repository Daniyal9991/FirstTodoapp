import { StyleSheet, Text, View,ScrollView,Image} from 'react-native'
import React, { useEffect, useState } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
const Flat = () => {
    const [Week,setWeek]=useState([])
  const API_KEY='cee337c3c79e64ed08baec0edba038e8'
    useEffect(()=>{
        WeekWeather()
          },[])
    const WeekWeather=async ()=>{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=KARACHI&appid=${API_KEY}&units=metric`)
        const json=await response.json()
      setWeek(json.list)
      }
  return (
    <ScrollView style={{backgroundColor:'#514EFD',padding:20,top:50,borderRadius:20,margin:10}} showsVerticalScrollIndicator={false}>
    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
    <Text style={{fontSize:25,color:'white'}}>Next Forecast</Text>
    <MaterialCommunityIcons name={'calendar'} size={30} color={'white'} />
    </View>
    <View style={{flexDirection:'row',top:10,alignItems:'center',justifyContent:'space-between'}}>
      <Text style={{fontSize:25,color:'white'}}>Monday</Text>
      <Image source={require('../assets/images/rain.png')}/>
      <View style={{flexDirection:'row'}}>
        <Text style={{fontSize:25,color:'white'}}>{Week[0]?.main?.temp}</Text>
        <Text style={{fontSize:20,color:'white',bottom:5}}>.C</Text>
      </View>
    </View>
    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
      <Text style={{fontSize:25,color:'white'}}>Tuesday</Text>
      <Image source={require('../assets/images/cloud.png')}/>
      <View style={{flexDirection:'row'}}>
        <Text style={{fontSize:25,color:'white'}}>{Week[1]?.main?.temp}</Text>
        <Text style={{fontSize:20,color:'white',bottom:5}}>.C</Text>
      </View>
    </View>
    <View style={{flexDirection:'row',bottom:30,alignItems:'center',justifyContent:'space-between'}}>
      <Text style={{fontSize:25,color:'white'}}>Wednesday</Text>
      <Image source={require('../assets/images/cloudone.png')}/>
      <View style={{flexDirection:'row'}}>
        <Text style={{fontSize:25,color:'white'}}>{Week[2]?.main?.temp}</Text>
        <Text style={{fontSize:20,color:'white',bottom:5}}>.C</Text>
      </View>
    </View>
    <View style={{flexDirection:'row',bottom:60,alignItems:'center',justifyContent:'space-between'}}>
      <Text style={{fontSize:25,color:'white'}}>Thursday</Text>
      <Image source={require('../assets/images/cloudtwo.png')}/>
      <View style={{flexDirection:'row'}}>
        <Text style={{fontSize:25,color:'white'}}>{Week[3]?.main?.temp}</Text>
        <Text style={{fontSize:20,color:'white',bottom:5}}>.C</Text>
      </View>
    </View>
    <View style={{flexDirection:'row',bottom:50,alignItems:'center',justifyContent:'space-between'}}>
      <Text style={{fontSize:25,color:'white'}}>Friday</Text>
      <Image source={require('../assets/images/cloudthree.png')}/>
      <View style={{flexDirection:'row'}}>
        <Text style={{fontSize:25,color:'white'}}>{Week[4]?.main?.temp}</Text>
        <Text style={{fontSize:20,color:'white',bottom:5}}>.C</Text>
      </View>
    </View>
    <View style={{flexDirection:'row',bottom:40,alignItems:'center',justifyContent:'space-between'}}>
      <Text style={{fontSize:25,color:'white'}}>Saturday</Text>
      <Image source={require('../assets/images/cloud.png')}/>
      <View style={{flexDirection:'row'}}>
        <Text style={{fontSize:25,color:'white'}}>{Week[5]?.main?.temp}</Text>
        <Text style={{fontSize:20,color:'white',bottom:5}}>.C</Text>
      </View>
    </View>
    <View style={{flexDirection:'row',bottom:60,alignItems:'center',justifyContent:'space-between'}}>
      <Text style={{fontSize:25,color:'white'}}>Sunday</Text>
      <Image source={require('../assets/images/cloudfour.png')}/>
      <View style={{flexDirection:'row'}}>
        <Text style={{fontSize:25,color:'white'}}>{Week[6]?.main?.temp}</Text>
        <Text style={{fontSize:20,color:'white',bottom:5}}>.C</Text>
      </View>
    </View>
  </ScrollView>
  )
}

export default Flat

const styles = StyleSheet.create({})