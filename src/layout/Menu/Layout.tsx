import { NavLink, Outlet } from 'react-router-dom';
import styles from './Layout.module.css';
import cn from 'classnames';
import { useContext, useEffect } from 'react';
import { LoginedUserContext } from '../../context/users.context';
import { useLocalStorage } from '../../hooks/localStorage.hook';

export function MainMenu() {

	const [users, setUsers] = useLocalStorage('data')
	const { loginedUser, setLoginedUser } = useContext(LoginedUserContext);
	
	let userMenu = <NavLink className={({ isActive }) => cn(styles.link,
		{
			[styles.active]: isActive
		}
	)} to='/login'>
		{({ isActive }) => (
			<>
				<img
					src={isActive ? '/login-active-icon.svg' : '/login-icon.svg'}
					alt="login icon"
				/>
				Войти
			</>
		)}
	</NavLink>

	function logout() {
		const updatedUsers = users.map(user => 
			user.name === loginedUser ? {...user, isLogined: false} : user
		);
		setUsers(updatedUsers);
		setLoginedUser('');
	}

	if (loginedUser) {
		userMenu = <div className={styles.loginedUser}>
						<NavLink onClick={logout} className={({ isActive }) => cn(styles.link,
							{
								[styles.active]: isActive
							}
						)} to='/login'>Выйти</NavLink> 
						<div className={styles.link}>
							<img src="/user-icon.svg" alt="icon user" />
							{loginedUser}
						</div>
					</div>
	}

	return(
		<>
			<div className={styles.navbar}>
				<div className={styles['img-favorite']}>
					<img src="/favorite-icon.svg" alt="favorite icon" />
				</div>
				<div className={styles.menu}>
					<NavLink className={({ isActive }) => cn(styles.link,
						{
							[styles.active]: isActive
						}
					)} to='/'>Поиск фильмов</NavLink>  
					<NavLink className={({ isActive }) => cn(styles.link, 
						{
							[styles.active]: isActive
						}
					)} to='/favorites'>Мои фильмы</NavLink> 
					{userMenu}
				</div>
			</div>
			<div className={styles.outlet}>
				<Outlet />
			</div>
		</>
	);
}