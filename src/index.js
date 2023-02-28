import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home.jsx'
import Etica from './routes/Etica.jsx'
import About from './routes/About.jsx'
import Fornecedor from './routes/Fornecedor';
import Denuncia from './routes/Denuncia';
import Servicos from './routes/Servicos';
import Contact from './routes/Contact';
import TrabalheConosco from './routes/TrabalheConosco';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/etica",
    element: <Etica />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/fornecedor",
    element: <Fornecedor />
  },
  {
    path: "/denuncia",
    element: <Denuncia />
  },
  {
    path: "/servicos",
    element: <Servicos />
  },
  {
    path: "/contato",
    element: <Contact />
  },
  {
    path: "/trabalheconosco",
    element: <TrabalheConosco />
  },


])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    
  </React.StrictMode>
);

