import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../../../screens/login/Login';


const Stack = createStackNavigator();

const Authentication = () => {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  )
}

export default Authentication;