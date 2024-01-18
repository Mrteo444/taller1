import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useEffect, useState } from 'react'

import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../config/Config';
import { db } from '../config/Config';
import {  ref, onValue } from "firebase/database";


export default function welcome( { navigation }: any) {
  const [acceso, setAcceso] = useState('')
  const [id, setid] = useState('')
  const [usuario, setusuario] = useState('')


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
    <View>
    <Text >{usuario.nickName}</Text>
    <Text >{usuario.edad}</Text>
    <Text >{usuario.email}</Text>
    {/* <Text >Score({ score })</Text> */}


    <Button title="logout" onPress={() => compuesta()} />
  </View>
  )
}

const styles = StyleSheet.create({})