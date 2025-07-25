import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import CollectionRequests from './pages/CollectionRequests';
import DeliveredSamples from './pages/DeliveredSamples';
import PerformanceOverview from './pages/PerformanceOverview';
import CollectionRequestInfo from './pages/CollectionRequestInfo';
import DeliveredSampleInfo from './pages/DeliveredSampleInfo';
import './styles.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="collection-requests" element={<CollectionRequests />} />
          <Route path="collection-requests/:id" element={<CollectionRequestInfo />} />
          <Route path="delivered-samples" element={<DeliveredSamples />} />
          <Route path="delivered-samples/:id" element={<DeliveredSampleInfo />} />
          <Route path="performance" element={<PerformanceOverview />} />
          {/* Removed map and profile routes */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;