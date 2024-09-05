import styles from './Button.module.css';

export default function Button( {title} ) {

  const onClick = (e) => {
    console.log(`Нажата кнопка ${e.target.innerHTML}`);
  };

  return (
    <button className={styles['button']} onClick={onClick}>{title}</button> 
  );
}
