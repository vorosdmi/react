import { createContext, useEffect, useState } from 'react';
import { LoginedUserContextType, UsersContextProps } from './users.context.props';
import { LocalStorageProps } from '../hooks/localStorage.props';

    export const LoginedUserContext = createContext<LoginedUserContextType>({
        loginedUser: '',
        setLoginedUser: () => {},
        loading: true,
        users: [],
        setUsers: () => {}
    });

    export const LoginedUserContextProvider = ({ children }: UsersContextProps) => {
        const [loginedUser, setLoginedUser] = useState<string>('');
        const [users, setUsers] = useState<LocalStorageProps[]>([]);
        const [loading, setLoading] = useState<boolean>(true);

        useEffect(() => {
            const res = localStorage.getItem('data');
            if (res) {
                const usersLocalStorage = JSON.parse(res) as LocalStorageProps[];
                setUsers(usersLocalStorage);
                const logined = usersLocalStorage.find((user: any) => user.isLogined === true);
                if (logined) {
                    setLoginedUser(logined.name);
                }
            }        
            setLoading(false);
        }, [])
        
        if (loading) {
            return <div>Loading...</div>
        }

        return <LoginedUserContext.Provider value={{ loginedUser, setLoginedUser, loading, users, setUsers }}>
                {children}
            </ LoginedUserContext.Provider>;
    };