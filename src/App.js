import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Shared/Navbar/Navbar';
import UpdateProduct from './Components/UpdateProduct/UpdateProduct';
import Inventory from './Components/Inventory/Inventory'
import AddNewItem from './Components/AddNewItem/AddNewItem'


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/add-item' element={<AddNewItem></AddNewItem>}></Route>
        <Route path='/inventory/:id' element={<UpdateProduct></UpdateProduct>}></Route>
      </Routes>
    </div>
  );
}

export default App;
