// components/MainLayout.js
import React from 'react';

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-[89dvh] max-h-[89dvh] overflow-auto bg-white">
      {children}
    </div>
  );
};

export default MainLayout;
