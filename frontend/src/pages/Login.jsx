import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FaSignInAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { loginUser, reset } from '../features/auth/authSlice';

const Login = () => {
  const { user, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  useEffect(() => {
    if (isError) toast.error(message);

    if (isSuccess || user) navigate('/');

    dispatch(reset());
  }, [dispatch, isError, isSuccess, message, navigate, user]);

  const onSubmit = (formData) => {
    dispatch(loginUser(formData));
  };

  return (
    <>
      <section className='heading'>
        <h1>
          <FaSignInAlt /> Register
        </h1>
        <p>Please login to get support</p>
      </section>
      <section className='form'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='form-group'>
            <input
              type='email'
              className='form-control'
              {...register('email', { required: true })}
              placeholder='Enter your email'
            />
            <input
              type='password'
              className='form-control'
              {...register('password', { required: true })}
              placeholder='Enter your password'
            />
          </div>
          <div>
            <button className='btn btn-block' type='submit'>
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Login;
