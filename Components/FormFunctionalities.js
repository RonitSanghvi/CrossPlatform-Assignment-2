import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

    // Getting data
    export default async function getData(email) {

        try {
            const data = await AsyncStorage.getItem(email)

            if (data !== null) {
                const fetchedData = JSON.parse(data)
                return fetchedData
            }
            else return null

        } catch (error) {
            console.log(error);
        }
    };

    // Add Data to System
    export async function saveData(username, email, password) {

        try {
            const data = { username: username, password: password };
            await AsyncStorage.setItem(email, JSON.stringify(data));
        } catch (error) {
            console.log(error);
        }
    };

    export async function deleteAllDataFromStorage() {
        try {
          await AsyncStorage.clear();
          console.log('All data has been deleted.');
        } catch (error) {
          console.error(error);
        }
    }