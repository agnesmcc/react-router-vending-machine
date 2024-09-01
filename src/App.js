import './App.css';
import VendingMachine from './VendingMachine';
import Soda from './Soda';
import Chips from './Chips';
import IceCream from './IceCream';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
