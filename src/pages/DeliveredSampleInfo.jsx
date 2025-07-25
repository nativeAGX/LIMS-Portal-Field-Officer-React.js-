import '../styles.css';

const DeliveredSampleInfo = () => (
  <>
    <div className="page-title-box">
      <h2 className="page-title">Delivered Soil Sample : Sample Id</h2>
    </div>

    <div className="info-box">
      <div className="sample-summary">
        <div className="user-icon">
          <img src="/assets/user-icon.png" alt="User Icon" />
        </div>
        <div className="summary-details">
          <p>Sample ID: 404</p>
          <p>Test Name: pH Test</p>
          <p>Sample Collection Date & Time: 01/03/25 - 11:59 PM</p>
          <p>Sample Lab Submission Date & Time: 01/03/25 - 11:59 PM</p>
          <p>Status: Completed</p>
        </div>
      </div>

      <div className="collection-details">
        <p>Collection Location (Full Address):</p>
        <p>GPS Co-ordinates (with 'Open in Maps' link):</p>
        <p>Landmark / Special Instructions:</p>
        <p>Crop Type:</p>
        <p>Soil Type:</p>
        <p>Requested Tests:</p>
        <p>No. of Samples Collected:</p>
        <p>Collection Date / Time:</p>
        <p>Lab Address:</p>
      </div>
    </div>

    <div className="notes-section">
      <label htmlFor="remarks">Add Notes / Special Remarks:</label>
      <textarea id="remarks" rows="4" placeholder="Enter notes here..."></textarea>
    </div>

    <div className="footer-bar">
      <button className="footer-btn">Next</button>
    </div>
  </>
);

export default DeliveredSampleInfo;