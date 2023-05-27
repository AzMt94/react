import { createSlice } from "@reduxjs/toolkit"
import { IAuthState } from "../../../common/types/auth/auth"

const initialState: IAuthState = {
    user: {
        id: null,
        bin: '',
        userName: '',
        email: '',
        companyName: '',
        createdAt: '',
        updatedAt: '',
        watchlist:[
            {
                id: null,
                name: '',
                assetId: '',
                createdAt: '',
                updatedAt: '',
                user: null
            }
        ]
    },
    isLogged: false
} 

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action) {
            state.user = action.payload
            state.isLogged = true
        }
    }
})

export const {login} = authSlice.actions

export default authSlice.reducer