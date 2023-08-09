import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../Global/Colors';

const InputForm = ({
    label, 
    onChange, 
    error = "",
    isSecure = false  //Seguro :muestra asteriscos en el password
}) => {
        // Define el estado local "input" para almacenar el valor del campo de entrada
    const [input, setInput] = useState("");
        // Función que se ejecuta cuando cambia el texto del campo de entrada
    const onChangeText = (text) => {
        setInput(text); // Actualiza el estado local "input"
        onChange(text); // Llama a la función onChange pasada como prop para notificar el cambio al componente padre
    }
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.subtitle}>{label}</Text>
      <TextInput
        style ={styles.input}
        value={input}
        onChangeText={onChangeText}
        secureTextEntry={isSecure}
      />
      {error ? 
        <Text style = {styles.error}>
            {error} 
        </Text>
        :
        null
    }
    </View>
  )
}

export default InputForm

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%'
    },
    subtitle: {
        width: '90%',
        fontSize: 16,
        fontFamily: 'fira'
    },
    error: {
        fontSize: 16,
        color: 'red',
        fontFamily: 'fira',
        fontStyle: 'italic',
    },
    input: {
        width: '90%',
        borderWidth: 0,
        borderBottomWidth: 3,
        borderBottomColor: colors.azul,
        padding: 2,
        fontFamily: 'fira',
        fontSize: 14,
    }
})