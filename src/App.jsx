import './App.css';
import Button from './components/Button/Button';
import Header from './components/Header/Header';
import Input from './components/Input/Input';
import Navbar from './components/Navbar/Navbar';
import P from './components/P/P';
// import SearchIcon from '../src/';

function App() {
  const paragraphFirst = 'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.';

  return (
    <>
      <Navbar />
      <div className='div-body'>
        <Header title='Поиск'/>
        <P text={paragraphFirst} size='small'></P>
        <div className='input-btn'>
          <Input 
            svgPathLeft='searchIcon.svg'
            placeholder='Введите название'
          />
          <Button title="Искать" />
        </div>
      </div>
    </>
  );
}

export default App;
