import React, {useState} from 'react';
import { Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles/Register.style'

const Register = ({navigation}) => {
  const [email,setEmail] = useState('')
  const [pass, setPass] = useState('')

  const localIP = '192.168.1.89'
  const handleRegister = () => {
    fetch(`http://${localIP}:3000/register`, {
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
    .then((res)=>{
      if(res.message){
        Alert.alert('Register Failed')
      }
      else{
        navigation.navigate('Login')
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
    <Text style={styles.registerTitleText}>Register New Account</Text>
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
        onPress={() => handleRegister()}
        style={styles.registerButton}>
        <Text style={styles.registerButtonText}>Create Account</Text>
    </TouchableOpacity>
    </View>
    </KeyboardAvoidingView>
    </LinearGradient>
  )
}



export default Register
