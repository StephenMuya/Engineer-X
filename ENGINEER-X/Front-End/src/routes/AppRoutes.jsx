import { Routes, Route } from 'react-router-dom';
import ProductLanding from '../pages/productLanding.jsx';
import Registration from '../pages/Registration.jsx';
import Dashboard from '../pages/dashboard.jsx';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ProductLanding />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/dashboard" element={<dashboard />} />
    </Routes>
  );
}