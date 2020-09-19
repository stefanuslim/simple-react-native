import React, {useState} from 'react';
import { Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView, AsyncStorage, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles/Login.style'

const Login = ({ navigation }) => {
  const [email,setEmail] = useState('')
  const [pass, setPass] = useState('')

  const localIP = '192.168.1.89'
  const handleLogin = () => {
    fetch(`http://${localIP}:3000/login`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: pass,
      }),
    })
    .then((response) => response.json())
    .then(async (res)=>{
      if(res.message){
        Alert.alert('Login Failed')
      }
      else{
        await AsyncStorage.setItem('accessToken',res.accessToken)
        navigation.navigate('Main')
      }
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  return (
    <LinearGradient
        colors={['#3549FB', '#4ED2DA']}
        start={[0, 0.2]}
        end={[0, 0.5]}
        location={[0.0002, 0.7493]}
        style={styles.linearGradient}
    >
    <KeyboardAvoidingView
      behavior={"position"}
      style={styles.container}
    >
    <View style={styles.boxStyle}>
    <Text style={styles.loginTitleText}>Login</Text>
    <TextInput
      style={styles.emailInput}
      placeholder='Email'
      onChangeText={email => setEmail(email)}
    />
    <TextInput
      style={styles.passwordInput}
      placeholder='Password'
      secureTextEntry={true}
      onChangeText={pass => setPass(pass)}
    />
    <TouchableOpacity
        onPress={() => handleLogin()}
        style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Login</Text>
    </TouchableOpacity>
    </View>
    </KeyboardAvoidingView>
    </LinearGradient>
  )
}

export default Login
