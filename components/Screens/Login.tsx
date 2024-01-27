import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { IUser } from '../../lib/types'
import { checkLoginSuccessAndReturnUserObject, checkUnmodifiedLocalUser, setUserCheckCode } from '../../app/backend/actions'
import * as SecureStore from 'expo-secure-store';

const Login = () => {
    const [checking, setChecking] = useState(false);
    const [unsuccessfulLastLogin, setUnsuccessfulLastLogin] = useState(false);
    // const generateRandomString = (length: number) => {
    //     const char = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890';
    //     const random = Array.from(
    //         { length: length },
    //         () => char[Math.floor(Math.random() * char.length)]
    //     );
    //     return random.join("");
    // }

    useEffect(() => {
        if (unsuccessfulLastLogin) {
            //do notif that login was unsuccessful
            setChecking(false);
        }
    })
    async function handleLogin(enteredUsername: string, enteredPassword: string) {
        //get user that's logged in with that email
        setChecking(true);
        //return the user object if successful, false if not
        const outcome = await checkLoginSuccessAndReturnUserObject({ username: enteredUsername, _password: enteredPassword });
        if (outcome == false) {
            setUnsuccessfulLastLogin(true);
            return;
        }
        //get the stored user in local storage
        await SecureStore.setItemAsync("userLoggedIn", JSON.stringify(outcome as IUser));
        setChecking(false);

        //randomCode

    }
    return (
        <View>
            <Text>Login</Text>
        </View>
    )
}

export default Login