import React, {useState} from 'react'
import { View, Text, TextInput, Button, Alert } from 'react-native'
import getData, {saveData, deleteAllDataFromStorage} from '../Components/FormFunctionalities'
import { styles } from '../Styles'

export default function Signup({navigation}) {
      
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    async function formSubmit() {

        if(!username || !email || !password || !confirmPassword){
            Alert.alert("Fields Required","All fields are mandatory")
        }
        else if(password != confirmPassword) {
            // Check if Password and Confirm Password is Same.
            Alert.alert( 'Oops', 'Password and Confirm Password not matched');
        }
        else if(password.length < 6){
            Alert.alert("Wrong Password Pattern","Password must be atleast 6 characters long")
        }
        else if(!email.includes("@") || !email.includes(".")){
            Alert.alert("Wrong Email Pattern","Please enter valid email")
        }
        else {
            // Check if email Already Exist
            const data = await getData(email)

            // If email not found then save data.
            if(data == null){
                saveData(username, email, password)
                setUsername("")
                setEmail("")
                setPassword("")
                setConfirmPassword("")
                navigation.navigate("login")
                Alert.alert( 'Congratulations!', 'Data Saved Successfully', [{  text: 'Done'} ]);
            }
            else{
                Alert.alert( 'Email Exists', 'The email you entered alredy exists');
            }
        }
    }

  return (
    <View style={styles.mainView}>
        <Text style={styles.textProperty}>
            Signup
        </Text>
        
        <TextInput
            style={styles.input}
            onChangeText={setUsername}
            placeholder= "User Name"
            placeholderTextColor= 'rgba(255,255,255,0.8)'
            value={username}
        />
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
        <TextInput
            style={styles.input}
            onChangeText={setConfirmPassword}
            value={confirmPassword}
            placeholder="Confirm Password"
            placeholderTextColor= 'rgba(255,255,255,0.8)'
        />
        <View style={styles.buttonView}>
            <Button title="Sign Up"  onPress={formSubmit} />
        </View>

        <View style={styles.buttonView}>
            <Button title="Go to Login Page" onPress={()=> {navigation.navigate('login')}} />
        </View>

    </View>
  )
}