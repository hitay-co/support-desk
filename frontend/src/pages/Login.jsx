import { useForm } from 'react-hook-form';
import { FaSignInAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;
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
