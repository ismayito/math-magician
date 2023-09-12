import './Calculator.css';
import ButtonsComponent from './ButtonsComponent';

const Calculator = () => (

  <div className="calculator-container">
    <div className="screen">0</div>
    <ButtonsComponent num1="AC" num2="+/-" num3="%" num4="/" />
    <ButtonsComponent num1="7" num2="8" num3="9" num4="x" />
    <ButtonsComponent num1="4" num2="5" num3="6" num4="-" />
    <ButtonsComponent num1="1" num2="2" num3="3" num4="+" />
    <table className="calculator">
      <tr>
        <td colSpan="2" className="zero-btn">
          <button className="zero" type="button">0</button>
        </td>
        <td><button type="button">.</button></td>
        <td><button type="button" className="signs">=</button></td>
      </tr>
    </table>
  </div>
);

export default Calculator;
