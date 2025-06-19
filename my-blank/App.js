/* Zona 1: Importaciones*/

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Switch } from 'react-native';
import { useState } from 'react';

const Texto = ({style}) => {
  const [contenido, setContenido] = useState('Hola Mundo RNative');
  const actualizatexto = () => setContenido('Hola mundo como estas?');
  return(
    <View style={{margin: 10}}>
    <Text style={[styles.text, style]}>{contenido}</Text>
    <Button title='actualizartexto' onPress={actualizatexto} color="red"/>
    </View>
  )
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
      <Texto style={styles.red} />
      <Texto style={styles.blue} />
      <Texto style={styles.green} />
      <StatusBar style="auto" />
      <Botonazo />
    </View>
  );
}

/* Zona 3: Estética*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'baseline',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  text:{
    color:'black',
    fontSize: 27,
    fontFamily: 'Comic Sans MS',
    /* Estas distancias no son en pixeles, son distancias relativas*/
    /*height: 100,
    width: 300,*/
    textAlign: 'center',
  },
  // El flex ocupa todo lo que ocupa de la pantalla
  // En este caso rojo ocupa 1/6, azul 2/6 y verde 3/6
  // El orden de los estilos es importante, el último estilo es el que prevalece
  // Si no se especifica el flex, ocupa todo el espacio disponible
  red:{backgroundColor: 'red',},
  blue:{backgroundColor: 'blue',},
  green:{backgroundColor: 'green',},
});
