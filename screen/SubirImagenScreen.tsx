import { Button, StyleSheet, Text, View, Image, TouchableOpacity, Alert, ImageBackground } from 'react-native';
import React, { useState } from 'react';

import * as ImagePicker from 'expo-image-picker';
<<<<<<< HEAD:screen/SubirImagenScreen.tsx
import { v4 as uuidv4 } from 'uuid';
// FIREBASE 
=======
// FIREBASE
>>>>>>> df5a6979bbe34868a956f692c921fdeb0c957167:screen/JuegoScreen.tsx
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../config/Config';

export default function JuegoScreen() {
<<<<<<< HEAD:screen/SubirImagenScreen.tsx
  const [imagen, setImagen] = useState(
    'https://us.123rf.com/450wm/kovalto1/kovalto11609/kovalto1160900001/66433054-icono-de-la-c%C3%A1mara-ilustraci%C3%B3n-del-vector-eps-10.jpg?ver=6'
    
  );
=======
  // const [imagen, setImagen] = useState(
  //   'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/User_icon-cp.svg/1656px-User_icon-cp.svg.png'
  // );
>>>>>>> df5a6979bbe34868a956f692c921fdeb0c957167:screen/JuegoScreen.tsx

  const seleccionarImagen = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchCameraAsync({
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

  ///SUBIR LA IMAGEN
<<<<<<< HEAD:screen/SubirImagenScreen.tsx
  async function subirImagen() {
    const timestamp = new Date().getTime(); // Get the current timestamp
    const uniqueName = `imagen_${timestamp}_${uuidv4()}.jpg`; // Generate a unique name
    const storageRef = ref(storage, `usuarios/${uniqueName}`); // Use the unique name for the storage reference
=======
  async function subirImagenC(nombre: string) {
    const storageRef = ref(storage, 'usuarios/' + nombre);
>>>>>>> df5a6979bbe34868a956f692c921fdeb0c957167:screen/JuegoScreen.tsx

    try {
      const response = await fetch(imagen);
      const blob = await response.blob();

      await uploadBytes(storageRef, blob, {
        contentType: 'image/jpg'
      });

      console.log('La imagen se subió con éxito');
<<<<<<< HEAD:screen/SubirImagenScreen.tsx
      Alert.alert('Mensaje', 'Imagen subida con éxito');
=======
      Alert.alert('Mensaje', 'Imagen subida con exito')
>>>>>>> df5a6979bbe34868a956f692c921fdeb0c957167:screen/JuegoScreen.tsx

      // Obtiene la URL de la imagen
      const imageURL = await getDownloadURL(storageRef);
      console.log('URL de desacarga de la imagen', imageURL);

    } catch (error) {
      console.error(error);
    }
  }

  //subir imagen de galaria //

<<<<<<< HEAD:screen/SubirImagenScreen.tsx

=======
  const [imagen, setImagen] = useState(' ')
>>>>>>> df5a6979bbe34868a956f692c921fdeb0c957167:screen/JuegoScreen.tsx

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

<<<<<<< HEAD:screen/SubirImagenScreen.tsx
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
=======
      <Text style={{color: 'white'}}>SUBE UNA IMAGEN DESDE LA CAMARA</Text>
      <Button title="abrir camara" onPress={() => seleccionarImagen()} />
      <Image source={{ uri: imagen }} style={styles.img} />
  
      <TouchableOpacity style={styles.btn} onPress={() => subirImagenC('avatar1')}>
        <Text >Guardar la imagen en firebase</Text>
      </TouchableOpacity>
      {/* <Text style={{ color: 'white' }}>SUBIR IMAGEN DESDE LA CÁMARA</Text> */}
      {/* <TouchableOpacity style={styles.but2} onPress={() => seleccionarImagen()}>
        <Text style={{ color: 'white' }}>Abrir cámara</Text>
      </TouchableOpacity> */}
      <TouchableOpacity style={styles.but2} onPress={() => pickImage()}>
        <Text style={{ color: 'white' }}>Abrir galeria</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.but2} onPress={() => subirImagenG('avatar2')}>
        <Text style={{ color: 'white' }}>Subir imagen</Text>
      </TouchableOpacity>
>>>>>>> df5a6979bbe34868a956f692c921fdeb0c957167:screen/JuegoScreen.tsx

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
