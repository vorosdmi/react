import cn from 'classnames';
import styles from './Favorite.module.css';

export default function Favorite({ saved=false }) {
    const favorite = (saved) ? 
        <>
            <img src='/bookmark.svg' alt="bookmark" />
            <span className={styles['saved']}>В избранном</span>
        </>
         :
        <>
            <img src='/like.svg' alt="like" />
            <span className={styles['unsaved']}>В избранное</span>  
        </>
        ;  
    return (
        <div className={cn(styles['favorite'],
            {[styles['saved']]: saved},
            {[styles['unsaved']]: !saved}
        )}>
            {favorite}
        </div>
    );
}
