import { View } from 'react-native'
import LoginForms from '../forms/LoginForms'

export default function LoginScreen(props) {
  return (
    <View style={{padding: 30, 
      justifyContent:'Center', flex: 1,
      backgroundColor: '#120052',}}>
      <LoginForms {...props} />
    </View>
  )
}
