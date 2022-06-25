import { Link } from 'react-router-dom';

const TicketItem = ({ ticket }) => {
  const { createdAt, product, status, _id } = ticket;

  return (
    <div className='ticket'>
      <div>{new Date(createdAt).toLocaleString('en-US')}</div>
      <div>{product}</div>
      <div className={`status status-${status}`}>{status}</div>
      <div>
        <Link to={`/ticket/${_id}`} className='btn btn-reverse btn-sm'>
          View
        </Link>
      </div>
    </div>
  );
};

export default TicketItem;
