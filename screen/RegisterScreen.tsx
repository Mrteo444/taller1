import React, { useState } from 'react'
import { Image, Text, View, StyleSheet, TextInput, Button, ImageBackground, TouchableOpacity, Alert } from 'react-native'
import { uploadBytes, getDownloadURL } from "firebase/storage";
import { getDatabase, ref, set } from "firebase/database";
import { db } from '../config/Config';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../config/Config';

const RegisterScreen = ({ navigation }: any) => {
  const [nickName, setnickName] = useState('')
  const [correo, setcorreo] = useState('')
  const [contrasenia, setcontrasenia] = useState('')
  const [edad, setedad] = useState('')
  const [datos, setDatos] = useState([])
  const [userId, setuserId] = useState('')

  function registro() {
    createUserWithEmailAndPassword(auth, correo, contrasenia)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("REGISTRO CORRECTO");
        navigation.navigate('login')
        console.log(user.uid);
        guardar(userId, correo, nickName, edad, contrasenia)
        setuserId(user.uid)
        console.log(userId);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode)

        switch (errorCode) {
          case 'auth/email-already-in-use':
            Alert.alert('Error', 'El correo ingresado ya esta en uso')
            break;
          default:
            Alert.alert('Error', 'No se ha registrado correctamente')
            break;
        }
      });
  }

  function registro2() {
    registro()
    guardar(userId, correo, nickName, edad, contrasenia)
    navigation.navigate('Ingreso')
  }

  function registro3() {
    navigation.navigate('Ingreso')
  }

  function guardar(userId: string, correo: string, nickName: string, edad: string, contrasenia: string,) {
    set(ref(db, 'users/' + userId), {
      nickName: nickName,
      email: correo,
      edad: edad,
      contrasenia: contrasenia,
    });
  }

  return (
    <ImageBackground
      source={{ uri: 'https://s0.smartresize.com/wallpaper/892/884/HD-wallpaper-minimal-blue-wallpappe-aurel-minimal-abstract-blue-dark-lines.jpg' }}
      style={styles.container}
    >
      <View style={styles.overlay}>
        <Text style={[styles.titulo, { color: 'white', fontFamily: 'monospace', fontWeight: 'bold', textShadowColor: 'rgba(0, 0, 0, 0.75)', textShadowOffset: { width: -1, height: 1 }, textShadowRadius: 10 }]}>
          BIENVENIDO
        </Text>

        <Image
          source={{ uri: 'https://img.freepik.com/fotos-premium/personaje-dibujos-animados-auriculares-gafas-que-dice-soy-robot_784625-10668.jpg?w=360' }}
          style={{ width: 100, height: 100, marginTop: 0 }}
        />

        <TextInput
          style={[styles.input, { color: 'black' }]}
          placeholder="Nickname"
          onChangeText={(texto) => setnickName(texto)}
        />

        <TextInput
          style={[styles.input, { color: 'black' }]}
          placeholder="Edad"
          onChangeText={(texto) => setedad(texto)}
        />
        <TextInput
          style={[styles.input, { color: 'black' }]}
          placeholder="Correo electrónico"
          onChangeText={(texto) => setcorreo(texto)}
        />
        <TextInput
          style={[styles.input, { color: 'black' }]}
          placeholder="Contraseña"
          onChangeText={(texto) => setcontrasenia(texto)}
        />

        <TouchableOpacity style={styles.but2} onPress={() => registro2()}>
          <Text style={{ color: 'white' }}>Regístrarse</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.but2} onPress={() => registro3()}>
          <Text style={{ color: 'white' }}>Iniciar sesión</Text>
        </TouchableOpacity>
      </View>

    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 28,
    marginBottom: 10,
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Añade un fondo oscuro semi-transparente
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 20,
    marginBottom: 10,
    padding: 8,
    width: '80%',
    backgroundColor: 'white',
    color: 'black',
  },
  but: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    width: '24.5%',
    marginBottom: 10,
  },
  but2: {
    backgroundColor: '#286F93',
    padding: 10,
    borderRadius: 5,
    width: '60%',
    marginBottom: 10,
  },
  but3: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    width: '60%',
    marginBottom: 10,
  },
  but1: {
    backgroundColor: '#0C5E65',
    padding: 10,
    borderRadius: 5,
    width: '28%',
  },
  img: {
    width: 400,
    height: 300,
    resizeMode: 'contain'
  },


})

export default RegisterScreen