import logo from './logo.svg';
import './App.css';

import { Route,   Routes, useLocation } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
import { Home } from './pages/Home/Home';
import Footer from './component/Footer/Footer';
import Store from './pages/Store/Store';
import ProductPage from './pages/Product Page/ProductPage';
import Contact from './pages/Contact/Contact';
import Cart from './pages/Cart/Cart';
import { useEffect } from 'react';
import About from './pages/About/About';
import SearchPage from './pages/Search/Search';
import ThankYou from './pages/ThankYou/ThankYou';
import "react-toastify/dist/ReactToastify.css"
import {ToastContainer} from 'react-toastify'
import Loader from './component/Loader/Loader';
import TNC from './pages/Policy/TNC';
import Policy from './pages/Policy/Policy';
import ShippingPolicy from './pages/Policy/ShippingPolicy';
import CancellationPolicy from './pages/Policy/CancellationPolicy';
import { logEvent } from './api';

function App() {
  const navigation=useLocation();
  const currentRoute=navigation.pathname;
  useEffect(() => {
    console.log(currentRoute);
    window.scrollTo(0, 0);
  }, [currentRoute])
  useEffect(() => {
    logEvent();
  }, [])
  return (
    
    <div className='master-container'>
      <ToastContainer/>
      <Loader/>
    {    currentRoute==='/thankyou' ? null : <Navbar />
    }
      <Routes> 
        <Route index element={<Home />}></Route>
        <Route path='contact-us' element={<Contact />}></Route>
        <Route path='cart' element={<Cart />}></Route>
        <Route path='store'  element={<Store/>}></Route>
        <Route path='store/category/:category'  element={<Store/>}></Route>
        <Route path='store/:bookId' element={<ProductPage/>}></Route>
        <Route path='about' element={<About/>}></Route>
        <Route path='search/:query' element={<SearchPage/>}></Route>
        <Route path='thankyou' element={<ThankYou/>}></Route>
        <Route path="terms-and-conditions" element={<TNC/>}></Route>
        <Route path="privacy-policy" element={<Policy/>}></Route>
        <Route path="shipping-policy" element={<ShippingPolicy/>}></Route>
        <Route path="cancellation-policy" element={<CancellationPolicy/>}></Route>
        <Route path='*' element={<Home />}></Route>
      </Routes>
      {
        currentRoute==='/cart' || currentRoute==='/contact-us'||currentRoute==='/thankyou' ? null : <Footer />
      }
    </div>

    
    );
}

export default App;
