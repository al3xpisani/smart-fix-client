import Header from './components/Header';
import { MovieRow } from './components/MovieRow';
import { Banner } from './components/Banner';

export default function Home() {
  return (
    <div className='relative bg-gradient-to-b from-transparent to-black pb-8'>
      <Header />
      <main className='scrollbar-hide relative overflow-y-scroll p-8 pb-20 lg:px-16'>
        <Banner />
        <MovieRow sectionTitle='Top Rated' />
        <MovieRow sectionTitle='Do It yourself Videos' />
        <MovieRow sectionTitle='Short Videos' />
      </main>
    </div>
  );
}
