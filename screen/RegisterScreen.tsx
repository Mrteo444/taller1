import React from 'react'
import { Text, View, StyleSheet, TextInput, Button, ImageBackground, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import LoginScrenn from '../screen/LoginScrenn';

const RegisterScreen = () => {
 const navigation = useNavigation()

 return (
    <ImageBackground
      source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKalSixOk2ePgoNBqLbKjmfF8xwuZlLc6U0Q&usqp=CAU' }}
      style={styles.container}
    >
      <Text style={styles.titulo}>Registrese</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombres"
        onChangeText={(texto) => (texto)}
      />
      <TextInput
        style={styles.input}
        placeholder="Apellidos"
        onChangeText={(texto) => (texto)}
      />
      <TextInput
        style={styles.input}
        placeholder="Edad"
        onChangeText={(texto) => (texto)}
      />
      <TextInput
        style={styles.input}
        placeholder="Ingrese ID"
        onChangeText={(texto) => (texto)}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        onChangeText={(texto) => (texto)}
      />
      

      <TouchableOpacity style={styles.but} onPress={() => navigation.navigate('Tabs')}>
        <Text style={{ color: 'white' }}>Registar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.but1} onPress={() => navigation.navigate('Login')}>
        <Text style={{ color: 'white' }}>Inicio de sesion</Text>
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
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '100%',
 },
 but: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    width: '80%',
    marginBottom: 10,
 },
 but1: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    width: '80%',
 },
})

export default RegisterScreen