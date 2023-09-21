import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="linksWrapper">
    <h1>Math Magician</h1>
    <div className="links">
      <Link to="/" className="separator">Home</Link>
      <Link to="/calculator" className="separator">Calculator</Link>
      <Link to="/Quote">Quote</Link>
    </div>
  </div>
);

export default Navbar;
