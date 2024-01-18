import { ImageBackground, StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../config/Config';

export default function LoginScreen({ navigation }: any) {

  const [correo, setCorreo] = useState('')
  const [contrasenia, setContrasenia] = useState('')

  function login() {
    signInWithEmailAndPassword(auth, correo, contrasenia)
      .then((userCredential) => {
        const user = userCredential.user;
        navigation.navigate("Inicio")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage)

        switch (errorCode) {
          case "auth/invalid-credential":
            Alert.alert("Error", "Correo o contraseña incorrecta");
            break;
          case "auth/wrong-password":
            Alert.alert("Error", "Contraseña incorrecta");
            break;
          default:
            Alert.alert("Error", "Complete los espacios");
        }
      });
  }

  return (
    <ImageBackground
      source={{ uri: 'https://s0.smartresize.com/wallpaper/892/884/HD-wallpaper-minimal-blue-wallpappe-aurel-minimal-abstract-blue-dark-lines.jpg' }}
      style={styles.container}>

      <Text style={[{ color: 'white' }]}>INICIAR SESION</Text>

      <TextInput
        style={styles.input}
        placeholder="Ingrese email"
        keyboardType='email-address'
        onChangeText={(texto) => setCorreo(texto)}
        placeholderTextColor="black"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        onChangeText={(texto) => setContrasenia(texto)}
        placeholderTextColor="black"
        secureTextEntry={true}
      />

      <TouchableOpacity style={styles.but} onPress={() => login()}>
        <Text style={{ color: 'white' }}>Entrar</Text>
      </TouchableOpacity>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  },
  input: {
    height: 40,
    borderColor: 'white', // Cambiamos el color del borde
    borderWidth: 2,
    borderRadius: 20,
    marginBottom: 16,
    padding: 8,
    width: '80%',
    backgroundColor: 'white',
    color: 'black', // Cambiamos el color del texto
  },
  but: {
    borderRadius: 50,
    backgroundColor: '#086182',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    marginBottom: 20
  }
});