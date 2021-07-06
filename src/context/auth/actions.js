import client from '../../apollo/client';
import {
    QUERY_GET_USER
} from '../../apollo/queries/auth'
import {
    MUTATION_LOG_IN,
    MUTATION_SIGN_UP,
    MUTATION_UPDATE_USER,
} from '../../apollo/mutations/auth';
import { errorHandler, setError } from '../api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { emptyUser } from './reducer';

export const logIn = async ({ dispatchAuth, dispatchApi, logInData }) => {
    try {
        console.log('logIn triggered');//debug
        //0. clear api errors
        setError({ dispatchApi, errorMessage: null });

        //1. log in
        const logInResponse = await client.mutate({
            mutation: MUTATION_LOG_IN,
            variables: logInData
        });
        console.log(`logInResponse`, logInResponse); //debug

        //2. add token to context and async storage
        const { jwt } = logInResponse.data.login;
        console.log(`jwt`, jwt);//debug
        setToken({ dispatchAuth, jwt });
        await AsyncStorage.setItem('jwt', jwt);

        //3. get full user and add it to context and async storage
        const userId = logInResponse.data.login.user.id
        const user = await getUser({ userId, jwt });
        console.log(`user`, user);//debug
        setUser({ dispatchAuth, user });
        await AsyncStorage.setItem('user', JSON.stringify(user));

    } catch (err) {
        console.log('err', JSON.stringify(err)); //debug
        errorHandler({ dispatchApi, errorObject: err });
    }
}

export const logOut = ({ dispatchAuth, dispatchApi }) => {
    console.log('logOut triggered');//debug
    setError({ dispatchApi, errorMessage: null });
    setToken({ dispatchAuth, jwt: null });
    setUser({ dispatchAuth, user: emptyUser });
    AsyncStorage.removeItem('jwt');
    AsyncStorage.removeItem('user');
}

export const signUp = async ({ dispatchApi, dispatchAuth, newUserData }) => {
    try {
        console.log('signUp triggered');//debug
        //0. clear api errors
        setError({ dispatchApi, errorMessage: null });

        //1. create new user
        const signUpResponse = await client.mutate({
            mutation: MUTATION_SIGN_UP,
            variables: newUserData
        });
        console.log(`signUpResponse`, signUpResponse);//debug

        //2. add token to context and async storage
        const { jwt } = signUpResponse.data.register;
        console.log(`jwt`, jwt);//debug
        setToken({ dispatchAuth, jwt });
        await AsyncStorage.setItem('jwt', jwt);

        //3. get full user and add it to context and async storage
        const userId = signUpResponse.data.register.user.id
        const user = await getUser({ userId, jwt });
        console.log(`user`, user);//debug
        setUser({ dispatchAuth, user });
        await AsyncStorage.setItem('user', JSON.stringify(user));

    } catch (err) {
        console.log('err', JSON.stringify(err)); //debug
        errorHandler({ dispatchApi, errorObject: err });
    }
}

export const setToken = async ({ dispatchAuth, jwt }) => {
    console.log('setToken triggered');//debug
    dispatchAuth({ type: 'SET_TOKEN', payload: jwt });
}

export const setUser = async ({ dispatchAuth, user }) => {
    console.log('setUser triggered');//debug
    dispatchAuth({ type: 'SET_USER', payload: user });
}

export const getUser = async ({ userId, jwt }) => {
    console.log('getUser triggered');//debug
    const getUserResponse = await client.query({
        query: QUERY_GET_USER,
        variables: { id: userId },
        context: {
            headers: {
                "authorization": "Bearer " + jwt
            }
        }
    });
    return getUserResponse.data.user;
}

export const updateUser = async ({ dispatchApi, dispatchAuth, updatedUserData, jwt }) => {
    console.log(`updatedUserData`, updatedUserData);//debug
    try {
        console.log('updateUser triggered');//debug
        //0. clear api errors
        setError({ dispatchApi, errorMessage: null });

        //1. update user
        const updateUserResponse = await client.mutate({
            mutation: MUTATION_UPDATE_USER,
            variables: updatedUserData,
            context: {
                headers: {
                    "authorization": "Bearer " + jwt
                }
            }
        });
        console.log(`updateUserResponse.data.updateUser.user`, updateUserResponse.data.updateUser.user); //debug

        //2. update context and storage with updated user
        const { user } = updateUserResponse.data.updateUser;
        setUser({ dispatchAuth, user });
        await AsyncStorage.setItem('user', JSON.stringify(user));

    } catch (err) {
        console.log('err', JSON.stringify(err)); //debug
        errorHandler({ dispatchApi, errorObject: err });
    }

}

export const storageCheck = async ({ dispatchAuth, dispatchApi }) => {
    try {
        console.log('storageCheck triggered');//debug
        const jwt = await AsyncStorage.getItem('jwt');
        const userString = await AsyncStorage.getItem('user');
        const user = await JSON.parse(userString);
        console.log(`jwt`, jwt); //debug
        console.log(`user`, user); //debug
        if (jwt && user) {
            setUser({ dispatchAuth, user });
            setToken({ dispatchAuth, jwt });
        }
    } catch (err) {
        console.log(`err`, err);
        errorHandler({ dispatchApi, errorObject: err });
    }
}