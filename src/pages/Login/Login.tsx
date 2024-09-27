import { useContext, useEffect, useState } from "react";
import { AuthForm } from "../../components/AuthForm/AuthForm";
import { LoginedUserContext } from "../../context/users.context";
import { useLocalStorage } from "../../hooks/localStorage.hook";
import styles from './Login.module.css';

export function Login() {
	const {loginedUser, setLoginedUser} = useContext(LoginedUserContext);
	const [users, setUsers] = useLocalStorage('data');
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		let errorTimer: ReturnType<typeof setTimeout>;
		if (error) {
			errorTimer = setTimeout(() => {
				setError(null);
			}, 2000)
		}
		return () => {
			clearTimeout(errorTimer)
		}
	}, [error])

	const checkUser = (userName: string) => {
		if (loginedUser) {
			setError('User has already logged in. Please, log out first!');
		} else {
			if (users.length) {
				const userExist = users.some(existingUser => existingUser.name === userName);
				if (userExist) {
					setUsers(users.map(userMap => userMap.name === userName ? {...userMap, isLogined: true} : userMap)
					);  
				} else {
					setUsers([...users, {
						name: userName,
						isLogined: true  
					}]);  
				} 
			} else {
				setUsers([{
					name: userName,
					isLogined: true
				}]);  
			}
			setLoginedUser(userName);
			setError(null);
		}
		};

	return(
		<div>
			{error && <div className={styles.error}>{error}</div>}
			<AuthForm onSubmit={checkUser}/>		
		</div>
	);
}