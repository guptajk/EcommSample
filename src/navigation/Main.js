import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{ useState } from 'react'
import Home from '../tabs/Home'
import Search from '../tabs/Search'
import Cart from '../tabs/Cart'
import Wishlist from '../tabs/Wishlist'
import User from '../tabs/User'

const Main = () => {
  const [activeTab,setActiveTab] = useState(0)
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'}/>
      {activeTab==0?(<Home/>):activeTab==1?(<Search/>):activeTab==2?(<Cart/>):activeTab==3?(<Wishlist/>):(<User/>)}
      <View style={styles.bottemView}>
        <TouchableOpacity style={styles.tab} onPress={()=>{
          setActiveTab(0)
        }}>
          <Image source={require('../images/home.png')} style={[styles.tabIcon,{tintColor:activeTab==0?'purple':'black'}]}></Image>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab} onPress={()=>{
          setActiveTab(1)
        }}>
          <Image source={require('../images/search.png')} style={[styles.tabIcon,{tintColor:activeTab==1?'purple':'black'}]}></Image>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab} onPress={()=>{
          setActiveTab(2)
        }}>
          <Image source={require('../images/cart.png')} style={[styles.tabIcon,{tintColor:activeTab==2?'purple':'black'}]}></Image>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab} onPress={()=>{
          setActiveTab(3)
        }}>
          <Image source={require('../images/wishlist.png')} style={[styles.tabIcon,{tintColor:activeTab==3?'purple':'black'}]}></Image>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab} onPress={()=>{
          setActiveTab(4)
        }}>
          <Image source={require('../images/user.png')} style={[styles.tabIcon,{tintColor:activeTab==4?'purple':'black'}]}></Image>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Main

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  bottemView:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems:'center',
    height:60,
    width:'100%',
    position:'absolute',
    bottom:0,
    backgroundColor:'white',
    elevation:4,
    borderTopLeftRadius:20,
    borderTopRightRadius:20
  },
  tab:{
    width:"20%",
    alignItems:'center',
    justifyContent:'center'
  },
  tabIcon:{
    width:30,
    height:30 
  }
})