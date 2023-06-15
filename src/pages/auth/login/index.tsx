import { TextField, Typography } from "@mui/material";
import { Fragment } from "react";
import { IPropsLogin } from "../../../common/types/auth/auth";
import { useStyles } from "../styles";
import AppLoadingButton from "../../../component/loading-button";



const LoginPage: React.FC<IPropsLogin> = (props: IPropsLogin): JSX.Element => {
    const {navigate, register, errors, loading} = props;
    const classes = useStyles()
    return (
        <Fragment>
        <Typography variant="h2" padding={2} textAlign='center'fontSize={32}>Авторизация</Typography>
        <Typography variant="body1"textAlign='center'>Введите ваш логин и пароль</Typography>
        <TextField 
            error={!!errors.email}
            fullWidth={true} 
            margin='normal' 
            label="Email" 
            variant="standard" 
            placeholder='Введите ваш email' 
            helperText={errors.email ? `${errors.email.message}` : ''}
            {...register('email')}
        />
        <TextField 
            error={!!errors.password}
            type='password' 
            fullWidth={true} 
            margin='normal' 
            label="Password" 
            variant="standard" 
            placeholder='Введите ваш пароль' 
            helperText={errors.password ? `${errors.password.message}` : ''}
            {...register('password')}
        />
        <AppLoadingButton loading={loading} type='submit' sx={{marginTop: 2, marginBottom: 2, width: '60%'}} variant="contained">Войти</AppLoadingButton>
        <Typography variant="body1">У вас нет аккаунта? <span className={classes.incitingText} onClick={() => navigate('/register')}>Регистрация</span></Typography>
    </Fragment>
    );
};

export default LoginPage;