import Link from "next/link";
import React from "react";

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
        name="Go to Flower Inventory"
        className="bg-primary-wine rounded-md shadow-md py-1 px-3 text-primary-mint"
      >
        {text}
      </button>
    </Link>
  );
}
