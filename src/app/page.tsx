import Header from './components/Header';
import { MovieRow } from './components/MovieRow';
import { Banner } from './components/Banner';

export default function Home() {
  return (
    <div className='relative bg-gradient-to-b from-transparent to-white pb-8'>
      <Header />
      <main className='scrollbar-hide relative overflow-y-scroll p-8 pb-20 lg:px-16'>
        <Banner />
        <MovieRow
          sectionTitle='Top Rated'
          movieInnerTitle='Here you can figure out how to install your own custom TV'
        />
        <MovieRow
          sectionTitle='Do It yourself Videos'
          movieInnerTitle='Do It Yourself. Its amazing'
        />
        <MovieRow
          sectionTitle='Short Videos'
          movieInnerTitle='Watch this short video and fix it yourself'
        />
      </main>
    </div>
  );
}
