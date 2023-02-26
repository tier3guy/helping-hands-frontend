// Internal Libraries
import React from 'react';
import { useAuth } from '../context/authContext';

// Routes
import AppRoutes from './AppRoutes';
import AuthRoutes from './AuthRoutes';

/**
 * 
 * @returns {JSX.Element} - Returns the routes for the app
 */
const Routes = () => {
    const { user } = useAuth();
    return (
        <>
            {user ? <AppRoutes/> : <AuthRoutes/>}
        </>
    )
}

export default Routes;