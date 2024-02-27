import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from 'react';

interface AuthContextType {
    isLoggedIn: boolean;
    setIsLoggedIn: Dispatch<SetStateAction<boolean>>
}

const AuthContext = createContext<AuthContextType>({
    isLoggedIn: false,
    setIsLoggedIn: () => { }
});

const useAuthContext = () => useContext(AuthContext);

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <AuthContext.Provider
            value={{ isLoggedIn, setIsLoggedIn }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContextProvider, useAuthContext };

