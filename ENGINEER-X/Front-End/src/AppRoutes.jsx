import ProductLanding from './pages/productLanding.jsx';
import Registration from './pages/Registration.jsx';
import Dashboard from './pages/dashboard.jsx';
import NotFound from './pages/404.jsx';
import SocialFeed from './pages/socialfeed.jsx';
import LoginSuccessCard from './pages/loginsucess.jsx';
import ArticleEditor from 'src/pages/articleditor.jsx'

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
  },
  {
    path: '/social-feed',
    element: <SocialFeed />
  },
  {
    path: '/login-success',
    element: <LoginSuccessCard />
  },
  {
    path: '/article-editor',
    element: <ArticleEditor />
  },
  {
    path: '*',
    element: <NotFound />
  }
]

export default appRoutes;