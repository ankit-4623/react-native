import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import loginscreen from './loginscreen';

const home_screen = () => {
  const navigation = useNavigation();
  const handle_login = () =>{
     navigation.navigate("login")
  }
  const handle_singup = () =>{
    navigation.navigate("signup")
 }
  return (
    <View style={styles.con}>
    <Image
     
        source={require('../assets/home.png')}
        style={styles.card_img}
      />
      <Text style={styles.title}> E HOSPITAL SYSTEM</Text>
      <Text style={styles.subti}>E-Hospital system streamlines patient care with digital records, appointment scheduling, and real-time health monitoring for efficient, accessible healthcare.</Text>
      <View style={styles.buttonContainer}>
<TouchableOpacity style={styles.loginbot}
onPress={handle_login}>
  
  <Text style={styles.logintext}>LOGIN</Text>
</TouchableOpacity>
<TouchableOpacity onPress={handle_singup}>
  <Text style={styles.signuptext}>SIGN UP</Text>
</TouchableOpacity>
      </View>
    </View>
  )
}

export default home_screen

const styles = StyleSheet.create({
    con:{
    flex:1,
    backgroundColor:'#0F0326',
    alignItems:'center'
        
    },
    card_img:{
      height:250,
      width:250,
      marginVertical:50
    },
    title:{
      fontSize:36,
      fontWeight:'bold',
      textAlign:'center'
    },
    subti:{
      fontSize:12,
      marginHorizontal:20,
      marginVertical:20,
      textAlign:'center'
    },
    buttonContainer:{
      marginTop:20,
      flexDirection:'row',
      borderWidth:1,
      borderColor:'white',
      width:"80%",
      height:60,
      borderRadius:100,
    },
    loginbot:{
        justifyContent:'center',
        alignItems:'center',
        width:"55%",
        backgroundColor:'#c9122e',
        borderRadius:100,
        fontSize:18,
        
    },
    logintext:{

 flex:1,
 color:'white',
 paddingTop:20,
 fontWeight:'bold'
    },
    signuptext:{
      flex:1,
 color:'white',
 paddingTop:20,
 fontWeight:'bold',
 paddingLeft:40
    }


})