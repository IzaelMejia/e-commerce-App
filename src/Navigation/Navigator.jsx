import { StyleSheet, SafeAreaView, Platform, StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import ShopStack from './ShopStack';
import CartStack from './CartStack';
import { colors } from '../Global/Colors';
import { AntDesign, Ionicons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import OrderStack from './OrderStack';
import AuthStack from './AuthStack';
import { useSelector } from 'react-redux';
import MyProfileStack from './MyProfileStack';
const Tab = createBottomTabNavigator();

const Navigator = () => {
                                      //ruta del log
  const {email} = useSelector(state =>state.userReducer.value)

  return (
    <SafeAreaView style={styles.container}>   
    {/* o pitar la parte del celu de la parte de arriba*/}
      <NavigationContainer>
        {/* si hay un email, navegamos a la aplicacion  */}
        {
          email ?
       <Tab.Navigator
        screenOptions={
          {
            headerShown:false,        //quitar el header por deault
            tabBarShowLabel:false,    //quitar texto 
            tabBarStyle:styles.tabBar
           
          }
        } 
      >
          <Tab.Screen
            name="Shop"
            component={ShopStack}
            options={{
              tabBarIcon:({focused})=>{
                return(
                  <View>
                    <Entypo name="shop" size={24} color={focused ? colors.piel: "#fff"} />
                  </View>
                )
              }
            }}

          />
          <Tab.Screen
            name="Cart"
            component={CartStack}
            options={{
              tabBarIcon:({focused})=>{
                return(
                  <View>
                    <AntDesign name="shoppingcart" size={24} color={focused ? colors.piel: "#fff"} />
                  </View>
                )
              }
            }}
          />

          <Tab.Screen
            name="Orders"
            component={OrderStack}
            options={{
              tabBarIcon:({focused})=>{
                return(
                  <View>
                    <Foundation name="list" size={24} color={focused ? colors.piel: "#fff"} />
                  </View>
                )
              }
            }}
          />

          <Tab.Screen
            name="MyProfile"
            component={MyProfileStack}
            options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={styles.item}>
                  <Ionicons
                  name="person-circle-outline"
                  size={24}
                  color={focused ? colors.piel: "#fff"}
                  />
                </View>
                      );
            },
            }}
         />
        </Tab.Navigator> 
      // y SI NO MOSTRAR EL AuthStack
      :
      <AuthStack/>
        }

        
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default Navigator

const styles = StyleSheet.create({
    container: {
      flex: 1,
      //Esto es para la barra de estado de la parte de arriba . Zona 
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },

    tabBar:{
      backgroundColor:colors.negro,
      elevation:5,
      borderTopEndRadius:8,
      borderTopStartRadius:8,
      
    },

  });
  