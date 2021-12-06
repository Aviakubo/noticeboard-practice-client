import Notice from './Notice.js';

function Notices({ notices, handleDelete }) {
    return (
      <div>
        {notices.map(notice => 
          <Notice 
            key={notice.id} 
            notice={notice}
            handleDelete={handleDelete}
          />
        )}
      </div>
    );
}

export default Notices;
