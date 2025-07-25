import { Link } from 'react-router-dom';

const NavItem = ({ to, label }) => (
  <Link to={to} className="nav-item">
    {label}
  </Link>
);

export default NavItem;