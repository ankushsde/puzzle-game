import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import consoleHook from './consoleHook';

const effectHook = () => {

  const [count, setCount]= useState(0);
  // consoleHook(count)
  const hookCount = consoleHook(count)


  return (
    <View>
      <Text>hi your count {count}</Text>
      <Text>hook count {hookCount}</Text>

      <Button
      title ='press'
      onPress={()=>setCount(count+1)}
      />
      
    </View>
  )
}

export default effectHook

const styles = StyleSheet.create({})