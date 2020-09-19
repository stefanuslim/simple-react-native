import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles/LoginRegister.style';

const LoginRegister = ({ navigation }) => {
  return (
    <LinearGradient
        colors={['#3549FB', '#4ED2DA']}
        start={[0, 0.2]}
        end={[0, 0.5]}
        location={[0.0002, 0.7493]}
        style={styles.linearGradient}
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

export default LoginRegister
