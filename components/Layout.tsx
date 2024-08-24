// components/Layout.tsx
import React from 'react';
import Link from 'next/link';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-500 text-white p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <Link href="/">
            <span className="text-xl font-bold">LMS BANK</span>
          </Link>
          <div>
            <Link href="/tasks">
              <span className="px-4 py-2">Tasks</span>
            </Link>
            <Link href="/details">
              <span className="px-4 py-2">Details</span>
            </Link>
          </div>
        </nav>
      </header>
      <main className="flex-grow container mx-auto p-4">
        {children}
      </main>
      <footer className="bg-blue-500 text-white p-4 text-center">
        © 2024 Loan App
      </footer>
    </div>
  );
};

export default Layout;
