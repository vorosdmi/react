import styles from './Card.module.css';
import { CardProps } from './Card.props';
import cn from 'classnames';

export function Card({ ...props}: CardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.head} style={{backgroundImage: `url(${props.image})`}}>
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
            <span>В избранное</span>
          </div>
        }
      </div> 
    </div>
  );
}
