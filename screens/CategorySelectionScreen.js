import React, { useState,useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import jsonData from "../data.json"

const CategorySelectionScreen = ({ navigation }) => {

  const [jsonData,setJsonData]=useState([]);

 
  const fetchData = async () => {
    try {
      // Assuming data.json is in the public folder
      const response = await fetch('../data.json');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setJsonData(data);
    } catch (error) {
      console.error('Error fetching JSON data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const startGame = (category) => {
    // Navigate to the game screen with the selected category
    navigation.navigate('GameScreen', { category });
  };
  const goToLeaderboard = () => {
    // Navigate to the leaderboard screen
    navigation.navigate('LeaderboardScreen');
  };

  

 
  return (
    <View style={styles.container}>
          <Text style={styles.title}>Welcome to Puzzle Game</Text>
      <TouchableOpacity style={styles.categoryButton} onPress={() => startGame('animals')}>
        <Text style={styles.buttonText}>Animals</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.categoryButton} onPress={() => startGame('countries')}>
        <Text style={styles.buttonText}>Countries</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.categoryButton} onPress={() => startGame('fruits')}>
        <Text style={styles.buttonText}>Fruits</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.startButton} onPress={() => startGame('')}>
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.leaderboardButton} onPress={goToLeaderboard}>
        <Text style={styles.buttonText}>Leaderboard</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  categoryButton: {
    backgroundColor: '#3498db',
    padding: 10,
    marginVertical: 5,
    width: 200,
    alignItems: 'center',
    borderRadius: 5,
  },
  startButton: {
    backgroundColor: '#2ecc71',
    padding: 10,
    marginVertical: 10,
    width: 200,
    alignItems: 'center',
    borderRadius: 5,
  },
  leaderboardButton: {
    backgroundColor: '#e74c3c',
    padding: 10,
    marginVertical: 10,
    width: 200,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default CategorySelectionScreen;
