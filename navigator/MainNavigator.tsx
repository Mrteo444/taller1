import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from '../screen/LoginScreen';
import SubirImagen from '../screen/SubirImagenScreen';
import RegisterScreen from '../screen/RegisterScreen';
import Game from '../src/Components/Game';
import Board from '../src1/components/Board';
import PerfilScreen from '../screen/PerfilScreen';
import welcome from '../screen/welcome';

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
<<<<<<< HEAD
      {/* <Tab.Screen name="menu" component={MenuScreen} /> */}
      <Tab.Screen name="Subir imagen" component={SubirImagen} />
      <Tab.Screen name="Juego: Serpiente" component={Game} />
      <Tab.Screen name="Juego: Buscaminas" component={Board} />
      <Tab.Screen name="Perfil" component={PerfilScreen} />
=======
      <Tab.Screen name="menu" component={welcome} />
      <Tab.Screen name="Subir imagen" component={JuegoScreen} />
      <Tab.Screen name="Juego: Serpiente" component={Game} />
      <Tab.Screen name="Juego: Buscaminas" component={Board} />
      {/* <Tab.Screen name="Perfil" component={PerfilScreen} /> */}

>>>>>>> df5a6979bbe34868a956f692c921fdeb0c957167
    </Tab.Navigator>
  );
}

function MyStack() {
  return (
    <Stack.Navigator initialRouteName='Regístrate'>
      <Stack.Screen name="Inicio" component={MyTabs} />
      <Stack.Screen name="Regístrate" component={RegisterScreen} />
      <Stack.Screen name="Ingreso" component={LoginScreen} />
    </Stack.Navigator>
  );
}

export default function TopTabNavigator() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  )
}