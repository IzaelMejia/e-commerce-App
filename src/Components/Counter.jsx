import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { colors } from "../Global/Colors"; 
import { useDispatch, useSelector } from "react-redux"; 
import { increment, decrement, incrementByAmount } from "../Features/Counter/counterSlice"; // Importación de acciones para el contador

const Counter = () => {

    const [inputToAdd, setInputToAdd] = useState(0); // Variable de estado para almacenar la cantidad a agregar al contador
    // Obteniendo el "dispatch" de Redux para poder disparar acciones
    //traer valor dl contador y acción 
    const dispatch = useDispatch() //enviar accion siempre e el dispatch
    const count = useSelector(state => state.counterReducer.value) //traer del estado el valor de counterRecdfucer
    
    // Obteniendo el valor  v del contador desde el estado global de Redux utilizando el hook "useSelector"
    return (
        <View style={styles.container}>
            <View style={styles.buttonsContainer}>
                <Pressable 
                    style={styles.button}
                    onPress={()=> dispatch(decrement())}    
                >
                    <Text style={styles.buttonText}>-</Text>
                 </Pressable>
                <Text style={styles.span}>{count}</Text>
                <Pressable 
                    style={styles.button}
                    onPress={()=> dispatch(increment())}
                >
                    <Text style={styles.buttonText}>+</Text>
                </Pressable>
            </View>
            <View style={styles.buttonsContainer}>
                <TextInput
                    placeholder="Cantidad a aumentar"
                    style={styles.spanInput}
                    onChangeText={setInputToAdd} //cambiar estado local del input 
                    value={inputToAdd}
                />
                <Pressable 
                    style={styles.button}
                    onPress={()=> dispatch(incrementByAmount(Number(inputToAdd)))} //valor a incremetar
                >
                    <Text style={styles.buttonText}>Add</Text>
                </Pressable>
            </View>
            <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Reset</Text>
            </Pressable>
        </View>
    );
};

export default Counter;

// Estilos utilizando StyleSheet.create
const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        backgroundColor: colors.azul, // Fondo del componente utilizando el color "pink" de la paleta de colores
        padding: 10,
    },
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
    },
    button: {
        padding: 10,
        backgroundColor: colors.amarillo, // Fondo de los botones utilizando el color "lightPink" de la paleta de colores
    },
    span: {
        backgroundColor: colors.azul, // Fondo del texto del contador utilizando el color "red" de la paleta de colores
        width: "60%",
        padding: 10,
        textAlign: "center",
        fontSize: 20,
        color:"#fff"
    },
    spanInput: {
        backgroundColor: colors.amarillo, // Fondo del campo de entrada de texto utilizando el color "peach" de la paleta de colores
        width: "60%",
        padding: 10,
        textAlign: "center",
        fontSize: 16,
    },
    buttonText: {
        fontSize: 18,
        fontFamily: "Josefin", // Fuente del texto del botón
    },
});
