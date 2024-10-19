import { NavLink, Outlet } from 'react-router-dom';
import styles from './Layout.module.css';
import cn from 'classnames';
import { useContext } from 'react';
import { LoginedUserContext } from '../../context/users.context';

export function MainMenu() {

	const { loginedUser, setLoginedUser, users, setUsers } = useContext(LoginedUserContext);
	
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
	
	function logout() {
		setLoginedUser('');
		const updatedUsers = users.map(user => ({...user, isLogined: false}));
		setUsers(updatedUsers);
		localStorage.setItem('data', JSON.stringify(updatedUsers));
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