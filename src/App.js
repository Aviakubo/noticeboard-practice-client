import { useState, useEffect } from 'react';
import Aside from './components/Aside';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Nav from './components/Nav';

function App() {
  const [noticesState, setNoticesState] = useState({ notices: [] });
  return (
    <div className="App">
      <div className='container'>
        <Header />
        <Aside />
        <Main notices={noticesState.notices} />
        <Nav />
        <Footer />
      </div>
    </div>
  );
}

export default App;