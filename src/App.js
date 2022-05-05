import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Shared/Navbar/Navbar';
import UpdateProduct from './Components/UpdateProduct/UpdateProduct';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/inventory/:id' element={<UpdateProduct></UpdateProduct>}></Route>
      </Routes>
    </div>
  );
}

export default App;
