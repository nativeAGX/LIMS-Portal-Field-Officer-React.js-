import { Link } from 'react-router-dom';
import '../styles.css';

const Sidebar = () => {
  // Nuclear option to prevent ALL navigation attempts
  const NonNavigatingButton = ({ children, featureName }) => {
    const handleInteraction = (e) => {
      // Block every possible way the event could cause navigation
      e.preventDefault();
      e.stopPropagation();
      e.nativeEvent?.stopImmediatePropagation?.();
      
      // Legacy browser support
      if (window.event) {
        window.event.returnValue = false;
        window.event.cancelBubble = true;
      }
      
      // Visual feedback
      e.currentTarget.style.transform = 'scale(0.98)';
      setTimeout(() => {
        e.currentTarget.style.transform = '';
      }, 100);
      
      alert(`${featureName} feature is under development`);
      return false;
    };

    return (
      <div
        className="nav-item"
        onClick={handleInteraction}
        onMouseDown={handleInteraction}
        onMouseUp={handleInteraction}
        onTouchStart={handleInteraction}
        onKeyDown={(e) => ['Enter',' '].includes(e.key) && handleInteraction(e)}
        role="button"
        tabIndex={0}
        style={{
          // Ensures it behaves like a button but can't navigate
          cursor: 'pointer',
          userSelect: 'none',
          WebkitUserSelect: 'none',
          MozUserSelect: 'none',
          msUserSelect: 'none',
          // Visual feedback
          transition: 'transform 0.1s ease',
          outline: 'none'
        }}
      >
        {children}
      </div>
    );
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-top">
        <div className="logo-text">
          <div className="lims-title">LIMS</div>
          <div className="lims-subtitle">Laboratory Information<br />Management System</div>
        </div>
        <div className="nav-section">
          <input 
            type="text" 
            className="search" 
            placeholder="Search..." 
          />
          <div className="nav-menu">
            {/* Working Dashboard link */}
            <Link to="/" className="nav-item">Dashboard</Link>
            
            {/* Non-navigating Map button */}
            <NonNavigatingButton featureName="Map">Map</NonNavigatingButton>
            
            {/* Non-navigating Profile button */}
            <NonNavigatingButton featureName="My Profile">My Profile</NonNavigatingButton>
          </div>
        </div>
      </div>
      <button className="logout">Logout</button>
    </aside>
  );
};

export default Sidebar;