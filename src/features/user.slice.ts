import {createSlice, PayloadAction} from "@reduxjs/toolkit";


type user = {
    pseudo:string,
    firstname:string,
    lastname:string
}

type userSlice = {
    isLogin:boolean,
    users:user[]
}

const initialState : userSlice = {
    isLogin:false,
    users: []
}

export const userSlice = createSlice({
    name:"userSlice",
    initialState:initialState,
    reducers:{
        setIsLogin:(state, action:PayloadAction<boolean>) => {
            state.isLogin = action.payload
        },
        setUsers:(state, action:PayloadAction<user[]>) => {
            state.users = action.payload
        }
    }
})

export default userSlice.reducer
export const { setIsLogin, setUsers } = userSlice.actions