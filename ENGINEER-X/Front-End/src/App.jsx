import { useRoutes } from 'react-router-dom';
import appRoutes from './AppRoutes.jsx'

function App() {
    const routing = useRoutes(appRoutes);

    return routing;
}

export default App;