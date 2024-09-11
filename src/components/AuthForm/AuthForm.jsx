import Header from '../Header/Header';
import Input from '../Input/Input';
import Button from '../Button/Button';
import styles from './AuthForm.module.css';
import { LoginedUserContext } from '../../context/users.context';
import { useContext, useState } from 'react';

export default function AuthForm({ onSubmit }) {
    const [inputName, setInputName] = useState('');

    const onChange = (e) => {
      setInputName(e.target.value);
      console.log(e.target.value);
      
    };

    const Login = (e) => {
        e.preventDefault();      
        // const formData = new FormData(e.target);
        // const formProps = Object.fromEntries(formData);
        onSubmit(inputName);  
        setInputName('');
    };

  return (
    <form className={styles['auth-form']} onSubmit={Login}>
        <Header title={'Вход'}/>
        <Input placeholder={'Ваше имя'} name='userName' value={inputName} onChange={onChange}/>
        <Button title={'Войти в профиль'} />
    </form>
  );
}
