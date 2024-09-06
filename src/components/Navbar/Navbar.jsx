import styles from './Navbar.module.css';
import Link from '../Link/Link';

export default function Navbar({ user, logoutProcess }) {
  // const circle_number = 
  //   <div className={styles['circle-container']}>
  //     <span className={styles['number']}>2</span>
  //   </div>;

  const logout = () => {
    logoutProcess(user);
  };
  

  return (
    <div className={styles['navbar']}>
        <div className={styles['navbar-logo']}>
            <img src="/bookmark_large.svg" alt="favorites" />
        </div>
        <div className={styles['navbar-btn']}>
            <Link text='Поиск фильмов' focused/>  
            {/* <Link text='Мои фильмы' img={circle_number} /> */}
            <Link text='Мои фильмы'/>
            {
            (user) ? 
              <>
                <Link text={user} img={<img src="/user.svg" alt="user"/>} />
                <Link text='Выйти' onClick={logout}/>
              </>
            : 
              <Link text='Войти' img={<img src="/login.svg" alt="favorites" />} />
            }
                     
        </div>
    </div>
  );
}
