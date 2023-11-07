import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Article } from '../types/Article';

export interface ArticlesState {
  pinnedArticleId: string | '',
  list: Article[]
}

const initialState: ArticlesState = {
  pinnedArticleId: '',
  list: []
};

export const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    addArticle: (state: ArticlesState, action: PayloadAction<Article>) => {
      state.list.push({ ...action.payload });
    },
    deleteArticle: (state: ArticlesState, action: PayloadAction<string>) => {
      state.list = state.list.filter(item => item.id !== action.payload);
    },
    changePinned: (state: ArticlesState, action: PayloadAction<{ articleId: string, isPinned: boolean }>) => {
      if (action.payload.isPinned) {
        state.pinnedArticleId = action.payload.articleId;
        const index = state.list.findIndex((item) => item.id === action.payload.articleId);
        const pinnedItem = state.list[index];
        state.list.splice(index, 1);
        state.list.unshift(pinnedItem);
        return;
      }
      state.pinnedArticleId = '';
    },
  },
});

export const { addArticle, deleteArticle, changePinned } = articlesSlice.actions;