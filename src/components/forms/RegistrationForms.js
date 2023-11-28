import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import Logo from '../../../assets/pics/logo2.png'


export default function RegistrationForms({navigation}) {
  const [showPass, setShowPass] = useState(false);

  return (
      <View style = {styles.registrationContainer}>
        <View style= {styles.logoContainer}>
          <Image source = {Logo} 
              style={styles.logo} resizeMode = 'contain'
          />
        </View>
        
        <View style={styles.entryContainer}>
          <TextInput
            mode="outlined"
            placeholder="Name"
            style = {{marginBottom: 30}} />
            
          <TextInput
            mode="outlined"
            placeholder="Email"
            style = {{marginBottom: 30}} />

          <TextInput
            mode="outlined"
            placeholder="Password"
            secureTextEntry={!showPass}
            right={<TextInput.Icon icon={!showPass ? 'eye' : 'eye-off'}
            onPress={() => setShowPass(!showPass)} 
            style = {styles.box}
            />}/>
        </View>

        <View>
          <Button onPress={() => navigation.navigate("LoginScreen")} icon="account-plus" mode="contained" style={styles.btn}>
            Sign Up
          </Button>
        </View>
        <View style = {styles.messageContainer}>
          <Text style = {styles.message}>Already Have An Account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
            <Text style = {{...styles.message, color:'red', fontWeight:'bold'}}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>

  );
}
const styles = StyleSheet.create({
  registrationContainer:{
    backgroundColor: '#120052',
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
  entryContainer:{
    marginTop: 40
  },
  box:{
    marginBottom:3
  },
  
  btn:{
    padding:10,
    marginTop: 25,
    backgroundColor:'#223cfd'
  },
  messageContainer:{
    justifyContent:'center',
    marginTop:40,
    flexDirection:'row',
    
  },
  message:{
    textAlign:'center',
    color:'white',
    marginRight: 20,
    fontSize: 14
  },
  error:{
    color: 'red'
  }
  
})