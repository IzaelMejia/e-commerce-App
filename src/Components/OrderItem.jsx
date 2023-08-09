import { StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import React from "react";
import { colors } from "../Global/Colors";

//mostrar las ordees que fueron
const OrderItem = ({ order }) => {

    // Cálculo del total de la orden sumando el precio de cada item multiplicado por su cantidad
    const total = order.items.reduce(
        (acc, currentItem) => (acc += currentItem.price * currentItem.quantity),
        0
    );

    // Renderizado del componente
    return (
        <View style={styles.card} onPress={() => {}}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    {new Date(order.createdAt).toLocaleString()}  
                </Text>
                <Text style={styles.text2}>${total}</Text>
            </View>
            <Feather name="search" size={30} color="black" />
        </View>
    );
};

// Exportación del componente "OrderItem" para ser utilizado en otros archivos
export default OrderItem;

// Estilos del componente usando el método "StyleSheet.create"
const styles = StyleSheet.create({
    card: {
        height: 100,
        backgroundColor: colors.salom,
        padding: 10,
        margin: 10,
        borderWidth: 2,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    textContainer: {
        width: "70%",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    text: {
        fontFamily: "Josefin",
        fontSize: 17,
        color: "black",
    },
    text2: {
        fontFamily: "Josefin",
        fontSize: 19,
        color: "#fff",
    },
});
