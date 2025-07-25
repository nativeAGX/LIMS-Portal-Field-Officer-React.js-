import { Link } from 'react-router-dom';

const SampleCard = ({ id, date, village, to }) => (
  <div className="collection-request-card">
    <div className="card-icon">
      <img src="/assets/user-icon.png" alt="User" />
    </div>
    <div className="card-details">
      <div className="card-row">
        <strong>Sample ID:</strong> {id}
      </div>
      <div className="card-row">
        <strong>Date:</strong> {date}
      </div>
      <div className="card-row">
        <strong>Village:</strong> {village}
      </div>
    </div>
    <Link to={to} className="details-btn">More Details</Link>
  </div>
);

export default SampleCard;