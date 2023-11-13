import { Navigate, Outlet } from "react-router-dom"
import Navbar from "../components/molecules/navbar/Navbar"


const outLetComponent = () => {
    return(
        <>
            <Navbar/>
            <Outlet/>
        </>
    )
} 



const PrivateRoutes =() =>{
    let auth = true

    return(
        auth ? outLetComponent() : <Navigate to='/login' /> 
    )
}


export default PrivateRoutes