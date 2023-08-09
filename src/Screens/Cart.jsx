import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CartItem from '../Components/CartItem'
import { colors } from '../Global/Colors'
import { useSelector } from 'react-redux'
import { usePostCartMutation } from '../Services/shopServices'

//simulamos los items del carrito 

const Cart = () => { 

  const {items:CartData , total, updateAt, user}= useSelector(state=> state.cartReducer.value )  //Toda la Data del carrito
  
  // Mutation
  const [triggerPostCart, result] = usePostCartMutation() //hook agregar ua ordenn 

  const onConfirm =()=>{
    triggerPostCart({CartData, total, user , updateAt}) //geerar ua orde a traves de lo que est aen el carrito 
  }


  console.log(result);
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
      <Pressable style={styles.boton}
        onPress={onConfirm}
      
      >
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