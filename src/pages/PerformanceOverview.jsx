import { useState } from 'react';
import '../styles.css';

const PerformanceOverview = () => {
  const [selectedMonth, setSelectedMonth] = useState('jul25');
  
  const performanceData = {
    jul25: {
      area: 'Panvel',
      workingDays: '22/30',
      requests: 28,
      collected: 20,
      completionRate: '71.42%',
      avgTime: '3 hrs/sample'
    },
    jun25: {
      area: 'Karjat',
      workingDays: '25/30',
      requests: 30,
      collected: 25,
      completionRate: '83.33%',
      avgTime: '2.8 hrs/sample'
    }
  };

  const currentStats = performanceData[selectedMonth] || null;

  return (
    <>
      <div className="page-title-box">
        <h2 className="page-title">Performance Overview</h2>
      </div>
      
      <div className="info-box">
        <div className="summary-card">
          <div className="user-icon">
            <img src="/assets/user-icon.png" alt="User Icon" />
          </div>
          <div className="summary-details">
            <p>Field Officer Name:</p>
            <p>Officer Id:</p>
            <p>Officer Phone No.:</p>
            <p>Officer Email Id:</p>
          </div>
        </div>

        <div className="stats-section">
          <select 
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="month-select"
          >
            <option value="" disabled>Select Month</option>
            <option value="jul25">July 2025</option>
            <option value="jun25">June 2025</option>
          </select>

          <div className="stats">
            {currentStats ? (
              <>
                <p>Assigned Area: {currentStats.area}</p>
                <p>No. of Working Days: {currentStats.workingDays}</p>
                <p>No. of Soil Sample Collection Requests: {currentStats.requests}</p>
                <p>No. of Soil Samples Collected and Delivered: {currentStats.collected}</p>
                <p>Completion Rate: {currentStats.completionRate}</p>
                <p>Avg Collection Time: {currentStats.avgTime}</p>
              </>
            ) : (
              <p>Please select a month to view performance data.</p>
            )}
          </div>
        </div>
      </div>

      <div className="footer-bar">
        <button className="footer-btn">Done</button>
      </div>
    </>
  );
};

export default PerformanceOverview;