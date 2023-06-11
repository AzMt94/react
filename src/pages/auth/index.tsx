import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import LoginPage from './login'
import RegisterPage from './register'
import {Box} from '@mui/material'
import {instance} from '../../utils/axios'
import { useAppDispatch } from '../../utils/hook'
import { login } from '../../store/slice/auth'
import { AppErrors } from '../../common/errors'
import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginSchema, RegisterSchema } from '../../utils/yup'
import { useStyles } from './styles'


const AuthRootComponent: React.FC = (): JSX.Element => {
    const location = useLocation()
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const classes = useStyles()
    const {
        register,
        formState: {
            errors
        }, handleSubmit
    } = useForm({
        resolver: yupResolver(location.pathname === '/login' ? LoginSchema : RegisterSchema)
    })

    const handleSubmitForm = async (data: any) => {
        if (location.pathname === '/login') {
            try {
                const userData = {
                    email: data.email,
                    password: data.password,
                }
                const user = await instance.post('auth/login', userData) //Тут будет URL
                await dispatch(login(user.data))
                navigate('/')
            }catch (e) {
                return e
            }
        }else{
            if (data.password === data.confirmPassword) {
                try {
                    const userData = {
                        bin: data.bin,
                        userName: data.name,
                        email: data.email,
                        companyName: data.companyName,
                        password: data.password
                    }
                    const newUser = await instance.post('auth/register', userData)
                    await dispatch(login(newUser.data))
                    navigate('/')
                }catch (e) {
                    console.log(e)
                    return e
                }
            }else {
                throw new Error (AppErrors.PasswordDoNotMatch)
            }
        }
    }

    return(
        <div className={classes.root}>
            <form className={classes.form} onSubmit={handleSubmit(handleSubmitForm)}>
                <Box
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    flexDirection='column'
                    maxWidth={640}
                    margin='auto'
                    padding={5}
                    borderRadius={5}
                    boxShadow={'8px 8px 15px #ccc'}
                >
                    {
                        location.pathname === '/login' 
                            ? <LoginPage 
                                navigate={navigate}
                                register={register}
                                errors={errors}
                            /> : location.pathname === '/register' 
                                ? <RegisterPage 
                                    navigate={navigate}
                                    register={register}
                                    errors={errors}
                                    /> : '404'}
                </Box>
            </form>
        </div>
    )
}

export default AuthRootComponent