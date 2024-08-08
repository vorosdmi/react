import './Navbar.css';
import A from '../A/A';

export default function Navbar() {
  return (
    <div className="navbar">
        <div className="navbar-logo">
            <img src="/logo.svg" alt="" />
        </div>
        <div className="navbar-btn">
            <A text='Поиск фильмов' focused/>  
            <A text='Мои фильмы'/>
            <A text='Войти'/>          
        </div>
    </div>
  );
}
