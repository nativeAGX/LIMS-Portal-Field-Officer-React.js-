import SampleCard from '../components/SampleCard';
import '../styles.css';

const sampleRequests = [
  { id: 1678, date: '18/05/25', village: 'Karjat' },
  { id: 1679, date: '18/05/25', village: 'Panvel' },
  { id: 1680, date: '18/05/25', village: 'Alibag' },
];

const CollectionRequests = () => (
  <>
    <div className="page-title-box">
      <h2 className="page-title">Sample Collection Requests</h2>
    </div>
    
    <div className="requests-list">
      {sampleRequests.map(request => (
        <SampleCard 
          key={request.id}
          id={request.id}
          date={request.date}
          village={request.village}
          to={`/collection-requests/${request.id}`}
        />
      ))}
    </div>
  </>
);

export default CollectionRequests;