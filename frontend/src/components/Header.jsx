import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logoutUser, reset } from '../features/auth/authSlice';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logoutUser());
    dispatch(reset());
    navigate('/');
  };

  return (
    <header className='header'>
      <div className='logo'>
        <Link to='/'>Support Desk</Link>
      </div>

      {user ? (
        <ul>
          <li>
            <button className='btn' onClick={onLogout}>
              <FaSignOutAlt />
              Logout
            </button>
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <Link to='/login'>
              <FaSignInAlt />
              Login
            </Link>
          </li>
          <li>
            <Link to='/register'>
              <FaUser />
              Register
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Header;
