import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { motion } from 'framer-motion';
import { Home, About, Skills, Projects, Contacts, Error } from './pages';
import Navbar from './components/Navbar';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contacts />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

