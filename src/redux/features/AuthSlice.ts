import { createSlice, PayloadAction } from "@reduxjs/toolkit"; 

type InitialStateProp= {
    value : AuthState;
}

type AuthState = {
    isAuth: boolean;
    username: string;
    uid: string;
    isModerator: boolean;
}

 
const initialState = {
    value: {
        isAuth : false,
        username: '',
        uid:'asddadasdadtr',
        isModerator: false,
    } as AuthState,
} as InitialStateProp;
 
export const auth = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logOut: ()=>{
            return initialState;
        },
        logIn: (_, action: PayloadAction<string>) =>{
            return {
                value: {
                    isAuth:true,
                    username: action.payload,
                    uid: "asddadasdadtr",
                    isModerator: false,
                }
            }
        }
    } 
})


export const {logIn,logOut} = auth.actions
export default auth.reducer