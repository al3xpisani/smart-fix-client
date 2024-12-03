import Image from 'next/image';

type MovieRowProps = {
  sectionTitle: string;
};
type MovieCardProps = {
  index: number;
};

export function MovieRow({ sectionTitle }: MovieRowProps) {
  return (
    <div className='flex-col space-y-4'>
      <div className='flex'>
        <h2 className='-ml-2 inline-flex items-center text-2xl font-bold'>
          {sectionTitle}
        </h2>
      </div>
      <div className='scrollbar-hide -ml-8 flex space-x-4 overflow-x-scroll p-6'>
        {[1, 2, 3, 4, 5, 5, 5, 5, 5, 5, 5].map((index) => (
          <MovieCard key={index} index={index} />
        ))}
      </div>
    </div>
  );
}

const MovieCard = ({ index }: MovieCardProps) => (
  <div
    key={index}
    className='group relative h-28 min-w-[200px] transform bg-gradient-to-b from-transparent to-black transition duration-200 ease-in hover:z-50 hover:scale-110 md:h-48 md:min-w-[300px] lg:h-52 lg:min-w-[400px]'
  >
    <Image
      src={`/item-${index}-fix.png`}
      fill={true}
      alt='items'
      className='rounded'
    />
  </div>
);
