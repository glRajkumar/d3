import { Routes, Route } from 'react-router-dom';
import Example0 from './comp/Example0';
import Example1 from './comp/Example1';
import Home from './comp/Home';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/example0' element={<Example0 />} />
      <Route path='/example1' element={<Example1 />} />
    </Routes>
  );
}

export default App;
