import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Nav from './components/Nav';
import Product from './routes/Product';
import Auth from './routes/Auth';
import { useLocation } from 'react-router-dom';


function App() {
  const  { pathname } = useLocation();

  return (
    <>
     { pathname !== "/auth" && <Nav/>}
    <Routes>
       <Route path='' element={<Home/>}/>
       <Route path='about' element={<About/>}/>
       <Route path='auth' element={<Auth/>}/>
       <Route path='user/:id' element={<Product/>}/>
    </Routes>
      
    </>
  )
}

export default App
