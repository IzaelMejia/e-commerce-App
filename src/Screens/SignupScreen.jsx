import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import InputForm from "../Components/InputForm";
import SubmitButton from "../Components/SubmitButton";
import { colors } from "../Global/Colors";
import { useSignUpMutation } from "../Services/authServices";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../Features/User/userSlice";
import { isAtLeastSixCharacters, isValidEmail } from "../Validations/auth";
/* import { useSignUpMutation } from "../services/authService";
import { useDispatch } from "react-redux";
import { setUser } from "../features/auth/authSlice";
import { signupSchema } from "../validations/singupSchema"; */

const SignupScreen = ({ navigation }) => {
    // Estados locales para el correo electrónico, contraseña y confirmación de contraseña
    const [email, setEmail] = useState("");
    const [errorMail, setErrorMail] = useState("");
    const [password, setPassword] = useState("");
    const [errorPassword, setErrorPassword] = useState("")
    const [confirmPassword, setconfirmPassword] = useState("");
    const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

// LLama al hook de mutación de registro 
    const [triggerSignUp, result] = useSignUpMutation()
    console.log(result);

    const dispatch = useDispatch()
    
    useEffect(()=> {
        if (result.isSuccess) {
            dispatch(
                setUser({
                    email: result.data.email, 
                    idToken: result.data.idToken,
                    localId: result.data.localId,
                    profileImage:"",
                })
            )
        }
    }, [result])

    // Función que se ejecuta cuando se presiona el botón de envío
    const onSubmit = () => {
        try {

            //hacer validaciones
            const isValidVariableEmail = isValidEmail(email) //enviar email que etsa en el state
            const isCorrectPassword = isAtLeastSixCharacters(password)
            const isRepeatedPasswordCorrect = password === confirmPassword
            //si se dan estas 3 condiciones entonces trigerear

            if(isValidVariableEmail && isCorrectPassword && isRepeatedPasswordCorrect){

                console.log(email,password , confirmPassword);
                // Objeto con los datos a enviar para el registro
                const request = {
                    email,
                    password,
                    returnSecureToken: true
                }
                
                    // Ejecuta la mutación de registro utilizando el hook
                    triggerSignUp(request)
            }

            if(!isValidVariableEmail) setErrorMail ("El email es incorrecto")
            else setErrorMail("")
            if(!isCorrectPassword) setErrorPassword ("La contraseña es de 6 caracteres")
            else setErrorPassword("")
            if(!isRepeatedPasswordCorrect) setErrorConfirmPassword ("La contraña no es la misma")
            else setErrorConfirmPassword("")



            //Submit logic with validations
        } catch (err) {
            console.log("Catch error");
            console.log(err.message);
        }
    };

    return (
        <View style={styles.main}>
            <View style={styles.container}>
                <Text style={styles.title}>Signup</Text>
                <InputForm label={"email"} onChange={setEmail} error={errorMail} />
                <InputForm
                    label={"password"}
                    onChange={setPassword}
                    error={errorPassword}
                    isSecure={true}
                />
                <InputForm
                    label={"confirm password"}
                    onChange={setconfirmPassword}
                    error={errorConfirmPassword}
                    isSecure={true}
                />
                <SubmitButton onPress={onSubmit} title="Send" />
                <Text style={styles.sub}>Already have an account?</Text>
                <Pressable onPress={() => navigation.navigate("Login")}>
                    <Text style={styles.subLink}>Login</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default SignupScreen;

const styles = StyleSheet.create({
    main: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:colors.salom

    },
    container: {
        width: "90%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.amarillo,
        gap: 15,
        paddingVertical: 20,
        borderRadius: 10,
    },
    title: {
        fontSize: 22,
        fontFamily: "Fira",
    },
    sub: {
        fontSize: 14,
        fontFamily: "Fira",
        color: "black",
    },
    subLink: {
        fontSize: 14,
        fontFamily: "Fira",
        color: colors.rojo,
    },
});