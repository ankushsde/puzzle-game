//This is used to test, a new custom hook

import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import usePrevious from '../hooks/usePrevious'

const Counter = () => {
    const [count, setCount] = useState(0)
    const [name,setName] = useState('Kylie')

    const previousCount = usePrevious(count)

  return (
    <View>
        <Text>{count} - {previousCount}</Text>
        <Text>{name}</Text>
        <Button
        title='Increment'
        onPress={()=>setCount((changeCount)=>changeCount+1)}
        />
        <Button
        title = 'Change Name'
        onPress={()=>setName("Ron")}
        />
      
    </View>
  )
}

export default Counter

const styles = StyleSheet.create({})