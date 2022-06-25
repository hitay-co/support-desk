import { useDispatch } from 'react-redux';
import { getTickets } from '../features/tickets/ticketSlice';

const Tickets = () => {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => {
        dispatch(getTickets());
      }}
    >
      click me
    </button>
  );
};

export default Tickets;
