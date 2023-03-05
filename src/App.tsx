import './App.scss';

import { Routes, Route } from 'react-router-dom';
import { Container } from 'reactstrap';

import { Homepage } from './pages/Homepage';
import { Aboutpage } from './pages/Aboutpage';
import { Shoppage } from './pages/Shoppage';
import { Contactpage } from './pages/Contactpage';

import { NavigationBar } from './components/NavigationBar';

function App() {
  return (
    <>
      <NavigationBar />
      <Container className='mb-4'>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/about' element={<Aboutpage />} />
          <Route path='/shop' element={<Shoppage />} />
          <Route path='/contact' element={<Contactpage />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
