import React, { useState } from 'react'
import { Button, View, Text } from 'react-native'
import { styles } from '../Styles'

function Welcome({route, navigation}) {

  const { email, username, password } = route.params ;
  const [passwordText, setPasswordText] = useState("********");
  const [showPassword, setShowPassword] = useState(true);

  function funcShowPassword() {

    setShowPassword(!showPassword)    
    if(showPassword){
      setPasswordText(password)
    }
    else{setPasswordText("********")}
  }


  return (
    <View style={styles.mainView}>
        <Text style={styles.textProperty}>
            Welcome, {username}
        </Text>
        <Text style={styles.textProperty2}>
          Email: {email}
        </Text>
        <Text style={styles.textProperty2} id='idPasswordText' >
          Password: {passwordText}
        </Text>
        <View style={styles.buttonView}>
          <Button title='Show or Hide Password' onPress={() => {funcShowPassword()}}/>
        </View>
    </View>
  )
}

export default Welcome