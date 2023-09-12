import './Calculator.css';
import PropTypes from 'prop-types';

const ButtonsComponent = (props) => {
  const {
    num1, num2, num3, num4,
  } = props;

  return (
    <table className="calculator">
      <tr>
        <td><button type="button">{num1}</button></td>
        <td><button type="button">{num2}</button></td>
        <td><button type="button">{num3}</button></td>
        <td><button type="button" className="signs">{num4}</button></td>
      </tr>
    </table>
  );
};

ButtonsComponent.propTypes = {
  num1: PropTypes.string.isRequired,
  num2: PropTypes.string.isRequired,
  num3: PropTypes.string.isRequired,
  num4: PropTypes.string.isRequired,
};

export default ButtonsComponent;
