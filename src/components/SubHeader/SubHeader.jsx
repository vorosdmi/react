import styles from './SubHeader.module.css';

export default function H3({ title }) {
  return (
    <h3 className={styles['h3']}>{title}</h3>
  );
}
