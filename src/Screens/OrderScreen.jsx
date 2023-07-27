import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import OrderData from "../Data/orders.json"
import OrderItem from '../Components/OrderItem'


//Mostrar las ordenes
const OrderScreen = () => {
  return (
    <View>        
      {/* // Mostrar todlas las ordees con flatList */}
      <FlatList
        data={OrderData}
        keyExtractor={orderItem => orderItem.id}
        renderItem={({item})=>{
          return (
            <OrderItem
              order={item}
            
            />

          )
        }}

      />

        {/* LLammamos order item  */}

        <OrderItem
          order={OrderData[0]}
          
        />
    </View>
  )
}

export default OrderScreen

const styles = StyleSheet.create({


})