    import { createContext, useState } from 'react';

    export const LoginedUserContext = createContext({
        loginedUser: ''
    });

    export const LoginedUserContextProvider = ({ children }) => {
        const [loginedUser, setLoginedUser] = useState('');
        
        return <LoginedUserContext.Provider value={{ loginedUser, setLoginedUser }}>
                {children}
            </ LoginedUserContext.Provider>;
    };