import Image from 'next/image';

type MovieRowProps = {
  sectionTitle: string;
  movieInnerTitle: string;
};
type MovieCardProps = {
  index: number;
  movieInnerTitle: string;
};

export function MovieRow({ sectionTitle, movieInnerTitle }: MovieRowProps) {
  return (
    <div className='flex-col space-y-4 pt-8'>
      <div className='flex'>
        <h2 className='-ml-2 inline-flex items-center text-2xl font-bold'>
          {sectionTitle}
        </h2>
      </div>
      <div className='scrollbar-hide -ml-8 flex space-x-6 overflow-hidden overflow-x-scroll p-6 pb-12'>
        {[1, 2, 3, 4, 5].map((index) => (
          <MovieCard
            key={index}
            index={index}
            movieInnerTitle={movieInnerTitle}
          />
        ))}
      </div>
    </div>
  );
}

const MovieCard = ({ index, movieInnerTitle }: MovieCardProps) => (
  <div>
    <div
      key={index}
      className='group relative h-28 min-w-[200px] transform bg-gradient-to-b from-transparent to-black transition duration-200 ease-in hover:scale-110 md:h-48 md:min-w-[300px] lg:h-52 lg:min-w-[400px]'
    >
      <Image
        src={`/item-${index}-fix.png`}
        fill={true}
        alt='items'
        className='rounded-bl-full'
      />
    </div>
    <h3 className='font-display font relative -mt-20 px-4 text-base font-semibold tracking-tight text-slate-100'>
      {movieInnerTitle}
    </h3>
  </div>
);
