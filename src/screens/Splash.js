import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const Splash = () => {
    const navigation=useNavigation()
useEffect(()=>{
    setTimeout(()=>{
        navigation.navigate("Main")
        //console.log("Hello")
    },2000)
},[])
  return (
    <View style={styles.container}>
      <Text style={styles.logo} >Ecomm User App</Text>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'purple'
    },
    logo:{
        fontSize:30,
        color:'white'
    }
})