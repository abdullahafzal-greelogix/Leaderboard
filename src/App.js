import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Card from './components/Card';
import Webheading from './components/Webheading';
import Timer from './components/Timer';
import Logos from './components/Logos';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homev1 from './Homes/Homev1';
import Homev2 from './Homes/Homev2';
import Homev3 from './Homes/Homev3';

function App() {
  return (
   <div>
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Homev1/>}></Route>
      <Route path='/v1' element={<Homev1/>}></Route>
      <Route path='/v2' element={<Homev2/>}></Route>
      <Route path='/v3' element={<Homev3/>}></Route>
    </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
