import { lazy } from 'react';

const Home = lazy(() => import('../src/pages/Home'));
const Login = lazy(() => import('../src/pages/Login'));
const Register = lazy(() => import('../src/pages/Register'));
const PrivateRoute = lazy(() => import('../src/components/PrivateRoute'));
const NewTicket = lazy(() => import('../src/pages/NewTicket'));

const routes = [
  { path: '/', element: <Home /> },
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> },
  {
    path: '/new-ticket',
    element: <PrivateRoute />,
    children: [
      {
        path: '/new-ticket',
        element: <NewTicket />,
      },
    ],
  },
];

export default routes;
