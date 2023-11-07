import React, { useState } from 'react';
import { Modal, Typography, Box, TextField, Button, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Colors } from '../styles/theme';
import { useDispatch } from 'react-redux';
import { addArticle } from '../store/articlesSlice';
import { v4 as uuidv4 } from 'uuid';

type Props = {
  open: boolean;
  handleClose: (open: boolean) => void;
};

const modalWrapperStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: Colors.light,
  boxShadow: 24,
  borderRadius: '5px',
  p: 4,
};

export const AddArticlesModal: React.FC<Props> = ({ open, handleClose }) => {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [urlToImage, setUrlToImage] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    dispatch(addArticle({ title, description, author: name, urlToImage, id: uuidv4() }));

    setName('');
    setTitle('');
    setUrlToImage('');
    setDescription('');
    handleClose(false);
  };

  return (
    <Modal
      open={open}
      onClose={() => handleClose(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalWrapperStyle}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton
            onClick={() => handleClose(false)}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <Typography variant="h4" sx={{ marginBlock: '16px', textAlign: 'center' }}>
          Add new Article
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <TextField
            label="ImageURL"
            type="url"
            variant="outlined"
            fullWidth
            margin="normal"
            value={urlToImage}
            onChange={(e) => setUrlToImage(e.target.value)}
          />
          <TextField
            label="Title"
            variant="outlined"
            fullWidth
            margin="normal"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <TextField
            multiline
            sx={{
              '& textarea': {
                resize: 'both',
                minHeight: '100px'
              }
            }}
            label="Body"
            variant="outlined"
            fullWidth
            margin="normal"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginTop: '30px' }}
          >
            Save
          </Button>
        </form>
      </Box>
    </Modal>
  );
};