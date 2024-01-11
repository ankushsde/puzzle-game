import { View, Text, SafeAreaView, TouchableOpacity , StyleSheet, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import EffectHook from '../hooks/effectHook'
import Counter from './Counter'

const LogInScreen = ({ navigation }) => {

    const onLogin = () => {
        console.log("LogIn")
        navigation.navigate('HomeScreen');

        
    }
    const onRegister = () => {
        console.log("Register")
    }

  return (
    <SafeAreaView style={styles.container}>
        {/* <Text style = {styles.title}>Welocme to Trivia Puzzle</Text> */}
        {/* <EffectHook/> */}
        <KeyboardAvoidingView>
        <TextInput
        placeholder='Email'
        />
        </KeyboardAvoidingView>
       
       <TouchableOpacity
       style={styles.logInButton}
       onPress={() =>onLogin()}
       >
        <Text style={styles.buttonText}>LogIn</Text>
      </TouchableOpacity>
      <TouchableOpacity
       style={styles.registerButton}
       onPress={() =>registerButton()}
       >
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <Counter/>
    </SafeAreaView>
  )
}

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
      logInButton: {
        backgroundColor: '#3498db',
         padding: 10,
        marginVertical: 5,
        width: 200,
        alignItems: 'center',
        borderRadius: 5,
      },
      registerButton: {
        backgroundColor: '#2ecc71',
         padding: 10,
        marginVertical: 5,
        width: 200,
        alignItems: 'center',
        borderRadius: 5,
      },
      buttonText: {
        color: '#fff',
        fontSize: 18,
      },
})

export default LogInScreen