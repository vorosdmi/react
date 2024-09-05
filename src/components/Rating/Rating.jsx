import styles from './Rating.module.css';

export default function Rating({ num }) {
  return (
    <div className={styles['rating']}>
        <img src="/star.svg" alt="rating" /> 
        <span>{num}</span>     
    </div>
  );
}
