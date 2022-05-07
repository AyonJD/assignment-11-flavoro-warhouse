import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Shared/Navbar/Navbar';
import UpdateProduct from './Components/UpdateProduct/UpdateProduct';
import Inventory from './Components/Inventory/Inventory'
import AddNewItem from './Components/AddNewItem/AddNewItem'
import Footer from './Components/Shared/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import RequiredAuth from './Components/RequiredAuth/RequiredAuth';
import MyItems from './Components/MyItems/MyItems';
import NotFound from './Components/NotFound/NotFound';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/inventory' element={
          <RequiredAuth>
            <Inventory></Inventory>
          </RequiredAuth>
        }></Route>
        <Route path='/add-item' element={
          <RequiredAuth>
            <AddNewItem></AddNewItem>
          </RequiredAuth>
        }></Route>
        <Route path='/inventory/:id' element={
          <RequiredAuth>
            <UpdateProduct></UpdateProduct>
          </RequiredAuth>
        }></Route>
        <Route path='/my-items' element={
          <RequiredAuth>
            <MyItems></MyItems>
          </RequiredAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
