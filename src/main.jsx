import React from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from "react-dom/client";
import App from './App.jsx'
import './index.css'
import SearchPage from './pages/SearchPage.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Table from './components/table.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <SearchPage />,
  },
  {
    path: "/table",
    element: <Table />,
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
