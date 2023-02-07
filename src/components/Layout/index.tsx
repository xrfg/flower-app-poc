import React, { PropsWithChildren } from "react";
import Navbar from "../Navbar";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="relative flex flex-col w-full bg-secondary-lightSand min-h-screen">
      <Navbar />
      <div className="p-2 flex justify-center items-center">{children}</div>
    </div>
  );
}
