import { ReactNode } from "react";

export interface UsersContextProps {
    children: ReactNode
}

export interface LoginedUserContextType {
    loginedUser: string,
    setLoginedUser: (user: string) => void
}