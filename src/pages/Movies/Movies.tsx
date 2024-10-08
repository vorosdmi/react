import { Header } from '../../components/Header/Header';
import { Text } from '../../components/Text/Text';
import {  Search } from '../../components/Search/Search';
import styles from './Movies.module.css'
import { useRef } from 'react';
import { Button } from '../../components/Button/Button';
import { movies } from '../../data/cards';
import { Card } from '../../components/Card/Card';
import { PREFIX } from '../../helpers/Api';

export function Movies(queryParams: string) {
	const buttonRef = useRef<HTMLButtonElement>(null);

	const getMovies = async() => {
		try {
			const res = await fetch(`${PREFIX}/?q=${queryParams}`);
			if (!res.ok) {
				return
			}
			const data = await res.json()
		} catch (e) {
			
		}
	}

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