import { Navigate, RouteObject } from "react-router-dom"
import Login from './Pages/auth/login';
import Register from './Pages/auth/register';

const appRoutes: RouteObject[] = [

  {
    path: '/',
    element: <Navigate to="/login" replace />
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