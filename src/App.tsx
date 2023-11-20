import {createBrowserRouter,createRoutesFromElements,Route,Link,Outlet, RouterProvider} from 'react-router-dom'
import LoginPage from './components/pages/loginPage/LoginPage'
import HomePage from './components/pages/homePage/HomePage';
import './App.css';
// import Navbar from './components/molecules/navbar/Navbar';
import PrivateRoutes from './protectRoute/ProtectRoute';
import EmployeeList from './components/pages/employeeList/EmployeeList';



function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route element={<PrivateRoutes/>}>
        <Route path='/' element={<HomePage/>}  />
        <Route path='/currentEmployee' element={<EmployeeList/>}  />
      </Route>
        <Route path='/login' element={<LoginPage/>}/>
      </>
    )
  )

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
