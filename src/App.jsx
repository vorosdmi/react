import './App.css';
import Button from './components/Button/Button';
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import Input from './components/Input/Input';
import Navbar from './components/Navbar/Navbar';
import P from './components/P/P';
// import SearchIcon from '../src/';

function App() {
  const paragraphFirst = 'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.';
  const movies = [
    {
      img: 'p-black-widow.svg',
      title: 'Black Widow',
      saved: false,
      rating: '324',
      id: 1
    },
    {
      img: 'p-shang-chi.svg',
      title: 'Shang Chi',
      saved: false,
      rating: '124',
      id: 2
    },
    {
      img: 'p-loki.svg',
      title: 'Loki',
      saved: false,
      rating: '235',
      id: 3
    },
    {
      img: 'p-how-i-met.svg',
      title: 'How I Met Your Mother',
      saved: false,
      rating: '123',
      id: 4
    },
    {
      img: 'p-money-heist.svg',
      title: 'Money Heist',
      saved: true,
      rating: '8125',
      id: 5
    },
    {
      img: 'p-friends.svg',
      title: 'Friends',
      saved: false,
      rating: '123',
      id: 6
    },
    {
      img: 'p-big-bang.svg',
      title: 'The Big Bang Theory',
      saved: false,
      rating: '12',
      id: 7
    },
    {
      img: 'p-two-and-a-half-men.svg',
      title: 'Two And a Half Men',
      saved: false,
      rating: '456',
      id: 8
    }
  ];

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
        <div className='cards'>
          {movies.map((el) => (
            <Card key={el.key}
              imgName={el.img}
              title={el.title}
              saved={el.saved}
              rating={el.rating}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
