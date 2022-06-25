import { Link } from 'react-router-dom';

const TicketItem = ({ ticket }) => {
  return (
    <div className='ticket'>
      {/* <div>{new Date(data.createdAt)}</div> */}
      <div>{ticket.product}</div>
      <div className={`status status-${ticket.status}`}>{ticket.status}</div>
      <div>
        <Link to={`/ticket/${ticket._id}`} className='btn btn-reverse btn-sm'>
          View
        </Link>
      </div>
    </div>
  );
};

export default TicketItem;
