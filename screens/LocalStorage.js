import { StyleSheet, Text, View,Button, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

const LocalStorage = () => {

    const [value,setValue] = useState('')
    const {setItem,getItem} = useLocalStorage("value")
  return (
    <View>
      <Text>LocalStorage</Text>
      <TextInput
      placeholder = 'Enter to store'
      onChangeText={(text)=>setValue(text)}
      />
      <Button
      title = 'Set'
      onPress={()=>setItem(value)}
      />
      <Button
      title = 'Get'
      onPress={()=>console.log(getItem())}
      />
      <Button
      title = 'Remove'
      />
    </View>
  )
}

export default LocalStorage

const styles = StyleSheet.create({})