import { useContext, useEffect, useState } from 'react';
import { LoginedUserContext } from '../context/users.context';

function useLocalStorage(key) {
    const { setLoginedUser } = useContext(LoginedUserContext);
    const [data, setData] = useState([]);

    useEffect(() => {
        const res = JSON.parse(localStorage.getItem(key));
        if (res) {
            setData(res);
            const loginedUser = res.find(item => item.isLogined === true);
            if (loginedUser) {
                setLoginedUser(loginedUser.name);
            }
        }
    }, []);

    const saveData = (newData) => {
        if (newData.length) {
            localStorage.setItem(key, JSON.stringify(newData));
            setData(newData);
        }    
    };

    return [data, saveData];
}

export default useLocalStorage;