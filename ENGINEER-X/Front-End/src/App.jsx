import { useRoutes, Link } from 'react-router-dom';
import appRoutes from './routes/AppRoutes.jsx'

function App() {
    const routing = useRoutes(appRoutes);

    return(

        <>
        <nav>
            <Link to='/'></Link>
            <Link to='/regi'></Link>
        </nav>

        <main>
            {routing}
        </main>
        
        </>
    );
}

export default App;