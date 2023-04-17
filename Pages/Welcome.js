import React from 'react'
import { Button, View, Text } from 'react-native'
import { styles } from '../Styles'

function Welcome({route, navigation}) {

  const { email, username, password } = route.params ;

  return (
    <View style={styles.mainView}>
        <Text style={styles.textProperty}>
            Welcome, {username}
        </Text>
        <Text style={styles.textProperty2}>
          Email: {email}
        </Text>
        <Text style={styles.textProperty2}>
          Password: {password}
        </Text>
    </View>
  )
}

export default Welcome