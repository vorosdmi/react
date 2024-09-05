import cn from 'classnames';
import styles from './Poster.module.css';

export default function Poster({ imgName, size='s' }) {
  return (
        <img src={`/${imgName}`} alt="poster" className={cn(styles['poster'],
          {[styles['s']]: size === 's'},
          {[styles['m']]: size === 'm'}
    )}/>
  );
}
