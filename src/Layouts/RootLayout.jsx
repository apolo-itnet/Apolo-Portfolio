import React from 'react';
import { Outlet } from 'react-router';

const RootLayout = () => {
  return (
    <div>
      <section>
        <Outlet/>
      </section>
    </div>
  );
};

export default RootLayout;