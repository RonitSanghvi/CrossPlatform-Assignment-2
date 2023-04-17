import React, {useState} from 'react'
import { View, Text, TextInput, Button, Alert } from 'react-native'
import getData from '../Components/FormFunctionalities'
import { styles } from '../Styles'

export default function Login({navigation}) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")   
    
    async function formSubmit() {

        if(email || password){

            const data = await getData(email)
            if(data !== null){

                // Check for password here
                if(data.password == password){
                    setEmail("")
                    setPassword("")
                    navigation.navigate('userAccount', {email: email, username: data.username, password: data.password})
                }
                else {
                    Alert.alert( 'Wrong Password', 'Please enter the correct password');
                }
            }
            else{ Alert.alert( "OOPS", "Email doesn't exist") }
        
        }
        else {
            Alert.alert("Fields Required","All fields are mandatory")
        }
    }

  return (
    <View style={styles.mainView}>

        <Text style={styles.textProperty}>
            Login
        </Text>

        <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            placeholder="Email"
            placeholderTextColor= 'rgba(255,255,255,0.8)'
        />
        <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            placeholder="Password"
            placeholderTextColor= 'rgba(255,255,255,0.8)'
        />

        <View style={styles.buttonView}>
            <Button title="Login"  onPress={formSubmit} />
        </View>

        <View style={styles.buttonView}>
            <Button title="Go to Signup Page"  onPress={()=> {navigation.navigate("signup")} } />
        </View>

    </View>
  )
}