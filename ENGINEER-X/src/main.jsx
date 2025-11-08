import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css' 
import ProductLanding from './Components/productLanding.jsx'
import Registration from './Components/Regisration.jsx'
import Dashboard from './Components/dashboard.jsx'
import SettingsPage from './Components/settings.jsx'
import LoginSuccessCard from './Components/loginsucess.jsx'
import UserProfile from './Components/userprofile.jsx'
import ProfileCreatedCard from './Components/userprofilecreated.jsx'
import NotificationDropdown from './Components/notifydropdown.jsx'
import ArticleEditor from './Components/articleditor.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductLanding />
    <Registration />
    <Dashboard  />
    <SettingsPage />
    <LoginSuccessCard />
    <UserProfile />
    <ProfileCreatedCard />
    <NotificationDropdown />
    <ArticleEditor />
  </StrictMode>,
)
