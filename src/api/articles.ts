import { NewsResponse } from '../types/NewsResponse';
import { client } from '../utils/httpClient';

const API_key = 'a178b21be171472f8c2074b134aba867';
const language = 'en';
const country = 'us';
const pageSize = 10;

export const getArticles = (page: number) => {
  return client.get<NewsResponse>(`https://newsapi.org/v2/top-headlines?pageSize=${pageSize}&page=${page}&language=${language}&country=${country}&apiKey=${API_key}`);
};
