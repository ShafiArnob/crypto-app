import { Route, Routes } from 'react-router-dom';
import './App.css';
import Markets from './pages/Markets/Markets';
import Portfolio from './pages/Portfolio/Portfolio';
import Navbar from './Shared/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <div className='container'>
        <Routes>
          <Route path="/" element={<Markets/>}></Route>
          <Route path='/portfolio' element={<Portfolio/>}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App;
