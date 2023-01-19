import { Route, Routes } from 'react-router-dom';
import './App.css';
import Crypto from './pages/Crypto/Crypto';
import Login from './pages/Login/Login';
import Markets from './pages/Markets/Markets';
import Portfolio from './pages/Portfolio/Portfolio';
import Signup from './pages/Signup/Signup';
import Navbar from './Shared/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <div className='container'>
        <Routes>
          <Route path="/" element={<Markets/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/coins/:id" element={<Crypto/>}></Route>
          <Route path='/portfolio' element={<Portfolio/>}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App;
