import './App.css';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import DataProductDetail from './layout/dataProductDetail'
import CardProduct from './layout/CardProduct';
import Home from './layout/Home';
import SignUp from './layout/SignUp';
import Payment__layout from './layout/Payment__layout';
import SSS from './components/SSS/SSS';
import GetAllProduct from './layout/GetAllProduct';

function App() {
  return (
    <BrowserRouter>
<<<<<<< HEAD
      <Routes>
        <Route path='ProductDetail' element={< DataProductDetail />}></Route>
        <Route path='card' element={<CardProduct></CardProduct>}></Route>
        <Route path='' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/payment-info' element={<Payment__layout></Payment__layout>}></Route>
        <Route path='/sss' element={<SSS></SSS>}></Route>
      </Routes>
=======
        <Routes>
          <Route path='ProductDetail/:nameProductDetail' element={< DataProductDetail/>}></Route>
          <Route path='card' element={<CardProduct></CardProduct>}></Route>
          <Route path='' element={<Home></Home>}></Route>
          <Route path='/allproduct' element={<GetAllProduct></GetAllProduct>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/signup' element={<SignUp></SignUp>}></Route>
          <Route path='/payment-info' element={<Payment__layout></Payment__layout>}></Route>
          <Route path='/sss' element={<SSS></SSS>}></Route>
        </Routes>
>>>>>>> c820b82572ff3bef4fb4f939e10f6c9abc7c2f40
    </BrowserRouter>
  );
}

export default App;
