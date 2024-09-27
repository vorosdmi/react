import { createContext, useState } from 'react';
import { LoginedUserContextType, UsersContextProps } from './users.context.props';

    export const LoginedUserContext = createContext<LoginedUserContextType>({
        loginedUser: '',
        setLoginedUser: () => {}
    });

    export const LoginedUserContextProvider = ({ children }: UsersContextProps) => {
        const [loginedUser, setLoginedUser] = useState('');
        
        return <LoginedUserContext.Provider value={{ loginedUser, setLoginedUser }}>
                {children}
            </ LoginedUserContext.Provider>;
    };