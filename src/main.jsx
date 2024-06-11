import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css"
import './styles/tailwind.css'



import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import RootPage from './pages/RootPage';
import AboutPage from './pages/About';
import HomePage from './pages/Home';
import ContactPage from './pages/Contacts';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      {
        path: "/Home",
        index: true,
        element: <HomePage />,
      },
     
      {
        path: "/Contacts",
        element: <ContactPage />,
      },

      {
        path: "/About",
        element: <AboutPage />,
      },
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
