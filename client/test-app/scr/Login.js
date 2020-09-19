import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Dimensions, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


const Login = () => {
  return (
    <LinearGradient
        colors={['#3549FB', '#4ED2DA']}
        start={[0, 0.2]}
        end={[0, 0.5]}
        location={[0.0002, 0.7493]}
        style={{
          position: 'absolute',
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
          left: 0,
          top: 0
        }}
    >
    <View style={styles.boxStyle}>
    <Text style={styles.loginTitleText}>Login</Text>
    <TextInput
      style={styles.emailInput}
      placeholder='Email'
    />
    <TextInput
      style={styles.passwordInput}
      placeholder='Password'
      secureTextEntry={true}
    />
    <TouchableOpacity
        style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Login</Text>
    </TouchableOpacity>
    </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  boxStyle: {
    backgroundColor: '#ffffff',
    borderRadius: 51,
    position: 'absolute',
    width: 375,
    height: 475,
    left: 0,
    top: Dimensions.get('window').height - ((Dimensions.get('window').height)*0.5)
  },
  loginTitleText: {
    position: 'absolute',
    width: 234.84,
    height: 28,
    left: 54,
    top: 35,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 23,
    lineHeight: 27,
    color: '#000000',
  },
  emailInput: {
    position: 'absolute',
    width: 267,
    left: 54,
    top: 100,
    borderBottomColor:'#3549FB',
    borderStyle:'solid',
    borderBottomWidth:1
  },
  passwordInput: {
    position: 'absolute',
    width: 267,
    left: 54,
    top: 150,
    borderBottomColor:'#3549FB',
    borderStyle:'solid',
    borderBottomWidth:1
  },
  loginButton: {
    position: 'absolute',
    width: 267,
    height: 33,
    left: 54,
    top: 230,
    backgroundColor: '#3549FB',
    borderRadius: 25.5
  },
  loginButtonText: {
    textAlign:'center',
    position: 'absolute',
    width: 111,
    height: 19,
    left: 68,
    top: 7,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 16.2857,
    lineHeight: 19,
    color: '#FFFFFF',
  },
});


export default Login
