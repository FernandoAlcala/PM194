/* Zona 1: Importaciones*/

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import React,{useState} from 'react';

const Texto = ({style}) => {
  const [contenido,setContenido] = useState('Hola Mundo React Native');
  const actualizarTexto = () => {setContenido('Estado actualizado del text');}
  return (
    <Text style={[styles.text,style]} onPress={actualizarTexto}> {contenido} </Text>
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
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
      <Texto style={styles.red} />
      <Texto style={styles.blue} />
      <Texto style={styles.green} />
      <Texto style={styles.red} />
      <Texto style={styles.blue} />
      <Texto style={styles.green} />
      <Texto style={styles.red} />
      <Texto style={styles.blue} />
      <Texto style={styles.green} />
      <Texto style={styles.red} />
      <Texto style={styles.blue} />
      <Texto style={styles.green} />
      <Texto style={styles.red} />
      <Texto style={styles.blue} />
      <Texto style={styles.green} />
      <Texto style={styles.red} />
      <Texto style={styles.blue} />
      <Texto style={styles.green} />
      <Texto style={styles.red} />
      <Texto style={styles.blue} />
      <Texto style={styles.green} />
      <Texto style={styles.red} />
      <Texto style={styles.blue} />
      <Texto style={styles.green} />
      <Texto style={styles.red} />
      <Texto style={styles.blue} />
      <Texto style={styles.green} />
      <Botonazo />
      <StatusBar style="auto" />
    </ScrollView>
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
