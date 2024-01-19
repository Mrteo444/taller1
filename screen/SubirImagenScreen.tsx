import { Button, StyleSheet, Text, View, Image, TouchableOpacity, Alert, ImageBackground } from 'react-native';
import React, { useState } from 'react';

import * as ImagePicker from 'expo-image-picker';
import { v4 as uuidv4 } from 'uuid';
// FIREBASE 
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../config/Config';

export default function JuegoScreen() {
  const [imagen, setImagen] = useState(
    'https://us.123rf.com/450wm/kovalto1/kovalto11609/kovalto1160900001/66433054-icono-de-la-c%C3%A1mara-ilustraci%C3%B3n-del-vector-eps-10.jpg?ver=6'
    
  );

  // ABRIR LA CAMARA
  const seleccionarImagen = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImagen(result.assets[0].uri);
    }
  };

  ///SUBIR LA IMAGEN
  async function subirImagen() {
    const timestamp = new Date().getTime(); // Get the current timestamp
    const uniqueName = `imagen_${timestamp}_${uuidv4()}.jpg`; // Generate a unique name
    const storageRef = ref(storage, `usuarios/${uniqueName}`); // Use the unique name for the storage reference

    try {
      const response = await fetch(imagen);
      const blob = await response.blob();

      await uploadBytes(storageRef, blob, {
        contentType: 'image/jpg',
      });

      console.log('La imagen se subió con éxito');
      Alert.alert('Mensaje', 'Imagen subida con éxito');

      // Obtiene la URL de la imagen
      const imageURL = await getDownloadURL(storageRef);
      console.log('URL de descarga de la imagen', imageURL);
    } catch (error) {
      console.error(error);
    }
  }

  //subir imagen de galaria //



  //CARGAR IMAGEN
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImagen(result.assets[0].uri);
    }
  };

  ///SUBIR IMAGEN
  async function subirImagenG(nombre: string) {
    const storageRef = ref(storage, 'usuarios/' + nombre);

    try {
      const response = await fetch(imagen);
      const blob = await response.blob();

      await uploadBytes(storageRef, blob, {
        contentType: 'image/jpg'
      });

      console.log('La imagen se subió con éxito');

      // Obtiene la URL de la imagen
      //const imageURL = await getDownloadURL(storageRef);
      //console.log('URL de desacarga de la imagen', imageURL);
    } catch (error) {
      console.log(error);
    }
  }








  return (
    <ImageBackground
      source={{ uri: 'https://i.pinimg.com/236x/b8/a9/5b/b8a95bae76b7094b27c70c39be1893a7.jpg' }}
      style={styles.container}
    >
      <View style={styles.overlay}>

        <Text style={{ color: 'white' }}>SUBE UNA IMAGEN DESDE LA CÁMARA</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => seleccionarImagen()}
        >
          <Text style={styles.buttonText}>Abrir cámara</Text>
        </TouchableOpacity>
        <Image source={{ uri: imagen }} style={styles.img} />

        <TouchableOpacity style={styles.btn} onPress={() => subirImagen('avatar2')}>
          <Text >Guardar la imagen en firebase</Text>
        </TouchableOpacity>
        <Text style={{ color: 'white' }}>SUBIR IMAGEN DESDE LA CÁMARA</Text>
        <TouchableOpacity style={styles.but2} onPress={() => seleccionarImagen()}>
          <Text style={{ color: 'white' }}>Abrir cámara</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.but2} onPress={() => pickImage()}>
          <Text style={{ color: 'white' }}>Abrir galeria</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.but2} onPress={() => subirImagenG('avatar1')}>
          <Text style={{ color: 'white' }}>Subir imagen</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  button: {
    backgroundColor: '#086182',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Añade un fondo oscuro semi-transparente
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },

  img: {
    width: '95%',
    height: '45%',
    resizeMode: 'contain',
  },
  btn: {
    width: '80%',
    height: 50,
    backgroundColor: '#C0E8D5',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  but2: {

    backgroundColor: '#286F93',
    padding: 10,
    borderRadius: 5,
    width: '60%',
    marginBottom: 10,
  },
});
