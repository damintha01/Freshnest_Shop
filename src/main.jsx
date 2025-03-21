import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import News from './components/News.jsx'
import Login from './components/Login.jsx'
import Singup from './components/Singup.jsx'

import App from './App.jsx'
import { createBrowserRouter,
  RouterProvider,
 } from 'react-router-dom'

 const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/Contact",
    element: <Contact />,
  },
  {
    path: "/News",
    element: <News />,
  },
  {
    path: "/Login",
    element: <Login />,    
  },
  {
    path: "/Signup",
    element: <Singup />,
  },
  {
    path: "/payment",
    element: <payment />,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <RouterProvider router={Router} />
  </StrictMode>,
)
