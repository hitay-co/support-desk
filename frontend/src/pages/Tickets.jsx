import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Spinner from '../components/Spinner';
import { getTickets, reset } from '../features/tickets/ticketSlice';

const Tickets = () => {
  const dispatch = useDispatch();
  const { tickets, isSuccess, isLoading, isError, message } = useSelector(
    (state) => state.ticket
  );

  useEffect(() => {
    if (!tickets.length) {
      dispatch(getTickets());
    }

    if (isError) {
      toast.error(message);
    }

    if (isSuccess) {
      dispatch(reset());
    }
  }, [dispatch, isError, isSuccess, message, tickets.length]);

  if (isLoading) return <Spinner />;

  return <p>h</p>;
};

export default Tickets;
