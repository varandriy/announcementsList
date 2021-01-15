import React from 'react';
import './App.css';
import { AnnouncementList } from './components/AnnouncementList';

function App() {
  return (
    <div className='App'>
      <div className={'header'}>
        Announcements
      </div>
      <AnnouncementList/>
    </div>
  );
}

export default App;
