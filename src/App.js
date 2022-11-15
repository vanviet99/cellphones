import './App.css';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import DataProductDetail from './layout/dataProductDetail'
import CardProduct from './layout/CardProduct';
import Home from './layout/Home';
import SignUp from './layout/SignUp';
import Payment__layout from './layout/Payment__layout';
import GetAllProduct from './layout/GetAllProduct';
import Profile from './layout/Profile';
import SignIn from './layout/SignIn';
import IndexPrivate from './PrivateRouter/IndexPrivate';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='ProductDetail/:nameProductDetail' element={< DataProductDetail/>}></Route>
          <Route path='card' element={<IndexPrivate><CardProduct></CardProduct></IndexPrivate>}></Route>
          <Route path='' element={<Home></Home>}></Route>
          <Route path='/allproduct' element={<GetAllProduct></GetAllProduct>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/signup' element={<SignUp></SignUp>}></Route>
          <Route path='/signin' element={<SignIn></SignIn>}></Route>
          <Route path='/payment-info' element={<IndexPrivate><Payment__layout></Payment__layout></IndexPrivate>}></Route>
          <Route path='/profile/:profile' element={ <IndexPrivate><Profile></Profile></IndexPrivate>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
