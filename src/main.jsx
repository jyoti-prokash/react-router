import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home.jsx';
import About from './Components/about.jsx';
import Contact from './Components/Contact.jsx';

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
    }]
  }]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)