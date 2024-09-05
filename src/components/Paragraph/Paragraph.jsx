import cn from 'classnames';
import styles from './Paragraph.module.css';

export default function P( {text, size} ) {
  return (
    <p className={cn(styles['p'], 
        {
            [styles['small']]: size === 'small',
            [styles['medium']]: size === 'medium'
        }
    )}>{text}</p>
);
}
