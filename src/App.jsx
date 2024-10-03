import { useContext, useEffect, useRef, useState } from 'react';
import styles from './App.module.css';
import Button from './components/Button/Button';
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import Input from './components/Input/Input';
import Navbar from './components/Navbar/Navbar';
import Paragraph from './components/Paragraph/Paragraph';
import AuthForm from './components/AuthForm/AuthForm';
import { LoginedUserContext } from './context/users.context';
import useLocalStorage from './hooks/localStorage.hook';

export default function App() {
	const {loginedUser, setLoginedUser} = useContext(LoginedUserContext);
	const [users, setUsers] = useLocalStorage('data');

	const refButton = useRef();
	const refInput = useRef();

	const paragraphFirst = 'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.';
	const movies = [
		{
			img: 'p-black-widow.svg',
			title: 'Black Widow',
			saved: false,
			rating: '324',
			id: 1
		},
		{
			img: 'p-shang-chi.svg',
			title: 'Shang Chi',
			saved: false,
			rating: '124',
			id: 2
		},
		{
			img: 'p-loki.svg',
			title: 'Loki',
			saved: false,
			rating: '235',
			id: 3
		},
		{
			img: 'p-how-i-met.svg',
			title: 'How I Met Your Mother',
			saved: false,
			rating: '123',
			id: 4
		},
		{
			img: 'p-money-heist.svg',
			title: 'Money Heist',
			saved: true,
			rating: '8125',
			id: 5
		},
		{
			img: 'p-friends.svg',
			title: 'Friends',
			saved: false,
			rating: '123',
			id: 6
		},
		{
			img: 'p-big-bang.svg',
			title: 'The Big Bang Theory',
			saved: false,
			rating: '12',
			id: 7
		},
		{
			img: 'p-two-and-a-half-men.svg',
			title: 'Two And a Half Men',
			saved: false,
			rating: '456',
			id: 8
		}
	];

	const checkUser = (userName) => {
		if (loginedUser) {
			alert('User has already logged in. Please, log out first!');
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
		}
	};

	const logout = () => {
		const updatedUsers = users.map(user => 
			user.name === loginedUser ? {...user, isLogined: false} : user
		);
		setUsers(updatedUsers);
		setLoginedUser('');  
	};

	return (
		<>
			<Navbar logoutProcess={logout}/>
			{/* <Navbar /> */}
			<div className={styles['div-body']}>
				<Header title='Поиск'/>
				<Paragraph text={paragraphFirst} size='small' />
				<div className={styles['input-btn']}>
					<Input
						ref={refInput} 
						svgPathLeft='searchIcon.svg'
						placeholder='Введите название'
					/>
					<Button ref={refButton}>Искать</Button>
				</div>
				<div className={styles['cards']}>
					{movies.map((el) => (
						<Card key={el.id}
							imgName={el.img}
							title={el.title}
							saved={el.saved}
							rating={el.rating}
						/>
					))}
				</div>
				<AuthForm onSubmit={checkUser}/>
			</div>
		</>
	);
}