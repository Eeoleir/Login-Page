import React, { useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import Logo from '../../../assets/pics/logo2.png'


export default function LoginForms({navigation}) {
  const [showPass, setShowPass] = useState(false);

  return (
    <View style = {styles.loginContainer}>
      <View style= {styles.logoContainer}>
        <Image source = {Logo} 
            style={styles.logo}
            resizeMode = 'contain'
        />
      </View>
      
      <View style= {styles.inputContainer}>
        <TextInput
          mode="outlined"
          placeholder="Email"
          style = {{marginBottom: 30}}/>

        <TextInput
          mode="outlined"
          placeholder="Password"
          secureTextEntry={!showPass}
          right={<TextInput.Icon icon={!showPass ? 'eye' : 'eye-off'}
          onPress={() => setShowPass(!showPass)} 
          style = {{}}
          />}/>
      </View>

      <View>
        <Button onPress={() => navigation.navigate('HomePage')} icon="login" mode="contained" style={styles.btn}>
          Login
        </Button>
        <Button onPress={() => navigation.navigate('RegistrationScreen')} 
        icon="account-plus" mode="contained" style={{...styles.btn, backgroundColor: '#223cfd'}}>
          Sign Up
        </Button>
      </View>
      
      <View>
          <TouchableOpacity onPress={() => navigation.navigate("Restore")}>
            <Text style = {{...styles.message, color:'white', fontWeight:'bold', marginTop: 20}}>Forgot Password?</Text>
          </TouchableOpacity>
      </View>

    </View>
  );
}
const styles = StyleSheet.create({
  loginContainer:{
    flexDirection: 'column',   
  },
  logoContainer:{
    width: '100%',
    alignItems:'center'
  },

  logo:{
    width: '50%', 
    height: 200, 
  },
  inputContainer:{
    marginTop:40,
    marginBottom:'10%'
  },
  
  btn:{
    padding:10,
    marginTop: 15
  }
})