import React, { useState } from 'react';
import { AnnouncementForm } from './AnnouncementForm';
import { Announcement } from './Announcement';
import { TextField } from '@material-ui/core';

export const AnnouncementList = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const addAnnouncement = announcement => {
    if (!announcement.name) {
      return;
    }

    const newAnnouncement = [announcement, ...announcements];
    setAnnouncements(newAnnouncement);
  };

  const updateAd = (adId, newValue) => {
    if (!newValue.name) {
      return;
    }

    setAnnouncements(prev => prev.map(item => (item.id === adId ? newValue : item)));
  };

  const removeAd = id => {
    const removeArr = [...announcements].filter(ad => ad.id !== id);
    setAnnouncements(removeArr);
  };

  const handleChange = e => {
    setSearchTerm(e.target.value);
  };

  const searchResults = announcements.filter(person =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div style={{ padding: 24, paddingTop: 0 }}>
      <AnnouncementForm onSubmit={addAnnouncement} />
      <TextField
        label={'Search'}
        className='search-input'
        value={searchTerm}
        onChange={handleChange}
        placeholder='search announcement'
        style={{ margin: 10 }}
      />
      <div style={{ margin: 5 }}>
        <Announcement announcements={searchResults} removeAd={removeAd} updateAd={updateAd} />
      </div>
    </div>
  );
};
