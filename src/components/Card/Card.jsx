import Favorite from '../Favorite/Favorite';
import SubHeader from '../SubHeader/SubHeader';
import Poster from '../Poster/Poster';
import Rating from '../Rating/Rating';
import styles from './Card.module.css';

export default function Card({ imgName, title, saved=false, rating }) {
  return (
    <div className={styles['card']}>
      <Rating num={rating} />
      <div className={styles['poster']}>
        <Poster imgName={imgName} />        
      </div>
      <div className={styles['footer']}>
        <SubHeader title={title}/>
        <Favorite saved={saved}/>
      </div>
    </div>
  );
}
