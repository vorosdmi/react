import './A.css';
import cn from 'classnames';

export default function A({ text, focused=false }) {
  return (
    <a href="#" className={cn('a',
        {'focused': focused}
    )}>{text}</a>
  );
}
