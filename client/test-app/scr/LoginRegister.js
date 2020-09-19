import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const LoginRegister = ({ navigation }) => {
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
    <View style={styles.container}>
    <TouchableOpacity
        onPress={() => navigation.navigate('Register')}
        style={styles.buttonRegister}>
        <Text style={styles.registerText}>Register Account</Text>
    </TouchableOpacity>
    </View>
    <View style={styles.container}>
    <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={styles.buttonLogin}>
        <Text style={styles.loginText}>Login</Text>
    </TouchableOpacity>
    </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonRegister: {
    borderRadius: 25.5,
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    width: 267,
    height: 33,
    left: 54,
    top: Dimensions.get('window').height - ((Dimensions.get('window').height)*0.273)
  },
  buttonLogin: {
    borderRadius: 25.5,
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    width: 267,
    height: 33,
    left: 54,
    top: Dimensions.get('window').height - ((Dimensions.get('window').height)*0.1785)
  },
  registerText: {
    position: 'absolute',
    width: 128,
    height: 19,
    left: 70,
    top: 7,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 16.2857,
    lineHeight: 19,
    textAlign: 'center',
    color: '#000000'
  },
  loginText: {
    position: 'absolute',
    width: 122,
    height: 19,
    left: 73,
    top: 7,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 16.2857,
    lineHeight: 19,
    textAlign: 'center',
    color: '#000000'
  },
});

export default LoginRegister
