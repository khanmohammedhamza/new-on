import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DefaultTheme,Provider as PaperProvider } from 'react-native-paper';
import Dietplantracker from './src/components/Dietplantracker';
import Header from "./src/components/Header"

import Home from "./src/components/Home"


import AuthNavigation from './src/components/AuthNavigation';


const App = () => {
  return <AuthNavigation/>
}

export default App;
