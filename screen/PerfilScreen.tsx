import { Button, ImageBackground, StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { db, auth } from '../config/Config'
import { ref, onValue } from "firebase/database";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { TouchableOpacity } from 'react-native-gesture-handler';
const SCORE_INCREMENT = 10;
export default function PerfilScreen({ navigation }: any) {

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

        const starCountRef = ref(db, 'users/' + id);
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
            console.error("Error al cerrar sesión", error);
        });
    }
    ////////////////
    

    return (
        <ImageBackground
            source={{
                uri:
                    'https://img2.wallspic.com/crops/7/3/4/7/6/167437/167437-ambiente-pendiente-material_propiedad-tintes_y_matices-patron-1536x3073.jpg',
            }}
            style={styles.container}
        >
            <View style={styles.overlay}>
                <Image
                    source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3736/3736502.png' }}
                    style={{ width: 100, height: 100, borderRadius: 50, overflow: 'hidden', marginTop: 0 }}
                />
                <View style={styles.overlay}>
                    <Text style={styles.texti}>Nickname: {usuario.nickName}</Text>
                    <Text style={styles.texti}>Edad: {usuario.edad}</Text>
                    <Text style={styles.texti}>Correo electrónico: {usuario.email}</Text>
                </View></View>
            <TouchableOpacity style={styles.but2} onPress={() => compuesta()}>
                <Text style={styles.buttonText}>Salir</Text>
            </TouchableOpacity>

        </ImageBackground>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Añade un fondo oscuro semi-transparente
        padding: 20,
        borderRadius: 10,
        width: '80%',
        alignItems: 'center',
    },
    
    texti: {
        color: '#fff',
        marginBottom: 10,
        fontSize: 18,
    },
    but2: {
        backgroundColor: '#286F93',
        padding: 15,
        borderRadius: 8,
        width: '100%',
        marginTop: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});
