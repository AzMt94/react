import { Button, TextField, Typography } from '@mui/material';
import React, { Fragment } from 'react';
import { IPropsRegister } from '../../../common/types/auth/auth';
import { useStyles } from '../styles';
import AppButton from '../../../component/app-button';

const RegisterPage: React.FC<IPropsRegister> = (props: IPropsRegister): JSX.Element => {
    const { navigate, register, errors} = props
    const classes = useStyles()
    return (
        <Fragment>
            <Typography variant="h2" padding={2} fontFamily='Poppins' textAlign='center'>Регистрация</Typography>
            <Typography variant="body1" fontFamily='Poppins' textAlign='center'>Введите данные для регистрации</Typography>
            <TextField 
                error={!!errors.bin}
                fullWidth={true} 
                margin='normal' 
                label="BIN" 
                variant="standard" 
                placeholder='Введите ваш БИН>'
                helperText={errors.bin ? `${errors.bin.message}` : ''} 
                {...register('bin')}
            />
            <TextField 
                error={!!errors.name}
                fullWidth={true} 
                margin='normal' 
                label="Name" 
                variant="standard" 
                placeholder='Введите ваше имя'
                helperText={errors.name ? `${errors.name.message}` : ''}
                {...register('name')} 
            />
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
                error={!!errors.companyName}
                fullWidth={true} 
                margin='normal' 
                label="Company name" 
                variant="standard" 
                helperText={errors.companyName ? `${errors.companyName.message}` : ''}
                {...register('companyName')} 
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
            <TextField 
                error={!!errors.confirmPassword}
                type='password' 
                fullWidth={true} 
                margin='normal' 
                label="Password" 
                variant="standard" 
                placeholder='Повторите ваш пароль' 
                helperText={errors.confirmPassword ? `${errors.confirmPassword.message}` : ''}
                {...register('confirmPassword')} 
            />
            <AppButton type='submit' sx={{fontFamily: 'Poppins', marginTop: 2, marginBottom: 2, width: '60%'}} variant="contained">Регистрация</AppButton>
            <Typography variant="body1" sx={{fontFamily: 'Poppins'}}>У вас есть аккаунта?<span className={classes.incitingText} onClick={() => navigate('/login')}>Авторизация</span></Typography>
        </Fragment>
    );
};

export default RegisterPage;