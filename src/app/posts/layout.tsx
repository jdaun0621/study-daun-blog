// src/app/posts/layout.tsx
export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='w-full flex flex-col items-center px-4 py-8'>
      <div className='max-w-6xl w-full'>{children}</div>
    </div>
  );
}
