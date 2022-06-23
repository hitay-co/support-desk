import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

const NewTicket = () => {
  const { user } = useSelector((state) => state.auth);

  const { register, handleSubmit } = useForm();

  const onSubmit = (formData) => {
    console.log(formData);
  };
  return (
    <>
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
