import { View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import { Button, TextInput, IconButton } from 'react-native-paper';
import Logo from '../../../assets/pics/logo2.png'

export default function Restore({navigation}) {
  return (
    <View style = {styles.restoreContainer}>

      <View style= {styles.logoContainer}>
        <Image source = {Logo} 
            style={styles.logo}
            resizeMode = 'contain'
        />
      </View>

      <View>
        <Text style = {styles.title}>
            Restore Password
        </Text>
      </View>

      <View style= {styles.inputContainer}>
        <TextInput
          mode="outlined"
          placeholder="Email"
          style = {{marginBottom: 30}}/>
      </View>

      <View>
        <Button icon="send" mode="contained" style={styles.btn} onPress={() => alert('DONE SENDING INSTRUCTIONS')}>
        Send Reset Instructions
        </Button>
      </View>

      <View style = {styles.messageContainer}>
      <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
          <Text style={styles.message}>Back To Sign In</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
    restoreContainer:{
        flex: 1,
        backgroundColor: '#120052',
        flexDirection: 'column', 
        padding: 60  
      },
      logoContainer:{
        width: '100%',
        alignItems:'center'
      },
    
      logo:{
        width: '50%', 
        height: 200, 
      },
      title:{
        marginTop:20,
        fontSize: 30,
        fontWeight: '400',
        color: 'white',
        fontStyle: 'italic',
        textAlign: 'center'   
    },

    inputContainer:{
        marginTop:'15%',
        marginBottom:'10%'
      },
    
    btn:{
        padding:10,
    },
    messageContainer:{
        marginTop: '10%',
    },
    message:{
        color:'red',
        fontWeight:'700',
        marginRight: 20,
        fontSize: 15
      }
})