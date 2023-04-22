import { StatusBar } from 'expo-status-bar';

import TabNavigation from './Components/TabNavigation';
import Signup from './Pages/Signup';
import Login from './Pages/Login';

// Navigations
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='signup'
          component={Signup}
          options= {{headerShown: false}}
        />
        <Stack.Screen 
          name='login'
          component={Login}
          options= {{headerShown: false}}
        />
        <Stack.Screen 
          name='userAccount'
          component={TabNavigation}
          options= {{headerShown: false}}
        />

      </Stack.Navigator>
    <StatusBar style='light' />
    </NavigationContainer>

  );
}