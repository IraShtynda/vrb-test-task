import { Article } from './Article';

export interface NewsResponse {
  articles: Article[];
  totalResults: number;
}