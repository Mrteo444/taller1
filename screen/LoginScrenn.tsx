import { ImageBackground, StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import MenuScreen from './MenuScreen'

export default function LoginScrenn({ navigation }: any) {
  return (
    <ImageBackground

      source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKalSixOk2ePgoNBqLbKjmfF8xwuZlLc6U0Q&usqp=CAU' }}
      style={styles.container}
    >
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