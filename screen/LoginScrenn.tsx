import { ImageBackground, StyleSheet, Text, View, TextInput, Button ,Alert} from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import MenuScreen from './MenuScreen'

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../config/Config';

export default function LoginScrenn({ navigation }: any) {

  const [correo, setcorreo] = useState('')
  const [contrasenia, setcontrasenia] = useState('')


  function login() {
    signInWithEmailAndPassword(auth, correo, contrasenia)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        navigation.navigate("Tabs")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage)

        switch (errorCode) {
          case "auth/invalid-credential":
            Alert.alert("Error ","CORREO incorrectas")
            break;
          case "auth/wrong-password":
            Alert.alert("Error ","Contraseña perida")
            break;
          default:
            Alert.alert("ERROR")
        }
      });
  }
  return (
    <ImageBackground

      source={{ uri: 'https://i.pinimg.com/564x/86/f7/2f/86f72f87cbd7050cbad3816c0dfff54a.jpg' }}
      style={styles.container}
    >
      <TextInput
        style={styles.input}
        placeholder="Ingrese email"
        keyboardType='email-address'
        onChangeText={(texto) => setcorreo(texto)}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        onChangeText={(texto) => setcontrasenia(texto)}
      />


      <TouchableOpacity style={styles.but} onPress={() => login()}>
        <Text style={{ color: 'white' }}>Entrar</Text>
      </TouchableOpacity>


    </ImageBackground>


  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  },
  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 3,
    marginBottom: 16,
    padding: 8,
    width: '100%',
    color: 'black'
  },
  but: {
    borderRadius: 50,
    backgroundColor: 'red',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    marginBottom: 20
  }

})