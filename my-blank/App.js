/* Zona 1: Importaciones*/
import { StyleSheet, View, Text, ImageBackground, ScrollView, ActivityIndicator} from 'react-native';
import { useState, useEffect } from 'react';

export default function App() {
  return (
    <ScrollView 
    contentContainerStyle={styles.text} 
    showsVerticalScrollIndicator={false}>
      <Text>Hola Mundo</Text>
      
    </ScrollView>
  )
}

/* Zona 3: Estética*/
const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 40,
    backgroundColor: 'rgba(255,255,255,0.0)',
  },
  text: {
    color: 'black',
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
  red: { backgroundColor: 'red' },
  blue: { backgroundColor: 'blue' },
  green: { backgroundColor: 'green' },
});
