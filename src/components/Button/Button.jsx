import './Button.css';

export default function Button( {title} ) {

  const onClick = (e) => {
    console.log(`Нажата кнопка ${e.target.innerHTML}`);
  };

  return (
    <button className='button' onClick={onClick}>{title}</button> 
  );
}
