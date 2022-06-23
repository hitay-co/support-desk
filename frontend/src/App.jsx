import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Spinner from './components/Spinner';
import routes from './routes';

const App = () => {
  const appRoutes = useRoutes(routes);

  return (
    <Suspense fallback={<Spinner />}>
      <div className='container'>
        <Header />
        {appRoutes}
      </div>
      <ToastContainer theme='dark' />
    </Suspense>
  );
};

export default App;
