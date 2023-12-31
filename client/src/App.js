import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Login from './pages/Registration/Login';
import Signup from './pages/Registration/Signup';
import Nopage from './pages/Nopage/Nopage';
import Cart from './pages/cart/cart';
import { ShopContextProvider } from './context/shop-context';
import Mainstore from './pages/Mainstore/Mainstore';
import User from './pages/Registration/User';
import Navbar from './components/Navbar/Navbar';

;

function App() {

  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/navbar' element={<Navbar  />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/login' element={<Login  />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/mainstore' element={<Mainstore />} />
            <Route path='/user' element={<User/>} />
            <Route path='/*' element={<Nopage />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
