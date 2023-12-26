import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const GameScreen = () => {
  const word = 'iolnio';

  const [selectedLetter, setSelectedLetter]= useState([]);
  const [updatedLetters,setUpdatedLetters] = useState([])

  const handleLetterPress = (letter)=>{
  setSelectedLetter([
    ...selectedLetter,letter
  ])

  if (selectedLetter.includes(letter)) {
    // If selected, remove it from the list
    setSelectedLetter(selectedLetter.filter(selectedLetter => selectedLetter !== letter));
  }     

  }
  
   const wordLength = word.length;
 

  const WordBoxes = (wordLength,selectedLetter) => {
      const boxes = selectedLetter.map((letter,index)=>{ 
        return (
        <Text key={index}  style={{ fontSize: 20, marginRight: 10 }}> 
         {selectedLetter.includes(letter) ? letter : "-"} 
         </Text>
       )})

    return <View style={styles.wordButton} >{boxes}</View>;
  };
   


  const renderLetterButtons = () =>{
   return (
    <View style={styles.buttonContainer}>
      {word.split('').map((letter,index)=>(
        <TouchableOpacity
         key={index}
         style={styles.letterButton}
         onPress={()=>handleLetterPress(letter)}
        >
          <Text style={styles.buttonText}>{letter}</Text>
        </TouchableOpacity>
      ))}
    </View>
   )
  }


  return (
    <View style={styles.container}>
      <Text style={styles.word}>{word}</Text>
      {WordBoxes(wordLength,selectedLetter)}
       {/* {renderWordBlanks()} */}
        {renderLetterButtons()}
        
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  word: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  letterButton: {
    backgroundColor: "green",
    padding: 10,
    margin: 5,
    borderRadius: 5
  },
  wordButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "powderblue",
    padding: 10,
    margin: 5,
    borderRadius: 5
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default GameScreen;
