import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import LoginRegister from './scr/LoginRegister'
import Register from './scr/Register'
import Login from './scr/Login'
import Main from './scr/Main'
import AuthLoad from './scr/AuthLoad'

export default function App() {
  return (
    <AppNavigator/>
  );
}

const AppStackNavigator = createStackNavigator({
  Main: {
    screen:Main
  },
})

const AuthStackNavigator = createStackNavigator({
  LoginRegister: {
  screen:LoginRegister,
    navigationOptions: () => ({
          headerShown: false,
    }),
  },
  Register: {
    screen:Register,
    navigationOptions: () => ({
          headerTransparent: true,
          title:'',
          headerTintColor:'white'
    }),
  },
  Login:{
    screen:Login,
    navigationOptions: () => ({
          headerTransparent: true,
          title:'',
          headerTintColor:'white'
    }),
  },
})

const AppNavigator = createAppContainer(createSwitchNavigator({
  AuthLoad:AuthLoad,
  AppStackNavigator:AppStackNavigator,
  AuthStackNavigator:AuthStackNavigator
}))
