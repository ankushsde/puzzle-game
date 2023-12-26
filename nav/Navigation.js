import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import CategorySelectionScreen from '../screens/CategorySelectionScreen';
import GameScreen from '../screens/GameScreen';
import LeaderboardScreen from '../screens/LeaderboardScreen';


const Stack = createStackNavigator();

const Navigation = () => {
  return (
  <NavigationContainer>
    <Stack.Navigator >
        <Stack.Screen name='CategoryScreen' component ={CategorySelectionScreen}/>
        <Stack.Screen name='GameScreen' component ={GameScreen}/>
        <Stack.Screen name='LeaderboardScreen' component ={LeaderboardScreen}/>
    </Stack.Navigator>
  </NavigationContainer>
  
  )
}

export default Navigation