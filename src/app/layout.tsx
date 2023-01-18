import Link from 'next/link';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <main>
          <nav className="header-nav-container">
            <Link className="header-nav" href="/">Home</Link>
            <Link className="header-nav" href="/notes">Notes</Link>
          </nav>
        </main>
        {children}
      </body>
    </html>
  )
}
