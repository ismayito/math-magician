import './Calculator.css';
import PropTypes from 'prop-types';

const ButtonsComponent = (props) => {
  const {
    num1, num2, num3, num4, onShow,
  } = props;

  const handleOnClick = (value) => (
    onShow(value)
  );

  return (
    <table className="calculator">
      <tbody>
        <tr>
          <td><button type="button" onClick={() => handleOnClick(num1)}>{num1}</button></td>
          <td><button type="button" onClick={() => handleOnClick(num2)}>{num2}</button></td>
          <td><button type="button" onClick={() => handleOnClick(num3)}>{num3}</button></td>
          <td><button type="button" className="signs" onClick={() => handleOnClick(num4)}>{num4}</button></td>
        </tr>
      </tbody>
    </table>
  );
};

ButtonsComponent.propTypes = {
  num1: PropTypes.string.isRequired,
  num2: PropTypes.string.isRequired,
  num3: PropTypes.string.isRequired,
  num4: PropTypes.string.isRequired,
  onShow: PropTypes.func.isRequired,
};

export default ButtonsComponent;
