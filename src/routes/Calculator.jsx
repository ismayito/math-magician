import './Routes.css';
import CalculatorComponent from '../component/CalculatorComponent';

const Calculator = () => (
  <div className="Container">
    <div className="calculatorContainer">
      <p className="title">Lets do some maths </p>
      <CalculatorComponent />
    </div>
  </div>
);

export default Calculator;
