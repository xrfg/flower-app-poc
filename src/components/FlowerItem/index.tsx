import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

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
  const [favorite, setFavorite] = useState<boolean>(false);

  useEffect(() => {
    const isFavorite = window.localStorage.getItem(`${flower.id}-isFavorite`);
    isFavorite !== null && setFavorite(JSON.parse(isFavorite));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    favorite
      ? window.localStorage.setItem(
          `${flower.id}-isFavorite`,
          JSON.stringify(favorite)
        )
      : window.localStorage.removeItem(`${flower.id}-isFavorite`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [favorite]);

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
        <div className="text-primary-wine ml-auto">
          {favorite ? (
            <FaStar
              size={26}
              onClick={(e) => {
                e.stopPropagation();
                e.nativeEvent.preventDefault();
                setFavorite((prev) => !prev);
              }}
            />
          ) : (
            <FaRegStar
              size={26}
              onClick={(e) => {
                e.stopPropagation();
                e.nativeEvent.preventDefault();
                setFavorite((prev) => !prev);
              }}
            />
          )}
        </div>
      </li>
    </Link>
  );
}
