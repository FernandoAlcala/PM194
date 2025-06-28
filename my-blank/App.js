/* Zona 1: Importaciones*/
import { StyleSheet, View, Text, Button } from 'react-native';
import { useState } from 'react';
import { ActivityIndicator } from 'react-native-web';

export default function App() {
  const [loading, setLoading] = useState(false);
  const [mensaje, setMensaje] = useState('');

  const simularCarga = () => {
      setLoading(true);
      setMensaje('');
      setTimeout(() => {
        setLoading(false);
        setMensaje('Carga completa');
      }, 3000);
  }

  return (
      <View style={styles.background}>
        <Text style={styles.text}>Carga</Text>
        {loading ? (
          <>
            <ActivityIndicator size="large" color="#2D9CDB" />
            <Text style={styles.text}>Cargando...</Text>
          </>
        ) : (
          <>
            <Button title="Simular Carga" onPress={simularCarga} />
            {mensaje !== '' && <Text style={styles.text}>{mensaje}</Text>}
          </>
        )}
      </View>
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
