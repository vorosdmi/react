import './A.css';
import cn from 'classnames';

export default function A({ text, focused=false, img=undefined }) {
  const a_ = (
    <a href="#" className={cn('a', {'focused': focused})}>
      {text}
    </a>
    );

  return (
    <div className='div'>
      {a_}
      {img && img}
    </div>

  );

}
