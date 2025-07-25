import Button from '../components/Button';
import '../styles.css';

const Dashboard = () => (
  <>
    <div className="welcome-box">
      <h1>Welcome, <strong>[Field Officer]</strong>, (<strong>Officer Id</strong>)</h1>
    </div>

    <div className="recap-box">
      <h2>Quick Recap :</h2>
      <p>
        Sample Collection Requests (From Farmer): <strong>12</strong><br />
        Avg. Collection Time: <strong>3 hrs/sample</strong><br />
        Samples Collected: <strong>2</strong>
      </p>
    </div>

    <div className="action-buttons">
      <Button to="/collection-requests">View Requests</Button>
      <Button to="/delivered-samples">Soil Samples Delivered</Button>
      <Button to="/performance">Performance Overview</Button>
    </div>
  </>
);

export default Dashboard;