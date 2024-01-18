import { Button, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { db, auth } from '../config/Config'
import { ref, onValue } from "firebase/database";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { TouchableOpacity } from 'react-native-gesture-handler';

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

    return (
        <ImageBackground
            source={{ uri: 'https://s0.smartresize.com/wallpaper/892/884/HD-wallpaper-minimal-blue-wallpappe-aurel-minimal-abstract-blue-dark-lines.jpg' }}
            style={styles.container}
        >
            <View>
                <Text style={styles.texti}>{usuario.nickName}</Text>
                <Text style={styles.texti}>{usuario.edad}</Text>
                <Text style={styles.texti}>{usuario.email}</Text>
                {/* <Text >Score({ score })</Text> */}

                <TouchableOpacity style={styles.but2} onPress={() => compuesta()}>
                    <Text style={{ color: 'white' }}> Salir </Text>
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