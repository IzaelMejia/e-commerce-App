import { Image, View, StyleSheet, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";
import AddButton from "../Components/AddButton";
import { colors } from "../Global/Colors";
import * as MediaLibrary from "expo-media-library";
import { usePostProfileImageMutation } from "../Services/shopServices";
import { useDispatch, useSelector } from "react-redux";
import { saveImage } from "../Features/User/userSlice";
import { useState } from "react";

// Definimos el componente ImageSelector que recibe 'navigation' como prop
const ImageSelector = ({ navigation }) => {
        // Estado para almacenar la imagen seleccionada, dentro de imge ya tenemos la uri 
    const [image, setImage] = useState(null);

     const [triggerSaveImage, resultSaveImage] = usePostProfileImageMutation();
    const dispatch = useDispatch();
    const { localId } = useSelector((state) => state.userReducer.value); 

        // Función para verificar los permisos de la cámara
    const verifyCameraPermissions = async () => {
        const { granted } = await ImagePicker.requestCameraPermissionsAsync();
        if (!granted) {
            return false;
        }
        return true;
    };

    // Función para seleccionar una imagen de la cámara
    const pickImage = async () => {
        //await terminos asincronos , esperar q eu el usuario tome la foto , esperar a la camara . . . 
        const isCameraOk = await verifyCameraPermissions(); // pedir permisos siempre 
        //cuando toma la foto 
        if (isCameraOk) {
            // No es necesario solicitar permisos para abrir la biblioteca de imágenes
            let result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All, //habilita todo tipo de archivos
                allowsEditing: true,
                aspect: [9, 16],  //el recorte de la foto
                //base64: true,
                quality: 1,
            });

            console.log(result.assets);

            //si la foto no se canselo , seteamos la img , uri img temporal dentro del dispositivo donde set el estado . 
            if (!result.canceled) {
                setImage(result.assets[0].uri);
            }else{
                console.log("No se sube la Img");
            }
            
        }
    };

    // Función para confirmar y guardar la imagen seleccionada
    const confirmImage = async () => {
        try {
            // Request device storage access permission
            const { status } = await MediaLibrary.requestPermissionsAsync();
            if (status === "granted") {
                console.log("Only valid on emulators and physical devices");
                // Save image to media library and create an asset
                const response = await MediaLibrary.createAssetAsync(image);
                console.log(response.uri);
                //Save image link on profileImages remote location
                triggerSaveImage({
                    image: response.uri,
                    localId: localId,
                });
                // Set image on redux state
                dispatch(saveImage(response.uri));
            }
        } catch (error) {
            console.log(error);
        }
        navigation.goBack();
    };

    // Devolvemos el contenido del componente
    return (
        <View style={styles.container}>
            {image ? (
                <>
                    <Image source={{ uri: image }} style={styles.image} />
                    <AddButton title="Tomar otra foto" onPress={pickImage} />
                    <AddButton title="Confirmar foto" onPress={confirmImage} />
                </>
            ) : (
                <>
                    <View style={styles.noPhotoContainer}>
                        <Text>No hay foto para mostrar...</Text>
                    </View>
                    <AddButton title="Tomar una foto" onPress={pickImage} />
                </>
            )}
        </View>
    );
};

export default ImageSelector;

// Estilos para los componentes visuales
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 20,
        marginTop: 20,
    },
    image: {
        width: 200,
        height: 200,
    },
    noPhotoContainer: {
        width: 200,
        height: 200,
        borderWidth: 2,
        borderColor: colors.red,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
    },
});