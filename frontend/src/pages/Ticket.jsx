import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import { closeTicket, getTicket } from '../features/tickets/ticketSlice';

const Ticket = () => {
  const { ticketId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { ticket, isLoading, isError, message } = useSelector(
    (state) => state.tickets
  );

  const { _id, status, createdAt, description, product } = ticket;

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    dispatch(getTicket(ticketId));
  }, [dispatch, isError, message, ticketId]);

  if (isError) return <h3>Something went wrong..</h3>;

  if (isLoading) return <Spinner />;

  const onTicketClose = () => {
    dispatch(closeTicket(_id));
    toast.success('Ticket closed');
    navigate('/tickets');
  };

  return (
    <div className='ticket-page'>
      <header className='ticket-header'>
        <BackButton url='/tickets' />
        <h2>
          Ticket ID : {_id}
          <span className={`status status-${status}`}>{status}</span>
        </h2>
        <h3>Date Submitted :{new Date(createdAt).toLocaleString('en-US')}</h3>
        <h3>{product}</h3>
        <hr />

        <div className='ticket-desc'>
          <h3>Description of Issue</h3>
          <p>{description}</p>
        </div>
      </header>

      {status !== 'closed' && (
        <button className='btn btn-block btn-danger' onClick={onTicketClose}>
          Close Ticket
        </button>
      )}
    </div>
  );
};

export default Ticket;
