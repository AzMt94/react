
import  {FieldValues, UseFormRegister, FieldErrors} from 'react-hook-form'

export interface IPropsLogin <
    TFieldValues extends FieldValues = FieldValues,
    TContext = any
    > {
    navigate: (to: string) => void
    register: UseFormRegister<TFieldValues>
    errors: FieldErrors<TFieldValues>
}

export interface IPropsRegister <
    TFieldValues extends FieldValues = FieldValues,
    TContext = any
    >{
    // setBin: (value: string) => void
    // setPassword: (value: string) => void
    // setRepeatPassword: (value: string) => void
    // setCompanyName: (value: string) => void
    navigate: (to: string) => void
    register: UseFormRegister<TFieldValues>
    errors: FieldErrors<TFieldValues>
}

export interface IAuthState {
    user: IPublicUser,
    isLogged: boolean
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