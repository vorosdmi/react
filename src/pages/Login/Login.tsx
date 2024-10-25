import { useContext, useEffect, useState } from "react";
import { AuthForm } from "../../components/AuthForm/AuthForm";
import { LoginedUserContext } from "../../context/users.context";
// import { useLocalStorage } from "../../hooks/localStorage.hook";
import styles from './Login.module.css';
import { LocalStorageProps } from "../../hooks/localStorage.props";

export function Login() {
	const {loginedUser, setLoginedUser, users, setUsers} = useContext(LoginedUserContext);
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
					const updatedUsers = users.map(user => user.name === userName ? { ...user, isLogined: true } : user);
					setUsers(updatedUsers);
					localStorage.setItem('data', JSON.stringify(updatedUsers)); 
				} else {
					const newUser = {name: userName, isLogined: true};
					const updatedUsers = [...users, newUser];
					setUsers(updatedUsers);
					localStorage.setItem('data', JSON.stringify(updatedUsers));  
				} 
			} else {
				const newUser = [{name: userName, isLogined: true}]
				setUsers(newUser);  
				localStorage.setItem('data', JSON.stringify(newUser));
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