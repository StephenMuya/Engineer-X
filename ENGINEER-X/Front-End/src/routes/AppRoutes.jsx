import { Routes, Route } from 'react-router-dom';
import ProductLanding from '../Components/productLanding.jsx';
import Registration from '../../pages/Registration.jsx';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ProductLanding />} />
      <Route path="/register" element={<Registration />} />
    </Routes>
  );
}