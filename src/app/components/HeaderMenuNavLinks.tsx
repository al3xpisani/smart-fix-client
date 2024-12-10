import Link from 'next/link';

export const HeaderMenuNavLinks = () => {
  return (
    <nav>
      <ul className='hidden text-base font-bold md:flex md:space-x-4'>
        <Link href='/search?genre=Comedy'>Comedy</Link>
        <Link href='/search?genre=Action'>Action</Link>
        <Link href='/search?genre=Adventure'>Adventure</Link>
        <Link href='/search?genre=Animation'>Animation</Link>
      </ul>
    </nav>
  );
};
