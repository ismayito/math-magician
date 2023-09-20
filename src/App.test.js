import { BrowserRouter } from 'react-router-dom';

import { render } from '@testing-library/react';
import App from './App';
import Calculator from './routes/Calculator';
import Home from './routes/Home';
import Quote from './routes/Quote';
import ButtonsComponent from './component/ButtonsComponent';
import ButtonsZeroComponent from './component/ButtonsZeroComponent';
import CalculatorComponent from './component/CalculatorComponent';
import Navbar from './component/Navbar';
import Layout from './component/Layout';
import FetchData from './component/FetchData';
import calculate from './logic/calculate';
import operate from './logic/operate';

describe('tests math-magician App test', () => {
  it('tests App.js file', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
  });

  it('tests Calculator page file', () => {
    render(
      <Calculator />,
    );
  });

  it('tests the home page file', () => {
    render(<Home />);
  });

  it('tests the quote page file', () => {
    render(<Quote />);
  });

  it('tests the buttons component file', () => {
    render(<ButtonsComponent />);
  });

  it('tests the buttons zero component file', () => {
    render(<ButtonsZeroComponent />);
  });

  it('tests the calculator component file', () => {
    render(<CalculatorComponent />);
  });

  it('tests the layout component file', () => {
    render(
      <BrowserRouter>
        <Layout />
      </BrowserRouter>,
    );
  });

  it('tests the navbar component file', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );
  });

  it('tests the fetch data component file', () => {
    render(<FetchData />);
  });

  it('tests the  addition of calculate function', () => {
    const data = { total: 0, next: null, operation: '+' };
    const value = '5';
    expect(calculate(data, value)).toEqual({
      total: 0,
      next: '5',
      operation: '+',
    });
  });

  it('tests the subtraction of the calculate function', () => {
    const data = { total: 0, next: null, operation: '-' };
    const value = '5';
    expect(calculate(data, value)).toEqual({
      total: 0,
      next: '5',
      operation: '-',
    });
  });

  it('tests the multiplication of the calculate function', () => {
    const data = { total: 0, next: null, operation: '*' };
    const value = '5';
    expect(calculate(data, value)).toEqual({
      total: 0,
      next: '5',
      operation: '*',
    });
  });

  it('tests the modulus of the calculate function', () => {
    const data = { total: 0, next: null, operation: '%' };
    const value = '5';
    expect(calculate(data, value)).toEqual({
      total: 0,
      next: '5',
      operation: '%',
    });
  });

  it('tests the Clear all of the calculate function', () => {
    const data = { total: 10, next: 5, operation: 'Ac' };
    const value = 'AC';
    expect(calculate(data, value)).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  it('tests the division of the calculate function', () => {
    const data = { total: 0, next: null, operation: '÷' };
    const value = '5';
    expect(calculate(data, value)).toEqual({
      total: 0,
      next: '5',
      operation: '÷',
    });
  });

  it('tests the positive or negative number of the calculate function', () => {
    const data = { total: 0, next: null, operation: '+/-' };
    const value = '5';
    expect(calculate(data, value)).toEqual({
      total: 0,
      next: '5',
      operation: '+/-',
    });
  });

  it('tests the positive or negative number of the calculate function', () => {
    const data = { total: 10, next: 5, operation: '+' };
    const value = '=';
    expect(calculate(data, value)).toEqual({
      total: '15',
      next: null,
      operation: null,
    });
  });

  it('tests the addition(+) operator in the operation function', () => {
    const numberOne = 1;
    const numberTwo = 5;
    const operation = '+';
    const result = operate(numberOne, numberTwo, operation);
    expect(result).toBe('6');
  });

  it('tests the multiplication(x) operator in the operation function', () => {
    const numberOne = 5;
    const numberTwo = 2;
    const operation = 'x';
    const result = operate(numberOne, numberTwo, operation);
    expect(result).toBe('10');
  });

  it('tests the subtraction(-) operator in the operation function', () => {
    const numberOne = 5;
    const numberTwo = 2;
    const operation = '-';
    const result = operate(numberOne, numberTwo, operation);
    expect(result).toBe('3');
  });

  it('tests the division(÷) operator in the operation function', () => {
    const numberOne = 6;
    const numberTwo = 2;
    const operation = '÷';
    const result = operate(numberOne, numberTwo, operation);
    expect(result).toBe('3');
  });

  it('tests the modulus(%) operator in the operation function', () => {
    const numberOne = 6;
    const numberTwo = 2;
    const operation = '%';
    const result = operate(numberOne, numberTwo, operation);
    expect(result).toBe('0');
  });
});
