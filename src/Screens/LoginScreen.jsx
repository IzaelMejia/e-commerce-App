import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import InputForm from '../Components/InputForm'
import SubmitButton from '../Components/SubmitButton'
import { colors } from '../Global/Colors'
import { useSignInMutation } from '../Services/authServices'
import { useState } from 'react'
import { isAtLeastSixCharacters, isValidEmail } from '../Validations/auth'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { setUser } from '../Features/User/userSlice'

const LoginScreen = ({navigation}) => {

    const [triggerSignIn, resultSignIn] = useSignInMutation();

    const [email, setEmail] =  useState("") 
    const [password, setPassword] =  useState("") 

    const [errorEmail, setErrorEmail] = useState('')
    const [errorPassword, setErrorPassword] = useState('')

    const dispatch = useDispatch()


    const onSubmit = () => {

         //Validaciones antes del Trigger
         const isValidVariableEmail = isValidEmail(email)
         const isCorrectPassword = isAtLeastSixCharacters(password)

         //si las validaciones son correctas hacer el trigger
         if (isValidVariableEmail && isCorrectPassword) {
            triggerSignIn({
                email,
                password,
                returnSecureToken: true,
            });
        }

        if (!isValidVariableEmail) setErrorEmail ('El email es incorrecto')
        else setErrorEmail('')
        if (!isCorrectPassword) setErrorPassword ('Contraseña incorrecta')
        else setErrorPassword('')
    }

    //console.log(resultSignIn);

    //que se envie cuando hay cambios 
    useEffect(()=> {
        if(resultSignIn.isSuccess) {  //si fue satisfactorio - resultSignIn.isSuccess es resultSignIn.isSuccess ===true
            dispatch(setUser({ //despachar la accion setUser, y le enviamos el email y la idToken
                email: resultSignIn.data.email, //email que envia de resputa 
                idToken: resultSignIn.data.idToken,
                localId: resultSignIn.data.localId,
                profileImage:"",
            }))
        }
    }, [resultSignIn])


  return (
    <View style={styles.main}>
        <View style={styles.container}>
            <Text style={styles.title}>Login to start</Text>
            <InputForm 
                label={"email"}
                // setea el texto con el email
                onChange={(email) => setEmail(email)}
                error={errorEmail}
            />
            <InputForm 
                label={"password"}
                onChange={(password) => setPassword(password)}
                error={errorPassword}
                isSecure={true}
            />
            <SubmitButton 
                onPress={onSubmit}
                title = "Send"
            />
            <Text style={styles.sub}>Not have an account?</Text>
            <Pressable onPress={()=> navigation.navigate('Signup')}>
                <Text style={styles.subLink}>Sign up</Text>
            </Pressable>
        </View>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    main: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:colors.salom
    },
    container: {
        width: '90%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.amarillo,
        gap: 15,
        paddingVertical: 20,
        borderRadius: 10,
    },
    title: {
        fontSize: 22,
        fontFamily: 'fira'
    },
    sub: {
        fontSize: 15,
        color: 'black',
    },
    subLink: {
        fontSize: 14,
        color: colors.rojo,
    }
})