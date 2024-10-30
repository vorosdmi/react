import { useContext } from "react";
import { MovieCard } from "../../../components/MovieCard/MovieCard";
import { movieProps } from "../../../interfaces/movie.interface";
import styles from './MoviesList.module.css'
import { LoginedUserContext } from "../../../context/users.context";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

export function MoviesList( { movies, isSearched } : {movies: movieProps[], isSearched: boolean}) {

    const { loginedUser } = useContext(LoginedUserContext);
    const favoriteMovies = useSelector((s: RootState) => s.favorite.movies);

    return(
        <>
            {!movies.length && isSearched && <div className={styles.error}>Ничего не найдено</div>}
            {movies.length > 0 && movies.map((card) => (                
                <MovieCard key={card['#IMDB_ID']}
                    id={card['#IMDB_ID']}
                    rating={card['#RANK']}
                    image={card['#IMG_POSTER']}
                    title={card['#TITLE']}
                    saved={false}
                />
                ))}
        </>
    )
}