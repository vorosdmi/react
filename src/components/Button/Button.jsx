import { forwardRef } from 'react';
import styles from './Button.module.css';

const Button = forwardRef(function Button({ title }, ref ) {

  const onClick = (e) => {
    console.log(`Нажата кнопка ${e.target.innerHTML}`);
  };

  return (
    <button ref={ref} className={styles['button']} onClick={onClick}>{title}</button> 
  );
});

export default Button;
