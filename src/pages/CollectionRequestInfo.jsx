import '../styles.css';

const CollectionRequestInfo = () => (
  <>
    <div className="page-title-box">
      <h2 className="page-title">Collection Request : (Sample Id)</h2>
    </div>

    <div className="request-box">
      <div className="farmer-info">
        <div className="icon">
          <img src="/assets/user-icon.png" alt="User Icon" />
        </div>
        <div className="details">
          <p>Farmer Name</p>
          <p>Farmer Phone Number</p>
          <p>Farmer Id/Registration No</p>
          <p>Collection Location (Village)</p>
          <p>Requested Test(s): e.g. "NPK + pH"</p>
        </div>
      </div>

      <div className="address-block">
        <p>Collection Location (Full Address)</p>
        <p>GPS Coordinates (with 'Open in Maps' link)</p>
        <p>Landmark / Special Instructions</p>
        <p>Crop Type</p>
        <p>Soil Type</p>
        <p>Requested Tests</p>
        <p>Number of Samples to Collect</p>
        <p>Preferred Collection Date / Time</p>
      </div>

      <div className="action-buttons">
        <button className="primary-btn">
          Mark as Collected and Delivered 
        </button>
        <button className="secondary-btn">
          Unable to Collect
        </button>
      </div>

      <div className="footer-actions">
        <button className="footer-btn accept-btn">Accept</button>
        <button className="footer-btn next-btn">Next</button>
      </div>
    </div>
  </>
);

export default CollectionRequestInfo;