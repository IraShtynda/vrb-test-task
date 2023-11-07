import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { App } from './App';
import { UserArticlesPage } from './pages/UserArticlesPage';
import { NewsPage } from './pages/NewsPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const Root: React.FC = () => {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<UserArticlesPage />} />
          <Route path='news' element={<NewsPage />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </HashRouter>
  );
};
