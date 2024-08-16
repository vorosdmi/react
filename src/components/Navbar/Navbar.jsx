import './Navbar.css';
import A from '../A/A';

export default function Navbar() {
  const circle_number = 
    <div className='circle-container'>
      <span className='number'>2</span>
    </div>;

  return (
    <div className="navbar">
        <div className="navbar-logo">
            <img src="/bookmark_large.svg" alt="favorites" />
        </div>
        <div className="navbar-btn">
            <A text='Поиск фильмов' focused/>  
            <A text='Мои фильмы' img={circle_number} />
            <A text='Войти' img={<img src="/login.svg" alt="favorites" />} />          
        </div>
    </div>
  );
}
