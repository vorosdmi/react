import { Header } from '../../components/Header/Header';
import { Text } from '../../components/Text/Text';
import {  Search } from '../../components/Search/Search';
import styles from './Movies.module.css'
import { useContext, useRef } from 'react';
import { Button } from '../../components/Button/Button';
import { movies } from '../../data/cards';
import { Card } from '../../components/Card/Card';
import { LoginedUserContext } from '../../context/users.context';

export function Movies() {
	const buttonRef = useRef<HTMLButtonElement>(null);

	return(
		<>
			<div className={styles.text}>
				<Header>Поиск</Header>
				<Text size='small'>Введите название фильма, сериала или мультфильма для поиска и добавления в избранное</Text>
			</div>
			<div className={styles.search}>
				<Search placeholder='Введите название'/>
				<Button ref={buttonRef}>Искать</Button>
			</div>
			<div className={styles.movies}>
				{movies.map((card) => (
					<Card key={card.id}
						id={card.id}
						rating={card.rating}
						image={card.img}
						title={card.title}
						saved={card.saved}
					/>
				))}
			</div>
		</>
	);
}