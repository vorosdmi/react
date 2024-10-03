import { forwardRef } from 'react';
import styles from './Button.module.css';
import { ButtonProps } from './Button.props';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button({ children }, ref ) {

  return (
    <button ref={ref} className={styles.button}>{children}</button> 
  );
});

