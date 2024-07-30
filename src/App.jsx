import './App.css';
import Button from './components/Button/Button';
import Header from './components/Header/Header';
import P from './components/P/P';

function App() {
  const paragraphFirst = 'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.';

  return (
    <>
      <Header title='Поиск'/>
      <Button title='Искать'/>
      <P text={paragraphFirst} size='small'></P>
      <P text={paragraphFirst} size='medium'></P>
    </>
  );
}

export default App;
