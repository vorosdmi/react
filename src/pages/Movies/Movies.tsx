import { Header } from '../../components/Header/Header';
import { Text } from '../../components/Text/Text';
import Search from '../../components/Search/Search';
import styles from './Movies.module.css'
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { Button } from '../../components/Button/Button';
import { PREFIX } from '../../helpers/Api';
import { movieProps } from '../../interfaces/movie.interface';
import axios, { AxiosError } from 'axios';
import { MoviesList } from './MoviesList/MoviesList';

export function Movies() {
	const buttonRef = useRef<HTMLButtonElement>(null);
	const searchRef = useRef<HTMLInputElement>(null);
	const [movies, setMovies] = useState<movieProps[]>([])
	const [queryInput, setQueryInput] = useState<string>('');
	const [isValid, setIsValid] = useState<boolean>(true);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>('');
	const [isSearched, setIsSearched] = useState<boolean>(false);

	const getMovies = async(queryParams: string) => {
		try {
			setError(null);
			setIsLoading(true);
			await new Promise<void>((resolve) => {
				setTimeout(() => {
					resolve();
				}, 1000);
			})
			const { data } = await axios.get(`${PREFIX}/?q=${queryParams}`);
			if (data.description) {
				setMovies(data.description);
				setIsLoading(false);
				setIsSearched(true);
			} else {
				throw new Error(data.usage);
			}
		} catch (e) {
			console.error(e);
			setIsLoading(false);
			if (e instanceof AxiosError) {
				setError(e.message);
			} else {
				setError((e as Error).message);	
			}
			return;
		}
	}

	useEffect(() => {
		let timerId: ReturnType<typeof setTimeout>;
		if (!isValid) {
			searchRef.current?.focus();
			timerId = setTimeout(() => {
				setIsValid(true)	
			}, 2000);
			return () => {
				clearTimeout(timerId)
			}
		}
	}, [isValid]);

	const searchMovies = () => {
		const isValidInput = queryInput.trim().length > 0;
		setIsValid(isValidInput);
		if (isValidInput) {
			getMovies(queryInput);
		}
	}

	const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setQueryInput(e.target.value);
	}

	return(
		<>
			<div className={styles.text}>
				<Header>Поиск</Header>
				<Text size='small'>Введите название фильма, сериала или мультфильма для поиска и добавления в избранное</Text>
			</div>
			<div className={styles.search}>
				<Search ref={searchRef} placeholder='Введите название' name='query' onChange={onChangeSearch} isValid={isValid}/>
				<Button ref={buttonRef} onClick={searchMovies}>Искать</Button>
			</div>
			<div className={styles.movies}>
				{isLoading && <div className={styles['info-loader']}>Загружаем фильмы...</div>}
				{!isLoading && <MoviesList movies={movies} isSearched={isSearched}/>}
				{error && <div className={styles['info-loader']}>{error}</div>}
			</div>
		</>
	);
}