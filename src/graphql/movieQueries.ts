import { gql } from '@apollo/client';

export const GET_MOVIES = gql`
  query GetMovies {
    id
    title
    description
    yearLaunched
    link
    genres
    rating
    thumbFileURL
    bannerFileURL
    videoFileURL
  }
`;

export const GET_MOVIES_BY_ID = gql`
  query GetMoviesById($id: ID!) {
    moviesById(id: $id) {
      id
      title
      description
      yearLaunched
      link
      genres
      rating
      thumbFileURL
      bannerFileURL
      videoFileURL
    }
  }
`;

export const GET_MOVIES_BY_GENRE = gql`
  query GetMoviesByGenre($genre: String!) {
    moviesByGenre(genre: $genre) {
      id
      title
      description
      yearLaunched
      link
      genres
      rating
      thumbFileURL
      bannerFileURL
      videoFileURL
    }
  }
`;
