import styles from './Search.module.css';
import { SearchProps } from './Search.props';

export function Search({ ...props }: SearchProps) {
  return (
    <div className={styles.wrapper}>
        <img src="/search-icon.svg" alt="icon search" className={styles.image}/>
        <input {...props} className={styles.input}/>
    </div>
  );
};
