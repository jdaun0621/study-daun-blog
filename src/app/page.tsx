import fs from 'fs';
import Image from 'next/image';
import Link from 'next/link';
import path from 'path';

export default async function Home() {
  const dir = path.join(process.cwd(), 'src', 'content');
  const files = fs.readdirSync(dir);

  const posts = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(/\.mdx$/, '');
      const mod = await import(`../content/${slug}.mdx`);
      return { slug, metadata: mod.metadata };
    }),
  );

  const filteredPosts = posts.filter((post) => post.metadata);

  return (
    <div className='w-full flex flex-col items-center px-4 py-8 '>
      <div className='max-w-6xl w-full grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-6 grid'>
        {filteredPosts.map((post) => (
          <div key={post.slug} className='rounded-xl bg-indigo-50 shadow-md transition-transform transform hover:-translate-y-1 hover:scale-105 hover:shadow-xl cursor-pointer'
           style={{ boxShadow: '0 8px 10px rgba(0, 0, 0, 0.35)' }}>
            <Image
              src={
                post.metadata.image ||
                `/posts/og-image?title=${encodeURIComponent(post.metadata.title)}`
              }
              alt={post.metadata.title}
              className='w-full object-cover rounded-t-lg mb-4 aspect-[1200/630]'
              width={1200}
              height={630}
            />
            <div className='p-4 bg-white rounded-b-xl'>
              <h2 className='text-2xl font-bold mb-2'>
               <Link
                    href={`/posts/${post.slug}`}
                   className='text-indigo-400 hover:text-violet-500 transition-colors duration-150'
                 >
                   {post.metadata.title}
               </Link>
              </h2>
              <p className='text-gray-700 mb-4'>
                {post.metadata.description}
              </p>
              <Link
                href={`/posts/${post.slug}`}
                className='text-blue-600 hover:underline'>
                더보기
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
