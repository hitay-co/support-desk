import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaPlus } from 'react-icons/fa';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import NoteItem from '../components/NoteItem';
import { closeTicket, getTicket } from '../features/tickets/ticketSlice';
import { createNote, getNotes } from '../features/notes/noteSlice';
import Modal from 'react-modal';
import { useForm } from 'react-hook-form';

const customStyles = {
  content: {
    width: '600px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    position: 'relative',
  },
};

Modal.setAppElement('#root');

const Ticket = () => {
  const { ticketId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const { ticket, isLoading, isError, message } = useSelector(
    (state) => state.tickets
  );
  const { _id, status, createdAt, description, product } = ticket;
  const { notes, isLoading: notesIsLoading } = useSelector(
    (state) => state.notes
  );

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    dispatch(getTicket(ticketId));
    dispatch(getNotes(ticketId));
  }, [dispatch, isError, message, ticketId]);

  if (isError) return <h3>Something went wrong..</h3>;

  if (isLoading || notesIsLoading) return <Spinner />;

  const onOpenModal = () => setIsModalOpen(true);
  const onCloseModal = () => setIsModalOpen(false);

  const onTicketClose = () => {
    dispatch(closeTicket(_id));
    toast.success('Ticket closed');
    navigate('/tickets');
  };

  const onNoteSubmit = ({ noteText }) => {
    dispatch(createNote({ noteText, ticketId }));
    onCloseModal();
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
        <h2>Notes</h2>
      </header>

      <button className='btn' onClick={onOpenModal}>
        <FaPlus />
        Add Note
      </button>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={onCloseModal}
        style={customStyles}
        contentLabel='Add Note'
      >
        <h1>Add note</h1>
        <button className='btn-close' onClick={onCloseModal}>
          X
        </button>
        <form onSubmit={handleSubmit(onNoteSubmit)}>
          <div className='form-group'>
            <textarea
              className='form-control'
              placeholder='Note Text'
              {...register('noteText')}
            />
          </div>
          <div className='form-group'>
            <button className='btn' type='submit'>
              Submit
            </button>
          </div>
        </form>
      </Modal>
      {notes.map((note) => (
        <NoteItem key={note._id} note={note} />
      ))}
      {status !== 'closed' && (
        <button className='btn btn-block btn-danger' onClick={onTicketClose}>
          Close Ticket
        </button>
      )}
    </div>
  );
};

export default Ticket;
