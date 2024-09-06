import { useEffect, useRef, useState } from 'react';
import styles from './App.module.css';
import Button from './components/Button/Button';
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import Input from './components/Input/Input';
import Navbar from './components/Navbar/Navbar';
import Paragraph from './components/Paragraph/Paragraph';
import AuthForm from './components/AuthForm/AuthForm';

function App() {
  const [loginedUser, setLoginedUser] = useState('');
  const [usersState, setUsersState] = useState([]);

  const refButton = useRef();
  const refInput = useRef();

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

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem('users'));
    if (users) {
      setUsersState(users);

      const user = users.find(user => user.isLogined);   
      if (user) {
        setLoginedUser(user.name);  
      }
    }
  }, []);

  useEffect(() => {
    console.log('2');
    console.log(usersState);
    
    if (usersState.length) {
      localStorage.setItem('users', JSON.stringify(usersState));
    }
  }, [usersState]);

  const checkUser = (user) => {
    if (usersState.length) {
      const userExist = usersState.some(existingUser => existingUser.name === user.userName);

      if (userExist) {
        setUsersState(users => 
          users.map(userMap => userMap.name === user.userName ? {...userMap, isLogined: true} : userMap)
        );
      } else {
        setUsersState(users => [...users, {
          name: user.userName,
          isLogined: true  
        }]);
      }
    } else {
      setUsersState([{
        name: user.userName,
        isLogined: true
      }]);
    }
    setLoginedUser(user.userName);
  };

  const logout = (userName) => {
    setLoginedUser('');
    setUsersState(users => 
      users.map(user => user.name === userName ? {...user, isLogined: false} : user)
    );  
  };

  return (
    <>
      <Navbar user={loginedUser} logoutProcess={logout}/>
      <div className={styles['div-body']}>
        <Header title='Поиск'/>
        <Paragraph text={paragraphFirst} size='small' />
        <div className={styles['input-btn']}>
          <Input
            ref={refInput} 
            svgPathLeft='searchIcon.svg'
            placeholder='Введите название'
          />
          <Button title="Искать" ref={refButton}/>
        </div>
        <div className={styles['cards']}>
          {movies.map((el) => (
            <Card key={el.id}
              imgName={el.img}
              title={el.title}
              saved={el.saved}
              rating={el.rating}
            />
          ))}
        </div>
        <AuthForm onSubmit={checkUser}/>
        {/* <AuthForm/> */}
      </div>
    </>
  );
}

export default App;
