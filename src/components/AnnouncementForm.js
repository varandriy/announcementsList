import React, { useState } from 'react';
import { FormControl, TextField, Button } from '@material-ui/core';

export const AnnouncementForm = ({ onSubmit, edit }) => {
  const [inputName, setInputName] = useState(edit ? edit.value : '');
  const [inputDescription, setInputDescription] = useState(edit ? edit.value : '');

  const handleChangeName = e => {
    setInputName(e.target.value);
  };

  const handleChangeDescription = e => {
    setInputDescription(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({
      id: Math.floor(Math.random() * 10000),
      name: inputName,
      description: inputDescription,
      date: new Date(),
    });
    setInputName('');
    setInputDescription('');
  };

  return (
    <div>
      {
        <FormControl>
          <TextField
            label={'Title'}
            onChange={handleChangeName}
            value={inputName}
            placeholder='Enter Name'
            style={{ margin: 5}}
          />
          <TextField
            id="outlined-multiline-static"
            rows={6}
            variant="outlined"
            label={'Description'}
            multiline
            onChange={handleChangeDescription}
            value={inputDescription}
            placeholder='Enter Description'
            style={{ margin: 5, width: 460 }}
          />
          <Button
            variant="outlined"
            color="primary"
            onClick={handleSubmit}
            style={{ margin: 5 }}
          >{edit ? 'Change' : 'Add announcement'}</Button>
        </FormControl>
      }
    </div>
  );
};
