import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [secureEntry, setSecureTextEntry] = useState(true);

  const logback = () => {
    navigation.goBack()
  };
  const log_in=()=>{
    navigation.navigate('login')
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btu} onPress={logback}>
        <Icon name="arrow-back-circle-outline" color='black' size={30} />
      </TouchableOpacity>

      <View style={styles.text_container}>
        <Text style={styles.text_in_log}>Fill out the form </Text>
        <Text style={styles.text_in_log}>Below to get Started</Text>
        
      </View>
      <View style={styles.form_container}>
       <View style={styles.in_container}>
       <Icon name="phone-portrait-outline" color='black' size={30} />
          <TextInput
            style={styles.text_in}
            placeholder='Enter Your Phone No'
            placeholderTextColor='black'
            keyboardType='number-pad'
          />
       </View>
      </View>

      <View style={styles.form_container}>
        <View style={styles.in_container}>
          <Icon name="mail-outline" color='black' size={30} />
          <TextInput
            style={styles.text_in}
            placeholder='Enter Your Email'
            placeholderTextColor='black'
            keyboardType='email-address'
          />
        </View>
      </View>

      <View style={styles.form_container}>
        <View style={styles.pass_container}>
          <Icon name="lock-closed-outline" color='black' size={30} />
          <TextInput
            style={styles.text_in}
            placeholder='Enter Your Password'
            placeholderTextColor='black'
            secureTextEntry={secureEntry}
          />
          <TouchableOpacity onPress={() => setSecureTextEntry(prev => !prev)}>
            <Icon name={secureEntry ? "eye-outline" : "eye-off-outline"} size={30} color='black' />
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <TouchableOpacity>
          <Text style={styles.forgot_pass_txt}>Forgot Password</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.log_in_btu_wrap}>
          <Text style={styles.log_in_btu}>Sign Up</Text>
        </TouchableOpacity>
        <Text style={styles.continue_txt}>or continue with</Text>
        <TouchableOpacity style={styles.google_btu}>
          <Image source={require('../assets/google.png')} style={styles.g_img}/>
          <Text style={styles.google_txt}>Google</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.sign_con}>
        <Text style={styles.acco}>Already have an account? </Text>
        <Text style={styles.sign_up} onPress={log_in}>Log in here</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  btu: {
    height: 30,
    width: 30,
    backgroundColor: 'gray',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text_container: {
    marginVertical: 20,
  },
  text_in_log: {
    color: 'black',
    fontSize: 40,
    fontWeight: 'bold',
  },
  in_container: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 100,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: 'center',
   
  },
  form_container: {
    marginTop: 10,
  },
  text_in: {
    flex: 1,
    paddingHorizontal: 10,
    color: 'black',
  },
  pass_container: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 100,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
  },
  forgot_pass_txt: {
    color: 'blue',
    marginTop: 20,
    textAlign: 'right',
    paddingRight:6,
  },

  log_in_btu:{
 fontSize:20,
 fontWeight:'bold',
 textAlign:'center',
 padding:15,


  },
  log_in_btu_wrap:{
    backgroundColor:'black',
    borderRadius:100,
   marginTop:10,
  },
  continue_txt:{
    color:'black',
    textAlign:'center',
    marginVertical:5,
    fontWeight:'600'
  },
  google_btu:{
    borderWidth:2,
    borderRadius:100,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent:'center',
  },
  google_txt:{
    color:'black',
    textAlign:'center',
    padding:15,
    fontWeight:'bold',
    fontSize:20,
    
  },
  g_img:{
    height:20,
    width:20,
    
  },
  acco:{
color:'black'
  },
  sign_up:{
    color:'blue',
    fontWeight:'bold'
  },
  sign_con:{
     flexDirection:'row',
     gap:2,
     justifyContent:'center',
     alignItems:'center',
     marginVertical:10,
  }

});

export default LoginScreen;
