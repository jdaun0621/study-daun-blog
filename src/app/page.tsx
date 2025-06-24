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
    <div className='w-full bg-gradient-to-br from-[#dbffe7] to-[#cfdfff] min-h-screen px-4 py-10'>
      {/* 👉 상단 소개 영역 */}
      <section className='max-w-4xl mx-auto mb-16 text-center'>
        <h1 className='text-4xl font-extrabold text-indigo-500 mb-6'>
          프론트엔드 개발자를 꿈꾸는
        </h1>
        <h2 className='text-3xl font-bold text-gray-800 mb-30'>
          정다운 입니다.
        </h2>

        <h3 className='text-3xl font-bold text-gray-800 mb-10'>기술 스택</h3>

        {/* 기술 스택 아이콘 */}
        <div className='grid grid-cols-3 sm:grid-cols-5 gap-6 justify-center items-center mb-20'>
          {/* React */}
          <div className='flex flex-col items-center'>
            <Image src='/icons/react.png' alt='React' width={48} height={48} />
            <p className='mt-2 text-sm font-semibold text-gray-700'>React</p>
          </div>
          {/* Next.js */}
          <div className='flex flex-col items-center'>
            <Image
              src='/icons/nextjs.png'
              alt='Next.js'
              width={48}
              height={48}
            />
            <p className='mt-2 text-sm font-semibold text-gray-700'>Next.js</p>
          </div>
          {/* JavaScript */}
          <div className='flex flex-col items-center'>
            <Image
              src='/icons/js.png'
              alt='JavaScript'
              width={48}
              height={48}
            />
            <p className='mt-2 text-sm font-semibold text-gray-700'>
              JavaScript
            </p>
          </div>
          {/* TypeScript */}
          <div className='flex flex-col items-center'>
            <Image
              src='/icons/ts.png'
              alt='TypeScript'
              width={48}
              height={48}
            />
            <p className='mt-2 text-sm font-semibold text-gray-700'>
              TypeScript
            </p>
          </div>
          {/* Tailwind CSS */}
          <div className='flex flex-col items-center'>
            <Image
              src='/icons/tailwind.png'
              alt='Tailwind CSS'
              width={48}
              height={48}
            />
            <p className='mt-2 text-sm font-semibold text-gray-700'>
              Tailwind CSS
            </p>
          </div>
        </div>
      </section>

      <h4 className='text-3xl font-bold text-gray-800 mb-12 text-center'>
        블로그 포스트
      </h4>

      {/* 👉 포스트 카드 영역 */}
      <section className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {filteredPosts.map((post) => (
          <div
            key={post.slug}
            className='rounded-2xl bg-white transition-transform transform hover:-translate-y-1 hover:scale-105 hover:shadow-xl cursor-pointer'
            style={{ boxShadow: '0 8px 10px rgba(0, 0, 0, 0.25)' }}>
            <Image
              src={
                post.metadata.image ||
                `/posts/og-image?title=${encodeURIComponent(post.metadata.title)}`
              }
              alt={post.metadata.title}
              className='w-full object-cover rounded-t-2xl aspect-[1200/630]'
              width={1200}
              height={630}
            />
            <div className='p-4'>
              <h2 className='text-2xl font-bold mb-2'>
                <Link
                  href={`/posts/${post.slug}`}
                  className='text-indigo-500 hover:text-violet-600 transition-colors duration-150'>
                  {post.metadata.title}
                </Link>
              </h2>
              <p className='text-gray-700 mb-4'>{post.metadata.description}</p>
              <Link
                href={`/posts/${post.slug}`}
                className='text-cyan-500 hover:text-violet-700 font-semibold'>
                더보기 →
              </Link>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
