import React, { useState, useMemo, useCallback } from 'react';
import { Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { TextField, InputAdornment, Box, Button } from '@mui/material';
import { debounce } from 'lodash';
import { useSelector } from 'react-redux';
import AddIcon from '@mui/icons-material/Add';
import { RootState } from '../store';
import { AddArticlesModal } from '../components/AddArticlesModal';
import { ArticlesList } from '../components/ArticlesList';

const delay = 1000;

export const UserArticlesPage: React.FC = () => {
  const [query, setQuery] = useState('');
  const [appliedQuery, setAppliedQuery] = useState('');
  const [showModal, setShowModal] = useState(false);

  const userArticles = useSelector((state: RootState) => state.articles.list);
  const pinnedId = useSelector((state: RootState) => state.articles.pinnedArticleId);

  const filteredArticles = useMemo(() => {
    const normalisedQuery = query.toLocaleLowerCase();

    return userArticles.filter(article => (
      article.title.toLocaleLowerCase().includes(normalisedQuery)
      || article.description.toLocaleLowerCase().includes(normalisedQuery)
    ));
  }, [appliedQuery, userArticles]);

  const applyQuery = useCallback(
    debounce(setAppliedQuery, delay),
    [delay],
  );

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    applyQuery(event.target.value);
  };

  return (
    <>
      <Typography variant="h1">
        UserArticles
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { sm: 'row', xs: 'column' },
          justifyContent: 'space-between',
          marginBlock: '20px',
          gap: '20px'
        }}>
        <TextField
          placeholder="Search"
          inputProps={{ 'aria-label': 'search' }}
          value={query}
          onChange={handleQueryChange}
          sx={{ borderRadius: '5px' }}
          type='search'
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <SearchIcon />
              </InputAdornment>
            )
          }}
        />
        <Button
          variant="contained"
          color="secondary"
          startIcon={<AddIcon />}
          onClick={() => setShowModal(true)}
        >
          Add Article
        </Button>
      </Box>

      <AddArticlesModal
        open={showModal}
        handleClose={setShowModal}
      />

      {
        filteredArticles.length > 0 && (
          <ArticlesList
            articles={filteredArticles}
            showButtons={true}
            pinnedId={pinnedId}
          />
        )}

    </>
  );
};