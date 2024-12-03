import Image from 'next/image';

export const LogoHeader = () => {
  return (
    <Image
      src='/smart-fix-v5 _cropped.png'
      alt='Do It Yourself'
      width={150}
      height={150}
      className='cursor-pointer'
    />
  );
};
