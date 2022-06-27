import { useSelector } from 'react-redux';

const NoteItem = ({ note }) => {
  const { user } = useSelector((state) => state.auth);

  const { isStaff, text, createdAt } = note;

  return (
    <div
      className='note'
      style={{
        backgroundColor: isStaff ? 'rgba(0,0,0,0.8)' : 'fff',
        color: isStaff ? '#fff' : '000',
      }}
    >
      <h4>{isStaff ? <span>Staff</span> : <span>{user.name}</span>}</h4>
      <p>{text}</p>
      <div className='note-date'>
        {new Date(createdAt).toLocaleString('en-US')}
      </div>
    </div>
  );
};

export default NoteItem;
