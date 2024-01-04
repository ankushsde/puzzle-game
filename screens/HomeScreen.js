import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import Animated from 'react-native-reanimated'


const HomeScreen = () => {
    const [searchedItem, setSearchedItem] = useState('')

    const [iconValue , setIconValue ] = useState(0)

    const animation = useSharedValue()
    const animatedStyle = useAnimatedStyle(()=>{
        
        return {
            width: 
                animation.value == 1 
                ? withTiming(300,{duration:500})
                : withTiming(0,{duration:500})             
        } 
    })  

    const searchFunc = (searchedItem) => {
        console.log("submitted", searchedItem)

    }


    return (
        <View style={styles.container}>
            <Animated.View style={[styles.searchView,animatedStyle]}>
                <TextInput
                    style={styles.searchBar}
                    placeholder='Search here...'
                    onChangeText={(text) => setSearchedItem(text)}
                    onSubmitEditing={searchFunc(searchedItem)}
                />
                <TouchableOpacity
                onPress={()=>{
                    if(animation.value == 1){
                        animation.value = 0
                        setIconValue(0)
                    } else {
                        animation.value = 1
                        setIconValue(1)
                    }
                }}
                >
                    <Image source={ iconValue == 1  
                    ? require('../assets/icons/cancel_icon.png')
                    : require('../assets/icons/search_icon.png')
                } style={{width: iconValue == 1? 30 : 25,height: iconValue == 1? 30 : 25}} />
                </TouchableOpacity>
            </Animated.View>


        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    searchBar: {
        // borderWidth:2,
        // borderColor:"black",
        width: '85%',
        padding: 5,
        margin: 5
    },
    searchView: {
        width: 300,
        height: 50,
        backgroundColor: "#b8bc86",
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        


    }
})