import AsyncStorage from '@react-native-async-storage/async-storage';

export const setString = async (value: string, key: string) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      // saving error
      console.log("not working", e)
    }
};

export const getString = async (key: string) => {
    try {
      return await AsyncStorage.getItem(key);
    } catch (e) {
      // error reading value
    }
};

export const setJSON = async (value: any, key: string) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
      // saving error
    }
};

export const getJSON = async (key: string) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
    }
};