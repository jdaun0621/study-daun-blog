export default function Footer() {
  return (
    <footer className='bg-neutral-50 py-4'>
      <div className='max-w-6xl mx-auto px-4'>
        <p className='text-center font-bold text-gray-500 scale-150 h-8'>
          &copy; {new Date().getFullYear()} DAUN Blog.
        </p>
        <p className='text-center font-extrabold text-gray-500 h-7'>
           Email 455a4555786@gmail.com
        </p>
         <p className='text-center font-extrabold text-gray-500'>
           Number 010-7635-0621
        </p>
      </div>
    </footer>
  );
}
