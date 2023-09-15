import './App.css';
import Calculator from './component/Calculator';
import FetchData from './component/FetchData';

function App() {
  return (
    <div className="App">
      <p className="title">Calculator</p>
      <Calculator />
      <FetchData />
    </div>
  );
}

export default App;
