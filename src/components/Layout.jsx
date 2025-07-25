import { Outlet, Link } from 'react-router-dom';
import '../styles.css';

const Sidebar = () => (
  <aside className="sidebar">
    <div className="sidebar-top">
      <div className="logo-text">
        <div className="lims-title">LIMS</div>
        <div className="lims-subtitle">Laboratory Information<br />Management System</div>
      </div>
      <div className="nav-section">
        <input type="text" className="search" placeholder="Search..." />
        <div className="nav-menu">
          <Link to="/" className="nav-item">Dashboard</Link>
          <Link to="/collection-requests" className="nav-item">Map</Link>
          <Link to="/performance" className="nav-item">My Profile</Link>
        </div>
      </div>
    </div>
    <button className="logout">Logout</button>
  </aside>
);

const Layout = () => (
  <div className="container">
    <Sidebar />
    <main className="main-content">
      <Outlet />
    </main>
  </div>
);

export default Layout;