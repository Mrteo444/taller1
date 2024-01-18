
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getDatabase} from 'firebase/database'
import { getStorage } from 'firebase/storage'

import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyC9S1Hay79H991HyxhC3bLLzRwgPnhv3tE",
  authDomain: "app-taller-1ca3e.firebaseapp.com",
  databaseURL: "https://app-taller-1ca3e-default-rtdb.firebaseio.com",
  projectId: "app-taller-1ca3e",
  storageBucket: "app-taller-1ca3e.appspot.com",
  messagingSenderId: "209052659517",
  appId: "1:209052659517:web:2b2f727d02eba6f961df54"
};

const app = initializeApp(firebaseConfig);

export const db= getDatabase(app)
export const storage = getStorage(app)

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});