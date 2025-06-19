export default function Footer() {
  return (
    <footer className='bg-neutral-50 py-4'>
      <div className='max-w-6xl mx-auto px-4'>
        <p className='text-center text-indigo-500'>
          &copy; {new Date().getFullYear()} DAUN Blog. 
        </p>
      </div>
    </footer>
  );
}
