import styles from './Link.module.css';
import cn from 'classnames';

export default function Link({ text, focused=false, img=undefined, onClick }) {
  const a_ = (
    <a href="#" onClick={onClick} className={cn(styles['a'], {[styles['focused']]: focused})}>
      {text}
    </a>
    );

  return (
    <div className={styles['div']}>
      {a_}
      {img && img}
    </div>

  );

}
