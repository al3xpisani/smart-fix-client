import Header from './components/Header';
import { MovieRow } from './components/MovieRow';
import { Banner } from './components/Banner';
import { getFeaturedMovie } from './service/MovieService';
import { Suspense } from 'react';
import { getMoviesByGenre } from '@/graphql/hooks/useMovies';

export default async function Home() {
  const featuredMovie = await getFeaturedMovie('101');
  const genres = ['Drama', 'Action', 'Comedy', 'Animation'];
  const movies = await Promise.all(
    genres.map(async (genre) => {
      const movies = await getMoviesByGenre(genre, { _limit: 8 });
      // const movies = await getMoviesByGenre('', genre, { _limit: 8 });
      return { sectionTitle: genre, movies };
    })
  );
  return (
    <Suspense>
      <div className='relative bg-gradient-to-b pb-8'>
        <Header />
        <main className='relative overflow-y-scroll p-8 pb-20 scrollbar-hide lg:px-16'>
          <Banner movie={featuredMovie} />
          {movies.map((movie, index) => (
            <MovieRow
              key={index}
              sectionTitle={movie.sectionTitle}
              movies={movie.movies}
            />
          ))}
        </main>
      </div>
    </Suspense>
  );
}
