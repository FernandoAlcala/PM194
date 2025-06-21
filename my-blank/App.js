/* Zona 1: Importaciones*/

import { StyleSheet, Text, Button, TextInput, Alert, ScrollView } from 'react-native';
import { useState } from 'react';


/* Zona 2: Main*/
export default function App() {
  const [nombre, setNombre]= useState('');
  const [password, setPassword]= useState('');
  const [comments, setComments]= useState('');
  const [age, setAge]= useState('');

const showAlert = () => {
  if (nombre.trim()=== '' || password.trim() === '' || age.trim() === '') {
    window.alert('Por favor, completa todos los campos obligatorios.');
  } else {
    window.alert(`Nombre: ${nombre}\nContrasena: ${password}\nEdad: ${age}\nComentarios: ${comments}`);
  }
}

  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      <Text style={styles.text}>Nombre:</Text>
      <TextInput style={styles.input}
        placeholder='Escribe tu nombre'
        value={nombre}
        onChangeText={setNombre}
      />

      <Text style={styles.text}>Contrasena</Text>
      <TextInput style={styles.input}
        placeholder='Escribe tu Contrasena'
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />

      <Text style={styles.text}>Edad</Text>
      <TextInput style={styles.input}
        placeholder='Escribe tu Edad'
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />

      <Text style={styles.text}>Comentarios multilinea</Text>
      <TextInput style={[styles.input, {height: 100, textAlignVertical: 'top'}]}
        placeholder='Escribe tus comentarios'
        value={comments}
        onChangeText={setComments}
        multiline={true}
        numberOfLines={4}
      />

      <Text style={styles.text}>Campo de solo lectura</Text>
      <TextInput style={styles.input}
        value="Este campo es de solo lectura"
        editable={false}
      />
      <Button title="Mostrar alerta" onPress={showAlert} />



    </ScrollView>
  );
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
