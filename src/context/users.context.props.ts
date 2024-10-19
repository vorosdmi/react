import { ReactNode } from "react";
import { LocalStorageProps } from "../hooks/localStorage.props";

export interface UsersContextProps {
    children: ReactNode
}

export interface LoginedUserContextType {
    loginedUser: string,
    setLoginedUser: (user: string) => void,
    loading: boolean,
    users: LocalStorageProps[],
    setUsers: (users: LocalStorageProps[] | ((prevUsers: LocalStorageProps[]) => LocalStorageProps[])) => void
}