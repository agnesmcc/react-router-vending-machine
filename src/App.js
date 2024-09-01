import './App.css';
import VendingMachine from './VendingMachine';
import Soda from './Soda';
import Chips from './Chips';
import IceCream from './IceCream';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import './navbar.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className='navbar'>
          <NavLink to="/soda">Soda</NavLink>
          <NavLink to="/chips">Chips</NavLink>
          <NavLink to="/icecream">Ice Cream</NavLink>
        </div>
        <Routes>
          <Route path="/" element={<VendingMachine />} />
          <Route path="/soda" element={<Soda />} />
          <Route path="/chips" element={<Chips />} />
          <Route path="/icecream" element={<IceCream />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
