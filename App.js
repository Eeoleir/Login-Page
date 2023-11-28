import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PaperProvider } from 'react-native-paper';
import LoginScreen from './src/components/screens/LoginScreen';
import LandingPage from './src/components/screens/LandingPage';
import RegistrationScreen from './src/components/screens/RegistrationScreen';
import Restore from './src/components/screens/Restore';
import HomePage from './src/components/screens/HomePage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider >
      <SafeAreaView style = {{flex:1}}>

        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name='LandingPage' component={LandingPage} options={{ headerShown: false }}/>
            <Stack.Screen name='LoginScreen' component={LoginScreen} options={{ headerShown: false }}/>
            <Stack.Screen name='RegistrationScreen' component={RegistrationScreen} options={{ headerShown: false }}/>
            <Stack.Screen name='Restore' component={Restore} options={{ headerShown: false }}/>
            <Stack.Screen name='HomePage' component={HomePage} options={{ headerShown: false }}/>
          </Stack.Navigator>
        </NavigationContainer>
        
      </SafeAreaView>
    </PaperProvider> 
  );
}

