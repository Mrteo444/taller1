import { Button, StyleSheet, Text, View, Image, TouchableOpacity, Alert, ImageBackground } from 'react-native';
import React, { useState } from 'react';

import * as ImagePicker from 'expo-image-picker';

// FIREBASE
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../config/Config';

export default function JuegoScreen() {
  const [imagen, setImagen] = useState(
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/User_icon-cp.svg/1656px-User_icon-cp.svg.png'
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
  async function subirImagen(nombre: string) {
    const storageRef = ref(storage, 'usuarios/' + nombre);

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
      source={{ uri: 'https://wallpapers.com/images/hd/black-and-teal-vqtcoyaqv2mtuxrt.jpg' }}
      style={styles.container}
    >

      <Text style={{color: 'white'}}>SUBE UNA IMAGEN DESDE LA CAMARA</Text>
      <Button title="abrir camara" onPress={() => seleccionarImagen()} />
      <Image source={{ uri: imagen }} style={styles.img} />
  
      <TouchableOpacity style={styles.btn} onPress={() => subirImagen('avatar2')}>
        <Text >Guardar la imagen en firebase</Text>
      </TouchableOpacity>
      <Text style={{ color: 'white' }}>SUBIR IMAGEN DESDE LA CÁMARA</Text>
      <TouchableOpacity style={styles.but2} onPress={() => seleccionarImagen()}>
        <Text style={{ color: 'white' }}>Abrir cámara</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.but2} onPress={() => subirImagenG('avatar2')}>
        <Text style={{ color: 'white' }}>Subir imagen</Text>
      </TouchableOpacity>

    </ImageBackground>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },

  img: {
    width: '100%',
    height: '50%',
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
