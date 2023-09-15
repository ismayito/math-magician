import './Calculator.css';
import PropTypes from 'prop-types';

const ButtonsZeroComponent = (props) => {
  const {
    num1, num2, num3, onShow,
  } = props;
  const handleOnClick = (value) => (
    onShow(value)
  );
  return (
    <table className="calculator">
      <tbody>
        <tr>
          <td colSpan="2" className="zero-btn">
            <button className="zero" type="button" onClick={() => handleOnClick(num1)}>{num1}</button>
          </td>
          <td><button type="button" onClick={() => handleOnClick(num2)}>{num2}</button></td>
          <td><button type="button" className="signs" onClick={() => handleOnClick(num3)}>{num3}</button></td>
        </tr>
      </tbody>
    </table>
  );
};

ButtonsZeroComponent.propTypes = {
  num1: PropTypes.string.isRequired,
  num2: PropTypes.string.isRequired,
  num3: PropTypes.string.isRequired,
  onShow: PropTypes.func.isRequired,
};

export default ButtonsZeroComponent;
