import Header from '@/app/components/Header';
import Player from '@/app/components/Player';
import { getMovieById } from '@/app/service/MovieService';
import React from 'react';

interface IMovieParam {
  params: Promise<{ id: string }>;
}

export default async function WatchMovie({ params }: IMovieParam) {
  const { id } = await params;
  const movie = await getMovieById(id);
  if (!movie) {
    return (
      <div className='flex h-screen justify-center align-middle'>
        <Header />
        <main className='flex flex-1 flex-col items-center justify-center px-20 text-center'>
          <h1 className='text-2xl font-bold md:text-4xl lg:text-7xl'>
            Sorry, this movie is not available.
          </h1>
        </main>
      </div>
    );
  }
  return <Player movie={movie} />;
}
