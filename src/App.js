
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './componentes/Home';
import Carros3D from './componentes/Carros3D';

function App() {
  return (
    <Router basename='/Sustenrace'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/carros3D/*' element={<Carros3D />} /> 
      </Routes>
    </Router>
  );
}

export default App;
