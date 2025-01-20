import { RouteObject } from "react-router-dom"
import Login from './Pages/auth/login';
import Register from './Pages/auth/register';
import Inicio from "./Pages/Inicio";

const appRoutes: RouteObject[] = [

  {
    path: '/',
    element: <Inicio />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  }
]

export default appRoutes;