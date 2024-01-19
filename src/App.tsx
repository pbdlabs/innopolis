import {createBrowserRouter,createRoutesFromElements,Route, RouterProvider} from 'react-router-dom'
import LoginPage from './components/pages/loginPage/LoginPage'
import HomePage from './components/pages/homePage/HomePage';
import PrivateRoutes from './protectRoute/ProtectRoute';
import EmployeeList from './components/pages/employeeList/EmployeeList';
import Projects from './components/pages/departments/design/HOD/projects/Projects';
import './App.css';
import Clients from './components/pages/departments/design/HOD/clients/Clients';
import MaterialRequest from './components/pages/departments/design/HOD/materialRequest/MaterialRequest';
import ProjectsEmpDesign from './components/pages/departments/design/employee/projects/ProjectsEmpDesign';
import MaterialRequestStatusEmpDesign from './components/pages/departments/design/employee/materialRequestStatus/MaterialRequestStatusEmpDesign';
import MaterialDashboardEmpDesign from './components/pages/departments/design/employee/materialDashboard/MaterialDashboardEmpDesign';




function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route element={<PrivateRoutes/>}>
        <Route path='/' element={<HomePage/>}  />
        <Route path='/currentEmployee' element={<EmployeeList/>}  />
        <Route path='/designDepartment/projects' element={<Projects/>}  />
        <Route path='/designDepartment/materialRequest' element={<MaterialRequest/>}  />
        <Route path='/designDepartment/clients' element={<Clients/>}  />
        <Route path='/designDepartment/employee/projects' element={<ProjectsEmpDesign/>}  />
        <Route path='/designDepartment/employee/materialRequestStatus' element={<MaterialRequestStatusEmpDesign/>}  />
        <Route path='/designDepartment/employee/materialDashboard' element={<MaterialDashboardEmpDesign/>}  />
        
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
