import React, {useEffect} from 'react';
import { View, ActivityIndicator, AsyncStorage } from 'react-native';


const AuthLoad = ({ navigation }) => {

  useEffect(() => {
    loadData()
  },[])

  const loadData = async() => {
    const isLogin = await AsyncStorage.getItem('accessToken')
    navigation.navigate(!isLogin ? 'AuthStackNavigator' : 'AppStackNavigator')
  }

  return (
    <View style={{flex:1, alignItems: 'center', justifyContent: 'center',}}>
    <ActivityIndicator/>
    </View>
  )
}

export default AuthLoad
