/* Zona 1: Importaciones*/

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Switch } from 'react-native';
import { useState } from 'react';

const Interruptor = ()=> {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
        <Text style={styles.text}>
          {isEnabled ? 'Activado' : 'Desactivado'}
        </Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
    </View>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <Interruptor />
    </View>
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
  red:{backgroundColor: 'red',},
  blue:{backgroundColor: 'blue',},
  green:{backgroundColor: 'green',},
});
