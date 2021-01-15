import React, { useState } from 'react';
import { AnnouncementForm } from './AnnouncementForm';
import { AnnouncementDetails } from './AnnouncementDetails';
import { Grid } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

export const Announcement = ({ announcements, removeAd, updateAd }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
  });

  const [expandedAdId, setExpandedAdId] = useState(null);

  const submitUpdate = value => {
    updateAd(edit.id, value);
    setEdit({
      id: null,
      value: '',
    });
  };

  if (edit.id) {
    return <AnnouncementForm edit={edit} onSubmit={submitUpdate} />;
  }

  const showDetail = (id) => {
    setExpandedAdId(expandedAdId === id ? null : id);
  };

  return (
    announcements.map((ad) => (
      <div key={ad.id} style={{ border: '1px solid #cccccc', borderRadius: 10 }}>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <div style={{ padding: 12, textAlign: 'left' }}>
              {ad.name}
            </div>
          </Grid>
          <Grid item xs={6}>
            <CardActions>
              <Button size="small" onClick={() => showDetail(ad.id)}>Details</Button>
              <Button size="small" onClick={() => setEdit({ id: ad.id, value: ad.name })}>Edit</Button>
              <Button size="small" onClick={() => removeAd(ad.id)}>Delete</Button>
            </CardActions>
          </Grid>
          {
            ad.id === expandedAdId && (
              <Grid item xs={12}>
                <AnnouncementDetails ad={ad} ads={announcements} showDetail={showDetail} />
              </Grid>
            )
          }
        </Grid>
      </div>
    ))
  );
};
