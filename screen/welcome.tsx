import { StyleSheet, Text, View, Button , ImageBackground,TouchableOpacity,} from 'react-native'
import React, { useEffect, useState } from 'react'

import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../config/Config';
import { db } from '../config/Config';
import {  ref, onValue } from "firebase/database";
import Score from "../src/Components/Score";
import Header from "../src/Components/Header";

export default function welcome( { navigation }: any) {
  const [acceso, setAcceso] = useState('')
  const [id, setid] = useState('')
  const [usuario, setusuario] = useState('')
  const [score, setScore] = useState<number>(0);


  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log("Datos: ", uid)
        setid(uid)
      } else {
        setid('')
      }
    });

    const starCountRef = ref(db, 'users/' + id );
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log("USUARIO", data) 
      setusuario(data) 
    });
  }, [])

  function observable() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setAcceso(uid)
      } else {
        navigation.navigate("Login")
      }
    });
  }


  function compuesta() {
    logout()
    observable()
  }

  function logout() {
    signOut(auth).then(() => {
      navigation.navigate("Regístrate")
    }).catch((error) => {
    });
  }

  return (
    <ImageBackground
            source={{ uri: 'https://s0.smartresize.com/wallpaper/892/884/HD-wallpaper-minimal-blue-wallpappe-aurel-minimal-abstract-blue-dark-lines.jpg' }}
            style={styles.container}
        >

    <View>
    <Text >{usuario.nickName}</Text>
    <Text >{usuario.edad}</Text>
    <Text >{usuario.email}</Text>
    
    {/* <Text >Score({ score })</Text> */}
    
          <Score score={score} />
        


    {/* <Button title="logout" onPress={() => compuesta()} /> */}


    <TouchableOpacity style={styles.but2} onPress={() => compuesta()} >
        <Text style={{ color: 'white' }}>logout</Text>
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
container1: {
    borderWidth: 1,
    width: "100%",
    marginTop: 10
},
texti: {
    color: '#fff'
},
but2: {
    backgroundColor: '#286F93',
    padding: 10,
    borderRadius: 5,
    width: '60%',
    marginBottom: 10,
},
})