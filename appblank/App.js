/* Zona 1: Importaciones*/
import { StyleSheet, View, Text, ImageBackground, TextInput, Switch, TouchableOpacity, Modal  } from 'react-native';
import { useState, useEffect} from 'react';
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

  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [aceptaTerminos, setAceptaTerminos] = useState(false);
  
  // Estados para el alert personalizado
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertTitle, setAlertTitle] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  // Función para mostrar alert personalizado
  const showCustomAlert = (title, message) => {
    setAlertTitle(title);
    setAlertMessage(message);
    setAlertVisible(true);
  };

  // Función para validar email
  const validarEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleRegistro = () => {
    if (!nombre.trim() || !correo.trim()) {
      showCustomAlert('Error', 'Por favor, completa todos los campos.');
    } else if (!validarEmail(correo.trim())) {
      showCustomAlert('Error', 'Por favor, ingresa un correo electrónico válido.');
    } else {
      if (!aceptaTerminos) {
        showCustomAlert('Error', 'Debes aceptar términos y condiciones.');
      } else {
        showCustomAlert(
          'Registro exitoso',
          `Nombre: ${nombre}\nCorreo: ${correo}`
        );
      }
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require('./assets/20230101_000907A.jpg')}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <TextInput
            style={styles.input}
            placeholder="Nombre completo"
            value={nombre}
            onChangeText={setNombre}
          />
          <TextInput
            style={styles.input}
            placeholder="Correo electrónico"
            value={correo}
            onChangeText={setCorreo}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <View style={styles.switchContainer}>
            <Switch
              value={aceptaTerminos}
              onValueChange={setAceptaTerminos}
            />
            <Text style={styles.switchLabel}>Aceptar términos y condiciones</Text>
          </View>
          
          {/* Botón personalizado que SÍ funciona */}
          <TouchableOpacity style={styles.registerButton} onPress={handleRegistro}>
            <Text style={styles.registerButtonText}>Registrarse</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>

      {/* Alert personalizado usando Modal */}
      <Modal
        transparent={true}
        visible={alertVisible}
        animationType="fade"
        onRequestClose={() => setAlertVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.alertContainer}>
            <Text style={styles.alertTitle}>{alertTitle}</Text>
            <Text style={styles.alertMessage}>{alertMessage}</Text>
            <TouchableOpacity 
              style={styles.alertButton} 
              onPress={() => setAlertVisible(false)}
            >
              <Text style={styles.alertButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  overlay: {
    backgroundColor: 'white',
    margin: 20,
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  red: {
    color: 'red',
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    borderColor: '#aaa',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginVertical: 8,
    backgroundColor: '#fff',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  switchLabel: {
    marginLeft: 10,
    fontSize: 16,
  },
  registerButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  registerButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  // Estilos para el alert personalizado
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  alertContainer: {
    backgroundColor: 'white',
    margin: 20,
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    minWidth: 280,
  },
  alertTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#333',
  },
  alertMessage: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    color: '#666',
    lineHeight: 22,
  },
  alertButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 5,
  },
  alertButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});