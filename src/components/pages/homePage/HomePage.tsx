import { useAppSelector } from "../../../redux/Store"

const HomePage = () =>{
    const value  = useAppSelector((state)=>state.authReducer.value)
    
    return(
        <>
            <h1>{value.name}</h1>
            <h1>{value.department}</h1>
            <h1>{value.email}</h1>
            <h1>{value.employee_id}</h1>
        </>
    )
}


export default HomePage

