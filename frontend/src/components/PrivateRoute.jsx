import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const isLoggedIn = localStorage.getItem('user');

  return isLoggedIn ? <Outlet /> : <Navigate to='/login' />;
};

export default PrivateRoute;
