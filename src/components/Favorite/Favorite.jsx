import cn from 'classnames';
import './Favorite.css';

export default function Favorite({ saved=false }) {
    const favorite = (saved) ? 
        <>
            <img src='/bookmark.svg' alt="bookmark" />
            <span className='saved'>В избранном</span>
        </>
         :
        <>
            <img src='/like.svg' alt="like" />
            <span className='unsaved'>В избранное</span>  
        </>
        ;  
    return (
        <div className={cn('favorite',
            {'saved': saved},
            {'unsaved': !saved}
        )}>
            {favorite}
        </div>
    );
}
