import styles from './Navbar.module.css';
import Link from '../Link/Link';
import { useContext } from 'react';
import { LoginedUserContext } from '../../context/users.context';

export default function Navbar({ logoutProcess }) {
  const { loginedUser } = useContext(LoginedUserContext);

  const logout = () => {
    logoutProcess();
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
            (loginedUser) ? 
              <>
                <Link text={loginedUser} img={<img src="/user.svg" alt="user"/>} />
                <Link text='Выйти' onClick={logout}/>
              </>
            : 
              <Link text='Войти' img={<img src="/login.svg" alt="favorites" />} />
            }
                     
        </div>
    </div>
  );
}
