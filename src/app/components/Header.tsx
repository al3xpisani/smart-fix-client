'use client';
import { LogoHeader } from './LogoHeader';
import { HeaderMenuNavLinks } from './HeaderMenuNavLinks';
import { useScroll } from '../hooks/useScroll';
import { UserProfile } from './UserProfile';
import { useState } from 'react';
import { SearchForm } from './SearchForm';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function Header() {
  const isScrolled = useScroll();
  const router = useRouter();
  const params = useSearchParams();
  const initialSearchTerm = params.get('title') || '';
  const [searchTerm, setSearchTerm] = useState<string>(initialSearchTerm);

  const onSearchTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };
  const onSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newParams = new URLSearchParams(params.toString());
    newParams.set('title', searchTerm);
    router.push(`/search?${newParams.toString()}`);
  };
  return (
    <header
      className={`${isScrolled && 'bg-black'} fixed top-0 z-50 flex w-full items-center justify-between bg-gradient-to-t from-transparent to-black p-2 px-4 transition-all lg:px-16 lg:py-4`}
    >
      <div className='flex items-center space-x-2 md:space-x-8'>
        <Link href='/'>
          <LogoHeader />
        </Link>
        <HeaderMenuNavLinks />
      </div>
      <div className='flex items-center space-x-2 md:space-x-8'>
        <SearchForm
          searchTerm={searchTerm}
          onSearchSubmit={onSearchSubmit}
          onSearchTermChange={onSearchTermChange}
        />
        <UserProfile />
      </div>
    </header>
  );
}
