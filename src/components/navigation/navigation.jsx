import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dietplantracker from 'C:/Users/80E502UKIN/Desktop/plswork/new-on/src/components/Dietplantracker';
import LoginScreen from 'C:/Users/80E502UKIN/Desktop/plswork/new-on/src/components/LoginScreen'
import SignupScreen from 'C:/Users/80E502UKIN/Desktop/plswork/new-on/src/components/SignupScreen'
const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

/*const Dietplantracker = () => {
    return(
      <dietplantracker />
    );
  } */
export const SignedOutStack = () => (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName='LoginScreen'
           //screenOptions = {screenOptions}
        >
            <Stack.Screen name='LoginScreen' component={LoginScreen} />
            <Stack.Screen name='SignupScreen' component={SignupScreen} />
        </Stack.Navigator>
    </NavigationContainer>
)

export const SignedInStack = () => {
    return < Dietplantracker /> 
    
}
