import SampleCard from '../components/SampleCard';
import '../styles.css';

const deliveredSamples = [
  { 
    id: 404, 
    test: 'pH test', 
    date: '01/03/25 - 11:59 PM',
    village: 'Karjat',
    status: 'Completed'
  },
  { 
    id: 674, 
    test: 'moisture test', 
    date: '16/02/25 - 11:59 PM',
    village: 'Panvel',
    status: 'Completed'
  },
  { 
    id: 1023, 
    test: 'quality check', 
    date: '08/01/25 - 11:59 PM',
    village: 'Alibag',
    status: 'Pending'
  },
];

const DeliveredSamples = () => (
  <>
    <div className="page-title-box">
      <h2 className="page-title">Soil Samples Delivered</h2>
    </div>
    
    <div className="delivered-samples-list">
      {deliveredSamples.map(sample => (
        <SampleCard 
          key={sample.id}
          id={sample.id}
          test={sample.test}
          date={sample.date}
          village={sample.village}
          status={sample.status}
          to={`/delivered-samples/${sample.id}`}
        />
      ))}
    </div>
  </>
);

export default DeliveredSamples;