export interface IPropsLogin {
    setPassword: (value: string) => void
    setEmail: (value: string) => void
    navigate: (to: string) => void
}

export interface IPropsRegister {
    setBin: (value: string) => void
    setEmail: (value: string) => void
    setUserName: (value: string) => void
    setPassword: (value: string) => void
    setRepeatPassword: (value: string) => void
    setCompanyName: (value: string) => void
    navigate: (to: string) => void
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