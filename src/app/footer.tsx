export default function Footer() {
  return (
    <footer className='bg-neutral-50 py-4'>
      <div className='max-w-6xl mx-auto px-4'>
        <p className='text-center font-bold text-indigo-400 scale-150 h-8'>
          &copy; {new Date().getFullYear()} DAUN Blog.
        </p>
        <p className='text-center font-extrabold text-indigo-300 h-8 src = '>
           Email : 455a4555786@gmail.com
        </p>
         <p className='text-center font-extrabold text-indigo-300'>
           Number : 010-7635-0621
        </p>
      </div>
    </footer>
  );
}
