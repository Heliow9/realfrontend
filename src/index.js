import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home.jsx'
import Etica from './routes/Etica.jsx'
import About from './routes/About.jsx'
import Navbar from './routes/components/Navbar';
import Footer from './routes/components/Footer';
import Fornecedor from './routes/Fornecedor';
import Denuncia from './routes/Denuncia';


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
  }

])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
);

