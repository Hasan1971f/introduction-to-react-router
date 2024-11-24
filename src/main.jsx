import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import App from './App.jsx'
import About from './Components/About/About.jsx';
import Contract from './Components/Contract/Contract.jsx';
import Users from './Components/Users/Users.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contract',
        element: <Contract></Contract>
      },
      {
        path: '/users',
        element: <Users></Users>
      }
    ]
  },
  
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
