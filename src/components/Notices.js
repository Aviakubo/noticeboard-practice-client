import Notice from './Notice.js';

function Notices({ notices }) {
    return (
      <div>
        {notices.map(notice => 
          <Notice 
            key={notice.id} 
            notice={notice}
          />
        )}
      </div>
    );
}

export default Notices;
