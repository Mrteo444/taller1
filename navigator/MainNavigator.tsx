import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { NavigationContainer } from "@react-navigation/native";
import LoginScrenn from '../screen/LoginScrenn';

import JuegoScreen from '../screen/JuegoScreen';
import RegisterScreen from '../screen/RegisterScreen';
import Game from '../src/Components/Game';
import Board from '../src1/components/Board';




const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();


function MyTabs() {
  return (
    <Tab.Navigator>
      
      
      {/* <Tab.Screen name="menu" component={MenuScreen} /> */}
      <Tab.Screen name="Juego" component={JuegoScreen} />
      <Tab.Screen name="Game" component={Game} />
      <Tab.Screen name="Minas" component={Board} />
      
    </Tab.Navigator>
  );
}

function MyStack() {
    return (
      
      <Stack.Navigator initialRouteName='Register'> 
        <Stack.Screen name="Tabs" component={MyTabs} />
        
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScrenn} />
        

      </Stack.Navigator>
    );
  }


export default function TopTabNavigator(){
    return(
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    )
}
