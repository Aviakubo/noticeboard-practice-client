import { useState } from 'react';
import Form from '../components/Form'

function Notice({ notice, handleDelete, handleUpdate }) {

  const [editFormVisible, setEditFormVisible] = useState(false);

  function toggleForm() {
    setEditFormVisible(!editFormVisible)
  }

  return (
      <>
      { editFormVisible ?
        <Form notice={notice} toggleForm={toggleForm} handleUpdate={handleUpdate}/>
        :
        <div className="notice">
          <h3>{notice.title}</h3>
          <p>{notice.author}</p>
          <small>{notice.phone}</small>
          <button onClick={() => handleDelete(notice.id)}>X</button>
          <button onClick={toggleForm}>Edit</button>
        </div>
      }
      </>
      );
}

      export default Notice;
