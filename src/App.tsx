// STYLING 
import './App.scss';

// ROUTES TO DIFFERENT PAGES
import { Routes, Route } from 'react-router-dom';
import { Container } from 'reactstrap';

// PAGES IN THE APP
import { Homepage } from './pages/Homepage';
import { Aboutpage } from './pages/Aboutpage';
import { Shoppage } from './pages/Shoppage';
import { Contactpage } from './pages/Contactpage';

// SHOPPING CART CONTEXT TO RENDER PRODUCTS IN CART AND KEEP IN STORAGE
import { ShoppingCartProvider } from './context/ShoppingCartContext';

// PROJECT COMPONENTS
import { Header } from './components/Header';
import { NavigationBar } from './components/NavigationBar';
import { Footer } from './components/Footer';

function App() {
  return (
    <ShoppingCartProvider>
      <NavigationBar />
      <Header />
      <Container className='mb-4'>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/about' element={<Aboutpage />} />
          <Route path='/shop' element={<Shoppage />} />
          <Route path='/contact' element={<Contactpage />} />
        </Routes>
      </Container>
      <Footer />
    </ShoppingCartProvider>
  );
}

export default App;
