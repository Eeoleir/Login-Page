import { View, Text, StyleSheet, Image, BackHandler, Alert } from 'react-native'
import { Button } from 'react-native-paper'
import Logo from '../../../assets/pics/logo.png'
import React, { useCallback, useEffect  } from 'react';

export default function HomePage({navigation}) {

  const handleBackPress = () => {
    Alert.alert(
      'Exit App',
      'Do you really want to exit?',
      [
        { text: 'No', style: 'cancel' },
        { text: 'Yes', onPress: () => BackHandler.exitApp() },
      ],
      { cancelable: false }
    );
    return true;
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackPress);
    return () => {
      backHandler.remove();
    };
  }, []);

  return (
    <View style = {styles.landingContainer}>
      <View style= {styles.logoContainer}>
        <Image source = {Logo} 
            style={styles.logo} resizeMode = 'contain'
        />
      </View>
      <View>
        <Text style = {styles.title}>
            Let's Start
        </Text>
        <Text style = {styles.description}>
            Unlock Your Potential, Beat Distraction, and Stay Focused with Pokus!
        </Text>
      </View>
      <View style = {styles.btnContainer}>
        <Button onPress={() => navigation.navigate("LandingPage")} icon="logout" mode="contained" style={styles.btn}>
          Logout
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
    title:{
        marginTop:50,
        color: 'white',
        textAlign: 'center',
        fontSize: 40,
        fontWeight: '900'
        
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