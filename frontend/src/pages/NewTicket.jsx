import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import { createTicket, reset } from '../features/tickets/ticketSlice';

const NewTicket = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);
  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.tickets
  );

  const { register, handleSubmit } = useForm();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess) {
      navigate('/tickets');
    }
    dispatch(reset());
  }, [dispatch, isError, isSuccess, message, navigate]);

  const onSubmit = (formData) => {
    dispatch(createTicket(formData));
  };

  if (isLoading) return <Spinner />;

  return (
    <>
      <BackButton url='/' />
      <section className='heading'>
        <h1>Create a New Ticket</h1>
        <p>Please fill out the form below</p>
      </section>
      <section className='form'>
        <div className='form-group'>
          <label>Customer Name</label>
          <input
            type='string'
            className='form-control'
            value={user.name}
            disabled
          />
          <label>Customer Email</label>
          <input
            type='email'
            className='form-control'
            value={user.email}
            disabled
          />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='form-group'>
            <label>Product</label>
            <select {...register('product')}>
              <option>iPhone</option>
              <option>Macbook Pro</option>
              <option>iMac</option>
              <option>iPad</option>
            </select>
          </div>
          <div className='form-group'>
            <label>Description of the issue</label>
            <textarea
              className='form-control'
              {...register('description')}
              placeholder='Description'
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

export default NewTicket;
