import { View, Text, StyleSheet, Image } from 'react-native'
import { Button } from 'react-native-paper'
import Logo from '../../../assets/pics/logo.png'

export default function LandingPage({navigation}) {
  return (
    <View style = {styles.landingContainer}>
      <View style= {styles.logoContainer}>
        <Image source = {Logo} 
            style={styles.logo} resizeMode = 'contain'
        />
      </View>
      <View>
        <Text style = {styles.description}>
            Unlock Your Potential, Beat Distraction, and Stay Focused with Pokus!
        </Text>
      </View>
      <View style = {styles.btnContainer}>
        <Button onPress={() => navigation.navigate("LoginScreen")}  icon="login" mode="contained" style={styles.btn}>
          Login
        </Button>
        <Button onPress={() => navigation.navigate("RegistrationScreen")} icon="account-plus" mode="contained" style={{ ...styles.btn, backgroundColor: 'white' }}
        labelStyle={{ color: 'black' }}>
          Sign Up
        </Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    landingContainer:{
        flex: 1,
        backgroundColor: '#120052',
        flexDirection: 'column',
        alignItems:'center',
        padding:30
    },
    logoContainer:{
        marginTop:'40%',
        width:'100%'
    },

    logo:{
         left: 10,
         width: '100%', 
         height: 130, 
    },
    description:{
        marginTop:50,
        color: 'white',
        textAlign: 'center'
        
    },
    btnContainer:{
        width:'80%'
        
    },
    btn:{
        padding:10,
        marginTop: 25
    }
})