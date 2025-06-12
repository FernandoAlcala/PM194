/* Zona 1: Importaciones*/

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React,{useState} from 'react';

const Texto = () => {
  const [contenido,setContenido] = useState('Hola Mundo React Native');
  const actualizarTexto = () => {setContenido('Estado actualizado del text');}
  return (
    <Text onPress={actualizarTexto}> {contenido} </Text>
  );
}

const Botonazo = () => {
  const [texto, setTexto] = useState('No aprietes el botón');
  const actualizarBoton = () => { setTexto('😡'); };
  return (
    <Button title={texto} onPress={actualizarBoton}/>
  );
}

/* Zona 2: Main*/

export default function App() {
  return (
    <View style={styles.container}>
      <Button title='Presioname'></Button>
      <Botonazo></Botonazo>
      <Texto></Texto>
      <Texto></Texto>
      <Texto></Texto>
      <StatusBar style="auto" />
    </View>
  );
};

/* Zona 3: Estética*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
