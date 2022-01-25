import {createContext, useState} from 'react'

export const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState()
    const context = {
        user: user,
        setUser: setUser
    }
    return (
        <AuthContext.Provider value={context}>
            {children}
        </AuthContext.Provider>
    )
}