import React from 'react';
import { Box } from '@mui/material';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import RootLayout from './Layout/Rootlayout.jsx';
import Home from './Pages/home.jsx';
import './App.css';
import logo from './logo.svg';
import OneProduct from './Pages/OneProduct.jsx';
import SiginIn from './Pages/siginIn.jsx';
import SignOut from './Pages/signUp.jsx';
import Admin from './Pages/admin.jsx';
import AddProduct from './Pages/addProduct.jsx';
import AddOrUpdateProduct from './Pages/addProduct.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/oneProduct" element={<OneProduct />} />
      <Route path="/signIn" element={<SiginIn />} />
      <Route path="/signUp" element={<SignOut />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/addProduct" element={<AddOrUpdateProduct />} />
      <Route path="/updateProduct/:id" element={<AddOrUpdateProduct />} />
    </Route>
  )
);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
