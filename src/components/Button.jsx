import { Link } from 'react-router-dom';

const Button = ({ to, children }) => (
  <Link to={to} className="action-button">
    {children}
  </Link>
);

export default Button;