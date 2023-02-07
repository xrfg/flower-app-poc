import Link from "next/link";
import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";

type BtnProps = {
  url: string;
  text: string;
};

export default function RoutingBtn({ url, text }: BtnProps): JSX.Element {
  return (
    <Link href={url}>
      <button
        autoFocus
        type="button"
        name="Routing Button"
        className="bg-secondary-sand capitalize rounded-lg shadow-md py-2 px-3.5 gap-2 text-primary-wine border border-primary-wine flex items-center hover:bg-secondary-lightSand duration-150 font-medium"
      >
        {text} <FaArrowCircleRight />
      </button>
    </Link>
  );
}
