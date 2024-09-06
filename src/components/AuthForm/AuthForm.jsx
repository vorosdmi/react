import Header from '../Header/Header';
import Input from '../Input/Input';
import Button from '../Button/Button';
import styles from './AuthForm.module.css';
import { useReducer } from 'react';

export default function AuthForm({ onSubmit }) {

    const Login = (e) => {
        e.preventDefault();      
        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);
        onSubmit(formProps);         
    };

  return (
    <form className={styles['auth-form']} onSubmit={Login}>
        <Header title={'Вход'}/>
        <Input placeholder={'Ваше имя'} name='userName'/>
        <Button title={'Войти в профиль'} />
    </form>
  );
}