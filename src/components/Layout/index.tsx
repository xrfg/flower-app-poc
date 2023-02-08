import React, { PropsWithChildren } from "react";
import Navbar from "../Navbar";

export default function Layout({ children }: PropsWithChildren) {
  //ba
  return (
    <div className="relative flex flex-col items-center w-full bg-secondary-lightSand min-h-screen">
      <Navbar />
      <div className="p-2 sm:p-4 flex flex-col justify-center items-center w-full max-w-3xl">
        {children}
      </div>
    </div>
  );
}
