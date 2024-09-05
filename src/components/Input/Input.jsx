import styles from './Input.module.css';

export default function Input({ svgPathLeft, placeholder, svgPathRight }) {
  return (
    <div className={styles['input-wrapper']}>
        {
            svgPathLeft && 
            <img src={`/${svgPathLeft}`} alt="left img" />
        }
        <input type="text" placeholder={placeholder}/>
        {
            svgPathRight && 
            <img src={`/${svgPathRight}`} alt="right img" />
        }
    </div>
  );
}
