/* Zona 1: Importaciones*/
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import { useState, useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [splash, setSplash] = useState(false);

  useEffect(() => {
    setTimeout(async () => {
      setSplash(true);
      await SplashScreen.hideAsync();
    }, 2000);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require('./assets/20230101_000907A.jpg')}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <Text style={styles.red}>Bienvenido a mi App</Text>
          <Text style={styles.blue}>
            {splash ? 'Carga completa' : 'Cargando...'}
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
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
    backgroundColor: 'rgba(255,255,255,0.0)', // transparente
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
