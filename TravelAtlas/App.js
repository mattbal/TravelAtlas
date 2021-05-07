import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabBar from './components/TabBar';
import GetStarted from './View/GetStarted';
import Login from './View/Login';
import Signup from './View/Signup';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
} from '@expo-google-fonts/inter';
import { connect } from 'react-redux';

export default function App() {
  let [fontsLoaded, error] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
  });

  const Stack = createStackNavigator();

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Get Started'
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name='Get Started' component={GetStarted} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Signup' component={Signup} />
        <Stack.Screen name='TabBar' component={TabBar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
