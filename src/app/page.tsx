import Image from "next/image";
import Header from './components/Header';

export default function Home() {
  return (
    <div className='relative bg-gradient-to-b pb-8'>
      <Header />
      <main className='scrollbar-hide relative overflow-y-scroll p-8 pb-20 lg:px-16'>
        <div className='flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[90vh] lg:justify-end lg:pb-12'>
          <div className='absolute left-0 top-0 -z-10 h-[95vh] w-screen bg-black bg-transparent'>
            <Image src='/banner-v2.png' alt='Do it yourself' fill={true} />
          </div>

          <h1 className='text-2xl font-bold md:text-4xl lg:text-7xl'>
            Do It Yourself
          </h1>
          <p className='text-shadow-md max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl'>
            These short and to-the-point videos will teach you how to make small
            repairs or installations in your home, saving you some money in your
            pocket.
          </p>
        </div>

        <div className='flex space-x-3'>
          <button className='flex cursor-pointer items-center gap-x-2 rounded bg-white px-5 py-1.5 text-sm text-black transition hover:opacity-75 md:px-8 md:py-2.5 md:text-xl'>
            Play
          </button>
          <button className='flex cursor-pointer items-center gap-x-2 rounded bg-gray-600 px-5 py-1.5 text-sm text-black transition hover:opacity-75 md:px-8 md:py-2.5 md:text-xl'>
            More Info
          </button>
        </div>
      </main>
    </div>
  );
}
