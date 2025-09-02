//header.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className='sticky top-0 z-10 bg-white/30 backdrop-blur-xl h-[80px] flex items-center justify-between px-4 border-b border-b-blue-400/10'>
      <Link
        href='/'
        className='text-2xl font-bold text-blue-600 transition-colors'>
        DAUN Blog
      </Link>

      <a
        target='_blank'
        href='https://github.com/jdaun0621'
        rel='noopener noreferrer'
        className='hover:opacity-80 transition-opacity duration-150'>
        <Image src='/icons/github.png' alt='GitHub' width={42} height={42} />
      </a>
    </header>
  );
}
