import { Image, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import AddButton from "../Components/AddButton";
import * as ImagePicker from 'expo-image-picker'
import { useSelector } from "react-redux";
import { useGetProfileImageQuery } from "../Services/shopServices";

const MyProfile = ({navigation}) => {
    // const {profileImage, imageCamera} = useSelector(state => state.authReducer.value);

    // Obtenemos el 'localId' y 'profileImage' del estado usando useSelector
    const {localId, profileImage} = useSelector(state => state.userReducer.value)

    const {data: image} = useGetProfileImageQuery(localId)  //guardamos en formato de objeto 
    
    const cameraImage = image?.image  //va estar la uri del dispositivo donde se encuentra la imagen

   // Función para navegar a la pantalla de selección de imagen
    const launchCamera = async () => {
        navigation.navigate('Image Selector')
    };

    console.log(profileImage);
    return (
        <View style={styles.container}>
            {profileImage || cameraImage  ? (
                <Image
                    source={{uri: profileImage || cameraImage}}
                    style={styles.image}
                    resizeMode="cover"
                />
            ) : (
                <Image
                    source={require("../Assets/Images/defaultProfile.png")}
                    style={styles.image}
                    resizeMode="cover"
                />
            )}
            <AddButton onPress={launchCamera} title="Add profile picture" />
        </View>
    );
};

export default MyProfile;

const styles = StyleSheet.create({
    container: {
        padding: 10,
        gap: 15,
        alignItems: "center",
        justifyContent: "flex-start",
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
});