import logo from './logo.svg';
import './App.css';
import Home from './Component/Pages/Home';
import { Routes, Route } from "react-router-dom"
import About from './Component/Pages/About';
import Product from './Component/Pages/Products';
import Service from './Component/Pages/Services';
import Gellery from './Component/Pages/Gellery';
import ContactUs from './Component/Pages/Contact';
import Pic from './Component/Includes/Pics';
import Parlour from './Component/Includes/Parlour';
import Hair from './Component/Includes/Hair';
import Bridal from './Component/Includes/Bridal';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/aboutus' element={<About/>}/>
        <Route path='/products' element={<Product/>}/>
        <Route path='/services' element={<Service/>}/>
        <Route path='/gellery' element={<Gellery/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
        <Route path='/pic' element={<Pic/>}/>
        <Route path='/parlour' element={<Parlour/>}/>
        <Route path='/hair' element={<Hair/>}/>
        <Route path='/bridal' element={<Bridal/>}/>
       
      </Routes>
   
    </div>
  );
}

export default App;
