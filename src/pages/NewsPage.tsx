import React, { useState, useEffect } from 'react';
import { Typography, Button, CircularProgress } from '@mui/material';
import { ArticlesList } from '../components/ArticlesList';
import { NewsResponse } from '../types/NewsResponse';
import { getArticles } from '../api/articles';
import { v4 as uuidv4 } from 'uuid';

export const NewsPage: React.FC = () => {
  const [data, setData] = useState<NewsResponse>({ articles: [], totalResults: 0 });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoading(true);

    getArticles(page)
      .then((response) => {
        const articlesWithId = response.data.articles.map((article) => {
          return {
            ...article,
            id: uuidv4()
          };
        });
        setData((prev) => {
          return {
            ...prev,
            articles: [...prev.articles, ...articlesWithId],
            totalResults: response.data.totalResults
          };
        });
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => setLoading(false));
  }, [page]);

  return (
    <>
      <Typography variant="h1">
        News
      </Typography>
      {loading && <CircularProgress color='primary' />}
      {error && <Typography color='error'>Something went wrong</Typography>}

      <ArticlesList articles={data.articles} />
      {!loading && !error && (data.articles.length < data.totalResults) &&
        <Button
          color='secondary'
          variant="contained"
          sx={{ display: 'block', marginInline: 'auto' }}
          onClick={() => setPage((prev) => prev + 1)}
        >
          Show More
        </Button>
      }
    </>
  );
};