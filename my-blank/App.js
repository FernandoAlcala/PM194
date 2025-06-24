/* Zona 1: Importaciones*/
import { StyleSheet, View, Text, Button, TextInput, Alert, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [splash, setSplash] = useState(false);
  
  useEffect(() => {
    setTimeout(async() => {
      setSplash(true);
      await SplashScreen.hideAsync();
    }, 2000);
  }, []);
}    


/* Zona 3: Estética*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center', // Centra horizontalmente
    justifyContent: 'flex-start', // Arriba
    paddingTop: 40, // Espacio desde arriba (ajusta según necesidad)
  },
  text:{
    color:'black',
    fontSize: 27,
    fontFamily: 'Comic Sans MS',
    textAlign: 'center',
  },
  input: {
    width: 300,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    fontSize: 18,
    backgroundColor: '#f9f9f9',
  },
  red:{backgroundColor: 'red',},
  blue:{backgroundColor: 'blue',},
  green:{backgroundColor: 'green',},
});
