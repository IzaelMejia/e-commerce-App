import React from 'react'
import Header from '../Components/Header';
import ItemListCategory from '../Screens/ItemListCategory';
import Home from "../Screens/Home"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ItemDetail from '../Screens/ItemDetail';


const Stack= createNativeStackNavigator() //función ya hecha


const ShopStack = () => {
  return (
    
      <Stack.Navigator
            initialRouteName='Home'
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
                name="Home"
                component={Home}
            />
            <Stack.Screen   
                name="ItemListCategory"
                component={ItemListCategory}
            />
            <Stack.Screen  
                name="Detail"
                component={ItemDetail}
            />
          </Stack.Navigator>

  )
}

export default ShopStack

