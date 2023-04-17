import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Welcome from './Pages/Welcome';
import AboutUs from './Pages/AboutUs';
import Settings from './Pages/Settings';

function TabNavigation({route, navigation}) {

    const Tab = createBottomTabNavigator();
    const { email, username, password } = route.params ;

  return (
    <Tab.Navigator 
        initialRouteName='welcome' 
        screenOptions={{ tabBarStyle: {backgroundColor: '#192638'} }}
    >
        <Tab.Screen 
            name="welcome" 
            component={Welcome} 
            options={{
                tabBarIcon: ({ color, size }) => ( <Ionicons name="person" color={color} size={size} />), 
                headerShown: false
            }} 
            initialParams= {{email: email, username: username, password: password}}
        />
        <Tab.Screen 
            name='settings'
            component={Settings}
            options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => ( <Ionicons name="settings" color={color} size={size} /> )
            }}
        />
        <Tab.Screen 
            name="about us" 
            component={AboutUs} 
            options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => ( <Ionicons name="information-circle" color={color} size={size} /> )
            }} 
        />

    </Tab.Navigator>
    )
}

export default TabNavigation