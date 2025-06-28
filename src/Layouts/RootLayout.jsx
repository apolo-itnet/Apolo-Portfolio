import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Component/Navbar/Navbar";
import Footer from "../Component/Footer/Footer";

const RootLayout = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0">
        <div className="absolute top-0 z-[-2] w-full h-full bg-[#222222] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
        <div className="absolute top-0 z-[-1] w-full h-full bg-[#222222a9]"></div>
      </div>
      <div className="w-full flex flex-col min-h-screen">
        <section className="sticky top-0 z-50">
          <Navbar />
        </section>
        <section className="flex-grow">
          <Outlet />
        </section>
        <section className="mt-auto">
          <Footer />
        </section>
      </div>
    </div>
  );
};

export default RootLayout;
