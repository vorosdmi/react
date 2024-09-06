import { forwardRef } from 'react';
import styles from './Input.module.css';

const Input = forwardRef(function Input({ svgPathLeft, placeholder, svgPathRight, ...props }, ref) {
  return (
    <div className={styles['input-wrapper']}>
        {
            svgPathLeft && 
            <img src={`/${svgPathLeft}`} alt="left img" />
        }
        <input {...props} ref={ref} type="text" placeholder={placeholder}/>
        {
            svgPathRight && 
            <img src={`/${svgPathRight}`} alt="right img" />
        }
    </div>
  );
});

export default Input;
