import { IUser } from './../../lib/types';
import * as SecureStore from 'expo-secure-store';
import { checkLoginSuccessAndReturnUserObject, checkUnmodifiedLocalUser } from '../../lib/backend/actions';
import { setUserCheckCode } from '../../lib/backend/actions';

async function onLoad(enteredUsername: string, enteredPassword: string) {
    //return the user object if successful, false if not
    const storedUserID: string | null = await SecureStore.getItemAsync("userID");
    const storedCheckCode: string | null = await SecureStore.getItemAsync("checkCode");
    const outcome = await checkLoginSuccessAndReturnUserObject({ userID: storedUserID, checkCode: storedCheckCode });
    if (outcome == false) {
        //redirect to login screen
        return;
    }
    else {
        return true;
    }

}