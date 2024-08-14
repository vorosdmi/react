import Favorite from '../Favorite/Favorite';
import H3 from '../H3/H3';
import Poster from '../Poster/Poster';
import Rating from '../Rating/Rating';
import './Card.css';

export default function Card({ imgName, title, saved=false, rating }) {
  return (
    <div className="card">
      <Rating num={rating} />
      <div className='poster'>
        <Poster imgName={imgName} />        
      </div>
      <div className='footer'>
        <H3 title={title}/>
        <Favorite saved={saved}/>
      </div>
    </div>
  );
}
