import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home.jsx';
import About from './Components/about.jsx';
import Contact from './Components/Contact.jsx';
import Users from './Components/Users/Users.jsx';
import Details from './Components/Details.jsx';

const router = createBrowserRouter([
    {
    path: "/",
    element: <Home></Home>,
    children: [
    {
      path: "/about",
    element: <About></About>
    },
    {
      path: "/contact",
      element: <Contact></Contact>
    },
  {
    path: "/users",
    element: <Users></Users>,
    loader: () => fetch('https://jsonplaceholder.typicode.com/users')
  },
{
  path: "/user/:userId",
  loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
  element: <Details></Details>
  
}]
  }]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
