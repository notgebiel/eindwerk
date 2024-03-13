import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import ErrorPage from './routes/errorpage';
import Inleiding from './routes/inleiding';
import Front_End from './routes/front-end';

//react router
const router = createBrowserRouter([
  {
    path: '/',
    element: <Inleiding />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/front_end',
    element: <Front_End />,
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
