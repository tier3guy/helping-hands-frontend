// Constants
import { MODE, TEST_API_URL, PROD_API_URL } from './config';
import { ASYNC_STORAGE_ACCESS_KEY } from '../globals/constants';

// External Libraries
import AsyncStorage from "@react-native-async-storage/async-storage";

const API_URL = MODE === 'development' ? TEST_API_URL : PROD_API_URL;

export const SignupFunction = async (data, setErrorMessages, setUser) => {
    
        const { fullName, email, phone, password } = data;
    
        fetch(`${API_URL}/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: fullName,
                email,
                phone,
                password,
            }),
        })
        .then((response) => response.json())
        .then((data) => {
            if(data.status === 'failed' && data.result === 'Email already exists'){
                setErrorMessages('Email already exists');
                return;
            };
            if(data.status === 'failed' && data.result === 'Phone already exists'){
                setErrorMessages('Phone already exists');
                return;
            };
            if(data.status === 'success'){
                setUser(data.result);
                AsyncStorage.setItem(ASYNC_STORAGE_ACCESS_KEY, data.result);
                return;
            }
            console.log(data);
            return data;
        })
        .catch((error) => {
            return {
                status: 'failed',
                result: error
            }
        })
};

export const LoginFunction = (data, setErrorMessages, setUser) => {


    const { emailOrPhone, password } = data;
    const isEmail = emailOrPhone.includes('@');

    fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: isEmail ? emailOrPhone : '',
            phone: isEmail ? '' : emailOrPhone,
            password,
        }),
    })
    .then((response) => response.json())
    .then((data) => {
        if(data.status === 'failed' && data.result === 'Wrong password'){
            setErrorMessages('Either email or password is invalid');
            return;
        };
        if(data.status === 'failed' && data.result === 'No result found'){
            setErrorMessages('User is not registered');
            return;
        };
        if(data.status === 'success'){
            setUser(data.result);
            AsyncStorage.setItem(ASYNC_STORAGE_ACCESS_KEY, data.result);
            return;
        }
        return data;
    })
    .catch((error) => {
        return {
            status: 'failed',
            result: error
        }
    })
};

export const LogoutFunction = async () => {};

export const ResetPasswordFunction = async (data) => {};

export const UpdatePasswordFunction = async (data) => {};

export const UpdateProfileFunction = async (data) => {};

