import { useForm } from 'react-hook-form';
import { FaUser } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { name, email, password, password2 } = data;

    if (password !== password2) {
      toast.error('Passwords do not match', { icon: '❗' });
    }
  };

  return (
    <>
      <section className='heading'>
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please create an account</p>
      </section>
      <section className='form'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              {...register('name', { required: true })}
              placeholder='Enter your name'
            />
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
            <input
              type='password'
              className='form-control'
              {...register('password2', { required: true })}
              placeholder='Confirm your password'
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

export default Register;
