import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { FormEvent, ChangeEvent } from 'react';

export const SearchForm = ({
  searchTerm,
  onSearchSubmit,
  onSearchTermChange,
}: {
  searchTerm: string;
  onSearchSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onSearchTermChange: (event: ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <form onSubmit={onSearchSubmit} className='flex items-center space-x-2'>
      <button type='submit'>
        <MagnifyingGlassIcon className='h-6 w-6 text-gray-400' />
      </button>
      <input
        id='searchHeader'
        type='search'
        name='search'
        placeholder='Search'
        value={searchTerm}
        onChange={onSearchTermChange}
        className='bg-transparent text-white placeholder-white outline-none'
      />
    </form>
  );
};
