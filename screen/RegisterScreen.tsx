import React, { useState } from 'react'
import { Image, Text, View, StyleSheet, TextInput, Button, ImageBackground, TouchableOpacity, Alert } from 'react-native'
import * as ImagePicker from 'expo-image-picker';

//FIREBASE
import {  uploadBytes, getDownloadURL } from "firebase/storage";
import { getDatabase, ref, set } from "firebase/database";
import { storage } from '../config/Config';
import { db } from '../config/Config';

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../config/Config';


////////////////////////////////





const RegisterScreen = ({ navigation }: any) => {
  


  function registro() {
    createUserWithEmailAndPassword(auth, correo, contrasenia)
      .then((userCredential) => {
        // Signed up 
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

          // Agregue más casos según sea necesario

          default:
            Alert.alert('Error', 'Se ha producido un error desconocido')
            break;
        }
      });
  }
  function registro2() {
    registro()

    navigation.navigate('Ingreso')

    guardar(userId, correo, nickName, edad, contrasenia)

  }
  ////guaarar/// 
  function guardar(userId: string, correo: string, nickName: string, edad: string, contrasenia: string,) {
    set(ref(db, 'users/' + userId), {
      nickName: nickName,
      email: correo,
      edad: edad,
      contrasenia: contrasenia,
    });
  }
  const [nickName, setnickName] = useState('')
  const [correo, setcorreo] = useState('')
  const [contrasenia, setcontrasenia] = useState('')
  const [edad, setedad] = useState('')
  const [datos, setDatos] = useState([])

  const [userId, setuserId] = useState('')



  return (
    <ImageBackground
      source={{ uri: 'https://s0.smartresize.com/wallpaper/892/884/HD-wallpaper-minimal-blue-wallpappe-aurel-minimal-abstract-blue-dark-lines.jpg' }}
      style={styles.container}
    >
      <Text style={[styles.titulo, { color: 'white' }]}>REGISTRO</Text>
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
        <Text style={{ color: 'white' }}>Registrarse</Text>
      </TouchableOpacity>



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
  input: {

    height: 40,
    borderColor: 'white', // Cambiamos el color del borde
    borderWidth: 2,
    borderRadius: 20,
    marginBottom: 10,
    padding: 8,
    width: '80%',
    backgroundColor: 'white',
    color: 'black', // Cambiamos el color del texto */
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