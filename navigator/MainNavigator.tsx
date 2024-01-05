import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { NavigationContainer } from "@react-navigation/native";
import LoginScrenn from '../screen/LoginScrenn';
import MenuScreen from '../screen/MenuScreen';
import JuegoScreen from '../screen/JuegoScreen';
import RegisterScreen from '../screen/RegisterScreen';




const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();


function MyTabs() {
  return (
    <Tab.Navigator>
      
      
      <Tab.Screen name="menu" component={MenuScreen} />
      <Tab.Screen name="Juego" component={JuegoScreen} />
      
    </Tab.Navigator>
  );
}

function MyStack() {
    return (
      
      <Stack.Navigator initialRouteName='Register'> 
        <Stack.Screen name="Tabs" component={MyTabs} />
        {/*<Stack.Screen name="Login" component={LoginScrenn} />*/}
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
