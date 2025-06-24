export default function Footer() {
  return (
    <footer className='bg-white py-6'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='flex flex-col items-center space-y-2 text-center'>
          <p className='font-bold text-gray-600 text-lg'>
            &copy; {new Date().getFullYear()} DAUN Blog.
          </p>
          <p className='font-medium text-gray-500'>
            Email: 455a4555786@gmail.com
          </p>
          <p className='font-medium text-gray-500'>Number: 010-7635-0621</p>
        </div>
      </div>
    </footer>
  );
}
