import {createBrowserRouter,createRoutesFromElements,Route,Link,Outlet, RouterProvider} from 'react-router-dom'
import LoginPage from './components/pages/loginPage/LoginPage'
import HomePage from './components/pages/homePage/HomePage';
import './App.css';
// import Navbar from './components/molecules/navbar/Navbar';
import PrivateRoutes from './protectRoute/ProtectRoute';



function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route element={<PrivateRoutes/>}>
        <Route path='/' element={<HomePage/>}  />
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
