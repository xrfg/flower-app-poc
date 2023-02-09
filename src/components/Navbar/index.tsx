import React from "react";
import { FaSpa } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Navbar(): JSX.Element {
  return (
    <div className="w-screen flex justify-between bg-primary-mint h-fit py-2 px-3 shadow-md">
      <h4 className="flex items-center gap-2 text-primary-wine">
        <FaSpa />
        <Link href={"/"} className="font-semibold">
          Flowers Gmbh
        </Link>
      </h4>

      <a
        href="https://github.com/xrfg/flower-app-poc"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/github-logo.png"
          alt="Github logo"
          width="28"
          height="28"
        />
      </a>
    </div>
  );
}
