
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Wishlist from './pages/Wishlist';
import Account from './pages/Account';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/shop' element={<Shop />}/>
        <Route path='/wishlist' element={ <Wishlist /> }/>
        <Route path='/account' element={ <Account/> } />
      
      </Routes>
     
      <Footer/>
    
    </div>
  );
}

export default App;
