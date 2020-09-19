import React, {useEffect} from 'react';
import { View, ActivityIndicator, AsyncStorage, StyleSheet } from 'react-native';


const AuthLoad = ({ navigation }) => {

  useEffect(() => {
    loadData()
  },[])

  const loadData = async() => {
    const isLogin = await AsyncStorage.getItem('accessToken')
    navigation.navigate(!isLogin ? 'AuthStackNavigator' : 'AppStackNavigator')
  }

  return (
    <View style={styles.container}>
    <ActivityIndicator/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
})

export default AuthLoad
