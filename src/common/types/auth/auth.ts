
import  {FieldValues, UseFormRegister, FieldErrors} from 'react-hook-form'

export interface IPropsLogin <
    TFieldValues extends FieldValues = FieldValues,
    TContext = any
    > {
    navigate: (to: string) => void
    register: UseFormRegister<TFieldValues>
    errors: FieldErrors<TFieldValues>
    loading: boolean
}

export interface IPropsRegister <
    TFieldValues extends FieldValues = FieldValues,
    TContext = any
    >{
    navigate: (to: string) => void
    register: UseFormRegister<TFieldValues>
    errors: FieldErrors<TFieldValues>
    loading: boolean
}

export interface IAuthState {
    user: IPublicUser,
    isLogged: boolean,
    isLoading: boolean
}

interface IPublicUser {
    id: number | null,
    bin: string,
    userName: string,
    email: string,
    companyName: string,
    createdAt: string,
    updatedAt: string,
    watchlist:[IWatchList]
}

interface IWatchList {
    id: number | null,
    name: string,
    assetId: string,
    createdAt: string,
    updatedAt: string,
    user: number | null
}

export interface ILoginData {
    email: string
    password: string
}

export interface IRegisterData {
    bin: string,
    userName: string,
    email: string,
    companyName: string,
    password: string
}