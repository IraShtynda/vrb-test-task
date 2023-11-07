import React from 'react';
import { Grid } from '@mui/material';
import { Article } from '../types/Article';
import { ArticleItem } from './ArticleItem';

type Props = {
  articles:  Article[],
  showButtons?: boolean,
  pinnedId?: string
}

export const ArticlesList: React.FC<Props> = ({ articles, showButtons, pinnedId }) => {

  return (
    <Grid container spacing={4} sx={{ marginBlock: '16px'}}>
      {articles.map(article => (
        <Grid item xs={12} sm={6} md={4} key={article.id} sx={{ gridAutoRows: '1fr' }}>
          <ArticleItem
            image={article.urlToImage}
            author={article.author}
            title={article.title}
            description={article.description}
            id={article.id}
            showButtons={showButtons}
            isPinned={article.id===pinnedId}
          />
        </Grid>
      ))}
    </Grid>
  );
};