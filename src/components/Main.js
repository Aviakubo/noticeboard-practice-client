import Notices from './Notices.js';

function Main({ notices, handleDelete }) {
    return (
      <main>
        <Notices notices={notices} handleDelete={handleDelete} />
      </main>
    );
}

export default Main;
