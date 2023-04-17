import React from 'react'
import { View, Text } from 'react-native'
import { styles } from '../Styles'

function AboutUs() {
  return (
    <View style={styles.mainView}>
        <Text style={styles.textProperty}>
          Team Coding Comrades
        </Text>
        <Text style={styles.textProperty}>
          Assignment-2
        </Text>
        <Text style={styles.textProperty2}>
          {'\n'}{'\n'}Ronit Sanghvi {'\n'}{'\n'}Saunik Dabhi {'\n'}{'\n'}Masum Salvi {'\n'}{'\n'}Himanshu Makhija {'\n'}{'\n'}Karan Shah
        </Text>
    </View>
  )
}

export default AboutUs