import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Medicine from './Components/Medicine';
import Nearby from './Components/Nearby';
import { Routes ,Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/medicine' element={<Medicine />}/>
        <Route path='/' element={<Home />}/>
        <Route path='/nearby' element={<Nearby />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
