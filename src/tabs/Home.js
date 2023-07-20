import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.title}>Ecomm User App</Text>
        </View>
      
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{flex:1},
    header:{
        width:'100%',
        height:70,
        backgroundColor:'white',
        elevation:5,
        justifyContent:'center',
        paddingTop:20,
        paddingBottom:10,
        paddingLeft:20

        
        
    },
    title:{
        fontSize:24,
        color:'purple',
        fontWeight:'600'
    }
})