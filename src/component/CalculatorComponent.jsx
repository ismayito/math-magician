import { useState } from 'react';
import './Calculator.css';
import ButtonsComponent from './ButtonsComponent';
import calculate from '../logic/calculate';
import ButtonsZeroComponent from './ButtonsZeroComponent';

function CalculatorComponent() {
  const [screenDisplay, setScreenDisplay] = useState({ total: 0, next: null, operation: null });
  const handleOnClick = (value) => {
    setScreenDisplay((prevScreenDisplay) => calculate(prevScreenDisplay, value));
    calculate(value, value);
  };
  const { total, next, operation } = screenDisplay;

  return (
    <>
      <div className="calculator-container">
        <div className="screen">
          <span>{total}</span>
          <span>{operation}</span>
          <span>{next}</span>
        </div>
        <ButtonsComponent num1="AC" num2="+/-" num3="%" num4="÷" onShow={handleOnClick} />
        <ButtonsComponent num1="7" num2="8" num3="9" num4="x" onShow={handleOnClick} />
        <ButtonsComponent num1="4" num2="5" num3="6" num4="-" onShow={handleOnClick} />
        <ButtonsComponent num1="1" num2="2" num3="3" num4="+" onShow={handleOnClick} />
        <ButtonsZeroComponent num1="0" num2="." num3="=" onShow={handleOnClick} />
      </div>
    </>
  );
}

export default CalculatorComponent;
