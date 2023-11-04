import {createBrowserRouter,createRoutesFromElements,Route,Link,Outlet, RouterProvider} from 'react-router-dom'
import LoginPage from './components/loginPage/LoginPage'
import './App.css';

const Root = () =>{
  return(
    <>
    <div>
      <Link to='/' >Home</Link>
      <Link to='/login'>Login</Link>
    </div>

  <div>
    <Outlet/>
  </div>
    </>
  )
}

const Home = () =>{
  return(
    <h1>Home page</h1>
  )
}

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root/>}>
        <Route index element={<Home/>}/>
        <Route path='/login' element={<LoginPage/>}/>

      </Route>
    )
  )

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
