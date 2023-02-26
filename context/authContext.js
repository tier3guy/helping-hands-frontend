// Internal Libraries
import { createContext, useState, useEffect, useContext } from "react";

// External Libraries
import AsyncStorage from "@react-native-async-storage/async-storage";

// Globals
import { ASYNC_STORAGE_ACCESS_KEY } from "../globals/constants";

export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [userLoginLoader, setUserLoginLoader] = useState(true);

    const getUser = async () => {
        try{
            const user = await AsyncStorage.getItem(ASYNC_STORAGE_ACCESS_KEY);
            setUser(JSON.parse(user));
            setUserLoginLoader(false);
        }
        catch(error){
            console.log(error);
            setUserLoginLoader(false);
        }
    };

    useEffect(() => {
        getUser();
    }, []);

    return (
        <AuthContext.Provider value={{user, setUser, userLoginLoader}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
