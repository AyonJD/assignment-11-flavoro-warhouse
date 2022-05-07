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


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/add-item' element={<AddNewItem></AddNewItem>}></Route>
        <Route path='/inventory/:id' element={<UpdateProduct></UpdateProduct>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
