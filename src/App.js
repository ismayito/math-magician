import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './component/Layout';
import Home from './routes/Home';
import Quote from './routes/Quote';
import Calculator from './routes/Calculator';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote" element={<Quote />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
