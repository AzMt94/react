import { Button, TextField, Typography } from "@mui/material";
import { Fragment } from "react";
import { IPropsLogin } from "../../../common/types/auth/auth";



const LoginPage: React.FC<IPropsLogin> = (props: IPropsLogin): JSX.Element => {
    const {setPassword, setEmail, navigate} = props;
    return (
        <Fragment>
        <Typography variant="h2" padding={2} fontFamily='Poppins' textAlign='center'>Авторизация</Typography>
        <Typography variant="body1" fontFamily='Poppins' textAlign='center'>Введите ваш логин и пароль</Typography>
        <TextField fullWidth={true} margin='normal' label="Email" variant="standard" placeholder='Введите ваш email' onChange={(e)=> setEmail(e.target.value)}/>
        <TextField type='password' fullWidth={true} margin='normal' label="Password" variant="standard" placeholder='Введите ваш пароль' onChange={(e)=> setPassword(e.target.value)}/>
        <Button type='submit' sx={{fontFamily: 'Poppins', marginTop: 2, marginBottom: 2, width: '60%'}} variant="contained">Войти</Button>
        <Typography variant="body1" sx={{fontFamily: 'Poppins'}}>У вас нет аккаунта?<span className='incitingText' onClick={() => navigate('/register')}>Регистрация</span></Typography>
    </Fragment>
    );
};

export default LoginPage;