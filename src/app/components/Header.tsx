'use client';
import { LogoHeader } from './LogoHeader';
import { HeaderMenuNavLinks } from './HeaderMenuNavLinks';
import { useScroll } from '../hooks/useScroll';
import { UserProfile } from './UserProfile';

export default function Header() {
  const isScrolled = useScroll();
  return (
    <header
      className={`${isScrolled && 'bg-gray-400'} fixed top-0 z-50 flex w-full justify-between p-2 px-4 py-6 transition-all lg:px-16 lg:py-6`}
    >
      <div className='flex items-center space-x-6 md:space-x-4'>
        <LogoHeader />
        <HeaderMenuNavLinks />
      </div>
      <UserProfile />
    </header>
  );
}
