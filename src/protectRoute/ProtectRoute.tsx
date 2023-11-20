import { Navigate } from "react-router-dom"
import Navbar from "../components/molecules/navbar/Navbar"
import { GetUserDetailCookies } from "../cookies/HandleCookies"
import { AuthState, logIn } from "../redux/features/AuthSlice"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../redux/Store"


const outLetComponent = (userDetails : AuthState, dispatch :AppDispatch) => {
    
    dispatch(logIn(userDetails))

    return(<Navbar/>)
} 

const PrivateRoutes =() =>{
    
    const userDetails = GetUserDetailCookies()
    
    const dispatch = useDispatch<AppDispatch>();

    return(
        userDetails!== undefined ? outLetComponent(userDetails, dispatch) : <Navigate to='/login' /> 
    )
}


export default PrivateRoutes