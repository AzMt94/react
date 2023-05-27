import { Button, TextField, Typography } from '@mui/material';
import React, { Fragment } from 'react';
import { IPropsRegister } from '../../../common/types/auth/auth';

const RegisterPage: React.FC<IPropsRegister> = (props: IPropsRegister): JSX.Element => {
    const {setBin, setEmail, setUserName, setPassword, setRepeatPassword, setCompanyName, navigate} = props
    return (
        <Fragment>
            <Typography variant="h2" padding={2} fontFamily='Poppins' textAlign='center'>Регистрация</Typography>
            <Typography variant="body1" fontFamily='Poppins' textAlign='center'>Введите данные для регистрации</Typography>
            <TextField fullWidth={true} margin='normal' label="BIN" variant="standard" placeholder='Введите ваш БИН>' onChange={(e) => setBin(e.target.value)}/>
            <TextField fullWidth={true} margin='normal' label="Name" variant="standard" placeholder='Введите ваше имя' onChange={(e) => setUserName(e.target.value)}/>
            <TextField fullWidth={true} margin='normal' label="Email" variant="standard" placeholder='Введите ваш email' onChange={(e) => setEmail(e.target.value)}/>
            <TextField fullWidth={true} margin='normal' label="Company name" variant="standard" placeholder='Введите название организации' onChange={(e) => setCompanyName(e.target.value)}/>
            <TextField type='password' fullWidth={true} margin='normal' label="Password" variant="standard" placeholder='Введите ваш пароль' onChange={(e) => setPassword(e.target.value)}/>
            <TextField type='password' fullWidth={true} margin='normal' label="Password" variant="standard" placeholder='Повторите ваш пароль' onChange={(e) => setRepeatPassword(e.target.value)}/>
            <Button type='submit' sx={{fontFamily: 'Poppins', marginTop: 2, marginBottom: 2, width: '60%'}} variant="contained">Регистрация</Button>
            <Typography variant="body1" sx={{fontFamily: 'Poppins'}}>У вас есть аккаунта?<span className='incitingText' onClick={() => navigate('/login')}>Авторизация</span></Typography>
        </Fragment>
    );
};

export default RegisterPage;