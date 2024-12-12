import { apolloClient } from '../apolloClient';
import { GET_MOVIES_BY_GENRE, GET_MOVIES_BY_ID } from '../movieQueries';

export const getMoviesByGenre = async (
  genre: string,
  options: { _limit?: number } = {}
) => {
  const limit = options?._limit || 8;
  const { data } = await apolloClient.query({
    query: GET_MOVIES_BY_GENRE,
    variables: { genre, limit },
  });
  return data.moviesByGenre;
};

export const getFeaturedMovieById = async (id: string) => {
  const { data } = await apolloClient.query({
    query: GET_MOVIES_BY_ID,
    variables: { id },
  });
  return data.movie;
};
