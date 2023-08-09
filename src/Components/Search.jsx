import { Pressable, StyleSheet, Text, TextInput, View, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { colors } from '../Global/Colors';
import { AntDesign } from '@expo/vector-icons'; 


//Función search
const Search = ({
    onSearch,  //prop de desestruct
    error="",
    goBack
}) => {
    // hook "useState" 
    const [keyword, setKeyword] = useState("")  //almacenar el valor del texto de búsqueda ingresado 
    const {height,width}=useWindowDimensions()
    console.log(width,height);

    // Fucion para que cuando se borre regrese todos los productos
    const onErrase = ()=>{
        setKeyword("")
        onSearch("") //si se hace un onSearch vacio devuelve todo 
    }

    return (
        <View style={  styles.container}>
            <View style={width>350? styles.searchContainer: styles.searchContainerSm}>
                <TextInput
                    style={styles.input}
                    placeholder='Buscar...'
                    value={keyword}            //valor del TextInput 
                    onChangeText={setKeyword} //Controlador de eventos que se ejecuta cuando el usuario ingresa o modifica el texto
                />
                <View style={styles.iconos}>

                    <Pressable onPress={() => onSearch(keyword)}>    
                        <FontAwesome name="search" size={24} color="black" />
                    </Pressable>

                    <Pressable onPress={onErrase}>       
                        <FontAwesome5 name="eraser" size={24} color="black" /> 
                    </Pressable>

                    
                </View>
                
            </View>

            <View style={styles.errorContainer}>
                {error ? <Text style={styles.textoError}>{error}</Text> : null}
            </View>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 10,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 18,
    },
    searchContainerSm: {
        flexDirection: 'colum',
        alignItems: 'center',
        gap: 18,
    },
    iconos:{
        flexDirection:"row",
        gap: 18,
    },

    input: {
        flex: 1,
        padding: 8,
        fontSize: 18,
        backgroundColor: colors.salom,
        borderRadius: 10,
    },
    textoError: {
        backgroundColor: 'red',
        color: 'white',
        marginTop: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10,
        fontFamily:"Fira"
    },
    errorContainer: {
        marginTop: 10,
    },
});
