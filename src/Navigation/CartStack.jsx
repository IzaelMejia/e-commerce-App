import React from 'react'
import Header from '../Components/Header';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cart from '../Screens/Cart';


const Stack= createNativeStackNavigator() //función ya hecha


const CartStack = () => {
  return (
      <Stack.Navigator
            initialRouteName='Cart'
            screenOptions={
              ({route, navigation})=>(
                {
                  header:() =>{     
                    return <Header
                    //enviamos propiedades a Header
                    route ={route}      
                    navigation={navigation}/>
                  },
                }
              )
            }
          >
          <Stack.Screen   //por cada Stack es una pantalla
                name="Cart"
                component={Cart}
            />
            
        </Stack.Navigator>

  )
}

export default CartStack

