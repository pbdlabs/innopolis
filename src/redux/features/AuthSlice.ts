import { createSlice, PayloadAction } from "@reduxjs/toolkit"; 

interface InitialStateProp{
value : AuthState;
}


export interface AuthState {
    message: string,
    employee_id: number,
    name: string,
    email: string,
    role: string,
    department: string,
    isLoggedIn?: boolean,
} 

 
const initialState = {
    value: {
        message: '',
        employee_id: 0,
        name: '',
        email: '',
        role: '',
        department: '',
        isLoggedIn: false,
    } as AuthState,
} as InitialStateProp;
 
export const auth = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logOut: ()=>{
            return initialState;
        },
        logIn: (_, action: PayloadAction<AuthState>) =>{
            return {
                value: {
                    message: action.payload.message,
                    employee_id: action.payload.employee_id,
                    name: action.payload.name,
                    email: action.payload.email,
                    role: action.payload.role,
                    department: action.payload.department,
                    isLoggedIn: true,
                }
            }
        }
    } 
})


export const {logIn,logOut} = auth.actions
export default auth.reducer