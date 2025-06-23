import Link from 'next/link';

export default function Header() {
  return (
    <header className='sticky top-0 z-10 bg-white/30 backdrop-blur-xl h-[70px] flex items-center justify-between px-4 border-b-blue-400/10 '>
      <Link
        href='/'
        className='text-2xl font-bold text-violet-500 transition-colors  '>
        DAUN Blog
      </Link>

      <a
        target='_blank'
        href='https://github.com/jdaun0621'
        rel='noopener noreferrer'
        className='text-1xl text-emerald-500 font-bold hover:text-violet-600'>
        GitHub
      </a>
    </header>
  );
}
