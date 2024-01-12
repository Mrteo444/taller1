
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getDatabase} from 'firebase/database'
import { getStorage } from 'firebase/storage'

import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyBWU_EQ1Dja9diuPCW41rAC8_5V6ilPJfg",
  authDomain: "juego-6bb25.firebaseapp.com",
  databaseURL: "https://juego-6bb25-default-rtdb.firebaseio.com",
  projectId: "juego-6bb25",
  storageBucket: "juego-6bb25.appspot.com",
  messagingSenderId: "294989014319",
  appId: "1:294989014319:web:1c0f3818836468ee99edda"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//export const auth = getAuth(app)
export const db= getDatabase(app)

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});