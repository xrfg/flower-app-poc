import Link from "next/link";
import React from "react";
import { FaSpa } from "react-icons/fa";

export default function Navbar(): JSX.Element {
  return (
    <div className="w-screen bg-primary-mint h-fit py-2 px-3 shadow-md">
      <h4 className="flex items-center gap-2 text-primary-wine">
        <FaSpa />
        <Link href={"/"} className="font-semibold">
          Flowers Gmbh
        </Link>
      </h4>
    </div>
  );
}
