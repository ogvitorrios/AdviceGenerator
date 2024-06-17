import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      Advice Generator
      {children}
    </div>
  );
};

export default Layout;