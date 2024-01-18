import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { IUser } from '../../lib/types'
import { checkLoginSuccessAndReturnUserObject } from '../../lib/backend/actions'

const Login = () => {
    const [checking, setChecking] = useState(false);
    const [unsuccessfulLastLogin, setUnsuccessfulLastLogin] = useState(false);
    useEffect(() => {
        if (unsuccessfulLastLogin) {
            //do notif that login was unsuccessful
            setChecking(false);
        }
    })
    async function handleLogin(enteredUsername: string, enteredPassword: string) {
        //get user that's logged in with that email
        setChecking(true);
        const user = await checkLoginSuccessAndReturnUserObject(enteredUsername, enteredPassword);
        if (user) {
            await AsyncStorage.setItem("userLoggedIn", JSON.stringify(user))
        }
    }
    return (
        <View>
            <Text>Login</Text>
        </View>
    )
}

export default Login