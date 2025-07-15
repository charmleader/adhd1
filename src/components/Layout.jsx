import React from 'react';
import AdHeader from './AdHeader';
import AdFooter from './AdFooter';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <AdHeader />
      <main className="flex-1">
        {children}
      </main>
      <AdFooter />
    </div>
  );
};

export default Layout;