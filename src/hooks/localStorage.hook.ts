import { useContext, useEffect, useState } from "react";
import { LoginedUserContext } from "../context/users.context";
import { LocalStorageProps } from "./localStorage.props";

export function useLocalStorage(key: string): [LocalStorageProps[], (data: LocalStorageProps[]) => void] {
    const { setLoginedUser } = useContext(LoginedUserContext);
    const [data, setData] = useState<LocalStorageProps[]>([]);

    useEffect(() => {
        const res = localStorage.getItem(key);
        if (res) {
            const parsedData = JSON.parse(res) as LocalStorageProps[];
            if (parsedData) {
                setData(parsedData);
                const loginedUser = parsedData.find(item => item.isLogined === true);
                if (loginedUser) {
                    setLoginedUser(loginedUser.name)
                }
            }
        }
    }, []);

    const saveData = (newData: LocalStorageProps[]) => {
        if (newData.length) {
            localStorage.setItem(key, JSON.stringify(newData));
            setData(newData);
        }
    }

    return [data, saveData]
}