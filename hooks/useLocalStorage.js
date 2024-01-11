import AsyncStorage from '@react-native-async-storage/async-storage';


export const useLocalStorage = (key) => {

    const setItem = async (value) => {
        console.log("value is", value, key)

        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem(key, jsonValue)
        } catch {
            // error  handling
        }
    }

    const getItem = async (key) => {
        try {
          const item = await AsyncStorage.getItem(key);
          if(item){
            return JSON.parse(item)
          }
        } catch (error) {

        }
    }

    return { setItem,getItem};


}