import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import CategorySelectionScreen from '../screens/CategorySelectionScreen';
import GameScreen from '../screens/GameScreen';
import LeaderboardScreen from '../screens/LeaderboardScreen';
import LogInScreen from '../screens/LogInScreen';
import HomeScreen from '../screens/HomeScreen';


const Stack = createStackNavigator();

const Navigation = () => {
  return (
  <NavigationContainer>
    <Stack.Navigator >
        <Stack.Screen name='LogInScreen' component ={LogInScreen}/>
        <Stack.Screen name='HomeScreen' component={HomeScreen}/>
        <Stack.Screen name='CategoryScreen' component ={CategorySelectionScreen}/>
        <Stack.Screen name='GameScreen' component ={GameScreen}/>
        <Stack.Screen name='LeaderboardScreen' component ={LeaderboardScreen}/>
    </Stack.Navigator>
  </NavigationContainer>
  
  )
}

export default Navigation