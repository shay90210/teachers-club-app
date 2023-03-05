import './App.scss';

import { Routes, Route } from 'react-router-dom';
import { Container } from 'reactstrap';

function App() {
  return (
    <Container>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='shop' element={<Shop />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
    </Container>
  );
}

export default App;
