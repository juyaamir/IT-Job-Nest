import React, {createContext, useContext, useState} from 'react'

export const AuthContext = createContext<any>(false);
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({children}: any) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    return (
        <AuthContext.Provider value={{isAuthenticated, setIsAuthenticated}}>
            {children}
        </AuthContext.Provider>
    )
}