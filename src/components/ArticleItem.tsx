import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActions, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import PushPinIcon from '@mui/icons-material/PushPin';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import defaultIMG from '../assets/defaultImages.jpg';
import { useDispatch } from 'react-redux';
import { deleteArticle, changePinned } from '../store/articlesSlice';

type Props = {
  image: string,
  author: string,
  title: string,
  description: string,
  id: string
  showButtons?: boolean,
  isPinned: boolean
}

export const ArticleItem: React.FC<Props> = ({
  image,
  author,
  title,
  description,
  id,
  showButtons,
  isPinned
}) => {
  const dispatch = useDispatch(); 

  return (
    <Card sx={{
      height: '100%',
      ':hover': {
        boxShadow: 10,
      },
    }}>
      <CardMedia
        sx={{ aspectRatio: 2 }}
        image={image ? image : defaultIMG}
        src={title}
      />

      <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <Typography variant='h2'>
          {title}
        </Typography>

        <Typography dangerouslySetInnerHTML={{ __html: description }}/>
        <Typography variant='h3' dangerouslySetInnerHTML={{ __html: author}}/>
      </CardContent>
      {showButtons && <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <IconButton
          size="small"
          onClick={() => dispatch(deleteArticle(id))}
        >
          <DeleteIcon color='primary'/>
        </IconButton>
        <IconButton
          size="small"
          onClick={() => dispatch(changePinned({isPinned: !isPinned, articleId: id}))}
        >
          {isPinned ? <PushPinIcon color='primary'/> : <PushPinOutlinedIcon color='primary'/>}
        </IconButton>
      </CardActions>}
    </Card>
  );
};