import React from 'react'
import Header from '../Components/Header';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cart from '../Screens/Cart';
import OrderScreen from '../Screens/OrderScreen';


const Stack= createNativeStackNavigator() //función ya hecha


const OrderStack = () => {
  return (
      <Stack.Navigator
            initialRouteName='OrderScreen'
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
                name="OrderScreen"
                component={OrderScreen}
            />
            
        </Stack.Navigator>

  )
}

export default OrderStack

