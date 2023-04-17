import React, {useState} from 'react'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({

    mainView:{
        backgroundColor: '#192638', 
        flex:1,
        paddingHorizontal: 25,
        paddingVertical: 65
    },
    textProperty:{
        alignSelf:'center',
        color: 'white',
        fontSize: 26,
        paddingBottom: 20
    },
    textProperty2:{
        alignSelf:'center',
        color: 'white',
        fontSize: 16,
        paddingVertical: 10
    },
    input: {
        height: 40,
        margin: 12,
        borderBottomWidth: 2,
        borderRadius: 10,
        borderColor:'white',
        padding: 10,
        margin:20,
        color: 'white',
    },
    buttonView:{
        marginVertical: 20 
    }

})