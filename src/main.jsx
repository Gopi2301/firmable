import React from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from "react-dom/client";
import App from './App.jsx'
import './index.css'
import SearchPage from './pages/SearchPage.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Table from './components/table.jsx';
import FilterPage from './pages/FilterPage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <SearchPage />,
  },
  {
    path: "/company",
    element: <FilterPage />,
  },
  {
    path: "/person",
    element: <FilterPage />,
  },
  {
    path: "/location",
    element: <FilterPage />,
  },
  {
    path: "/seniority",
    element: <FilterPage />,
  },
  {
    path: "/position",
    element: <FilterPage />,
  },
  {
    path: "/department",
    element: <FilterPage />,
  },
  {
    path: "/people",
    element: <FilterPage />,
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
