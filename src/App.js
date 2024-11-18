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
import AboutUs from './Pages/aboutus.jsx';
import Products from './Pages/products.jsx';
import Contact from './Pages/aboutus.jsx';
import Cinnamon from './Pages/Products/cineman.jsx';
import Cloves from './Pages/Products/cloves.jsx';
import Bluebutterfly from './Pages/Products/bluebutterfly.jsx';
import BlackPepperPowder from './Pages/Products/blackPepperPowder.jsx';
import BlackPaper from './Pages/Products/blackPapper.jsx';
import CinnamonStickC5 from './Pages/Products/CinnamonSticksC5.jsx';
import CinnamonStickC5Special from './Pages/Products/CinnamonSticksC5Special.jsx';
import CinnamonSticksFlat from './Pages/Products/cinnamonSticksFlat.jsx';
import AlbaCinnamonPowder from './Pages/Products/albaCinnamonPowder.jsx';
import FreshClovesPowder from './Pages/Products/freshClovesPowder.jsx';
import MoringaLeavesPowder from './Pages/Products/moringaLeavesPowder.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/garcinia" element={<OneProduct />} />
      <Route path="/cinnamon" element={<Cinnamon />} />
      <Route path="/cinnamonSticksC5" element={<CinnamonStickC5 />} />
      <Route path="/cinnamonSticksC5Special" element={<CinnamonStickC5Special />} />
      <Route path="/cinnamonSticksFlat" element={<CinnamonSticksFlat />} />
      <Route path="/bluebutterfly" element={<Bluebutterfly />} />
      <Route path="/blackPepperPowder" element={<BlackPepperPowder />} />
      <Route path="/cloves" element={<Cloves />} />
      <Route path="/freshClovesPowder" element={<FreshClovesPowder />} />
      <Route path="/blackPapper" element={<BlackPaper />} />
      <Route path="/albaCinnemonPowder" element={<AlbaCinnamonPowder />} />
      <Route path="/moringaLeavesPowder" element={<MoringaLeavesPowder />} />


      <Route path="/signIn" element={<SiginIn />} />
      <Route path="/signUp" element={<SignOut />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/products" element={<Products />} />
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
