import React from "react";
import Image from "next/image";
import Link from "next/link";

import FavoriteStar from "../FavoriteStar";

export interface FlowerData {
  color: string;
  id: string;
  image: string;
  name: string;
  scientificName: string;
}

export default function FlowerItem({
  flower,
}: {
  flower: FlowerData;
}): JSX.Element {
  return (
    <Link
      href={{
        pathname: "/inventory/[plantId]",
        query: { ...flower },
      }}
      as={`/inventory/${flower?.id}`}
      className="w-full sm:w-[49%]"
    >
      <li className="flex gap-3 items-start bg-secondary-sand hover:bg-primary-mint duration-150 px-4 py-4 rounded-lg shadow-md w-full flex-wrap">
        <div className="relative shadow-sm h-20 w-20 overflow-hidden rounded-lg object-cover flex-none">
          <Image
            src={flower.image}
            alt="Picture of the author"
            fill
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          />
        </div>
        <div className="flex flex-col leading-tight">
          <h4 className="font-semibold capitalize text-ellipsis">
            {flower.name}
          </h4>
          <span className="text-sm">{flower.color}</span>
        </div>
        <FavoriteStar flowerId={flower?.id} />
      </li>
    </Link>
  );
}
