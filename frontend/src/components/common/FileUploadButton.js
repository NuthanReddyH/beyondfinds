import React, { useState } from 'react';
import { Button, Box } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

function FileUpload({onFileSelect}) {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    onFileSelect(event.target.files[0])
  };

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      borderWidth: '2px',
      borderRadius: '12px',
      borderColor: '#97BEF4',
      borderStyle: 'dashed',
      backgroundColor: '#F5F8FB',
      color: '#92A3B9',
      outline: 'none',
      transition: 'border .24s ease-in-out',
      cursor: 'pointer',
      marginRight: '50px',
      marginTop: '50px',
      marginBottom: '20px',
      width: '100%',
      '&:hover': {
        borderColor: '#accbf4'
      }
    }}>
      <input
        accept="image/*"
        style={{ display: 'none' }}
        id="contained-button-file"
        multiple
        type="file"
        onChange={handleFileChange}
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" component="span" startIcon={<CloudUploadIcon />} sx={{
          color: 'white',
          backgroundColor: '#23B0BE',
          marginBottom: '10px',
          marginTop: '20px',
          '&:hover': {
            backgroundColor: '#3578E5'
          }
        }}>
          Choose File
        </Button>
      </label>
      {file && file.name}
    </Box>
  );
}

export default FileUpload;
