import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../Styles'

function Settings({navigation}) {
  return (
    <View style={styles.mainView}>
        <Text style={styles.textProperty}>
            Settings Page
        </Text>
        <Button title='Log Out' onPress={()=> {navigation.navigate('signup')}} />
    </View>
  )
}

export default Settings