import { Link } from 'react-router-dom';
import styles from './MovieCard.module.css';
import { MovieCardProps } from './MovieCard.props';
import cn from 'classnames';
import { MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { favoriteActions } from '../../store/favorite.slice';
import { movieProps } from '../../interfaces/movie.interface';

export function MovieCard({ ...props}: MovieCardProps) {
  const dispatch = useDispatch<AppDispatch>();

  const clickFavorite = (e: MouseEvent) => {
    e.preventDefault();
    const movie: movieProps = {
        "#TITLE": props.title,
        "#IMDB_ID": props.id,
        "#RANK": props.rating,
        "#IMG_POSTER": props.image,
        "saved": true
    }
    dispatch(favoriteActions.addToFavorite(movie));
  }

  return (
    <Link to={`movie/${props.id}`} className={styles.link}>
      <div className={styles.card}>
        <div className={styles.head} style={
            {
              backgroundImage: `url(${props.image})`,
              backgroundSize: 'cover'
            }
          }>
          <div className={styles.rating}>
            <img src="/star-icon.svg" alt="star icon" />
            &nbsp;
            {props.rating} 
          </div> 
        </div>
        <div className={styles.footer}>
          <div className={styles.title}>
            {props.title}
          </div>
          {props.saved && 
            <div className={cn(styles.favorite, styles.saved)}>
              <img src='/favorite-small-icon.svg' alt='unliked icon'></img>
              <span>В избранном</span>
            </div>
          }
          {!props.saved && 
            <div className={styles.favorite}>
              <img src='/add-to-favorite-icon.svg' alt='liked icon'></img>
              <span onClick={clickFavorite}>В избранное</span>
            </div>
          }
        </div> 
      </div>
    </Link>
  );
}
