import ProductLanding from '../pages/productLanding.jsx';
import Registration from '../pages/Registration.jsx';
import Dashboard from '../pages/dashboard.jsx';

const appRoutes = [
  {
    path: '/',
    element: <ProductLanding />
  },
  {
    path: '/registration',
    element: <Registration />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  }
]

export default appRoutes;