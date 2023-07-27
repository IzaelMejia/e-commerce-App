import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CartData from "../Data/cart.json"
import CartItem from '../Components/CartItem'
import { colors } from '../Global/Colors'

//simulamos los items del carrito 

const Cart = () => { 

  const total = CartData.reduce(( acumulador, curretItem)=>acumulador+= curretItem.price * curretItem.quantity,0) //FUCI CALlback de como va ir iterado 

  console.log(total);
  return (



    <View style={styles.container}>
      <FlatList
        data={CartData} //ls datos sale de CartData
        keyExtractor={cartItem=>cartItem.id}
        renderItem={({item})=>{ //le pasomos el item que tiee que renderizar
          return(
            <CartItem
              cartItem={item}
            />
          )
        }}  
      />

    <View style={styles.totalContainer}>
      <Pressable style={styles.boton}>
        <Text style={styles.texto}>
          Confirmar
        </Text>
      </Pressable>
         <Text style={styles.textoTotal}>Total: ${total}</Text>
    </View> 


    </View>
  )
}

export default Cart

const styles = StyleSheet.create({

  container: {
    justifyContent: 'space-between',
    flex: 1,
},
totalContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'start',
},
boton:{
  backgroundColor:colors.rojo,
  padding:10,
  borderRadius: 8,

},
texto:{
  fontSize:16,
  fontWeight:600,
  color:"#fff",
},
textoTotal:{
  fontSize:16,
  fontWeight:600,

},

})