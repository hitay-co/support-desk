import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Backbutton from '../components/BackButton';
import Spinner from '../components/Spinner';
import TicketItem from '../components/TicketItem';
import { getTickets, reset } from '../features/tickets/ticketSlice';

const Tickets = () => {
  const dispatch = useDispatch();
  const { tickets, isSuccess, isLoading, isError, message } = useSelector(
    (state) => state.tickets
  );

  useEffect(() => {
    if (tickets.length < 1) {
      dispatch(getTickets());
    }

    if (isError) {
      toast.error(message);
    }

    if (isSuccess && tickets.length > 0) {
      dispatch(reset());
    }
  }, [dispatch, isError, isSuccess, message, tickets.length]);

  if (isLoading) return <Spinner />;

  return (
    <>
      <Backbutton url='/' />
      <h1>Tickets</h1>
      <div className='tickets'>
        <div className='ticket-headings'>
          <div>Date</div>
          <div>Product</div>
          <div>Status</div>
          <div></div>
        </div>
        {tickets.length < 1 ? (
          <h2>No Data</h2>
        ) : (
          tickets.map((ticket) => (
            <TicketItem key={ticket._id} ticket={ticket} />
          ))
        )}
      </div>
    </>
  );
};

export default Tickets;
