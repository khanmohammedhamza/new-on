import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DefaultTheme,Provider as PaperProvider } from 'react-native-paper';
import Dietplantracker from './src/components/Dietplantracker';
import Header from "./src/components/Header"

import Home from "./src/components/Home"

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#800000',
    accent: '#f1c40f',
  }
}


export default function App() {
  const [page,setPage] = useState("Stats")
  const [dis,setDis] = useState(true)
  const onStats = () => {
    setPage("Stats")
    setDis(false)
  }

 

  const goBack = () => {
    setDis(true)
    setPage("Home")
  }

  return (
    <PaperProvider theme={theme}>
      <Header goBack={goBack} dis={dis}/>
      <Dietplantracker  />
    </PaperProvider>
  );
}
