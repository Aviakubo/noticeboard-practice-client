import Notices from './Notices.js';

function Main({ notices, handleDelete, handleUpdate }) {
    return (
      <main>
        <Notices notices={notices} handleDelete={handleDelete} handleUpdate={handleUpdate} />
      </main>
    );
}

export default Main;
