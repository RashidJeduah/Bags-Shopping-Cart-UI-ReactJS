import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap';
import Sidebar from './components/sidebar';
import Main from './components/main'


function App() {
  return (
    <div className='container'>
      <div className='row'>
        <div class='col-2'>
          <Sidebar/>
        </div>
        <div className='col-10'>
          <Main/>
        </div>
      </div>
    </div>
  );
}

export default App;
