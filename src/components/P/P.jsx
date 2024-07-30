import cn from 'classnames';
import './P.css';

export default function P( {text, size} ) {
  return (
    <p className={cn('p', 
        {
            'small': size === 'small',
            'medium': size === 'medium'
        }
    )}>{text}</p>
);
}
