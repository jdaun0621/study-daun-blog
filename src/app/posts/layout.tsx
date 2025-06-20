// src/app/posts/layout.tsx
export default function PostsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>; // 감싸주기만 해도 OK
}
