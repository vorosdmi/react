import cn from 'classnames';
import './Poster.css';


export default function Poster({ imgName, size='s' }) {
  return (
        <img src={`/${imgName}`} alt="poster" className={cn('poster',
          {'s': size === 's'},
          {'m': size === 'm'}
    )}/>
  );
}
