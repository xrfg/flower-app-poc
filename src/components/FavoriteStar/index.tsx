import React, { useEffect, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

export default function FavoriteStar({
  flowerId,
}: {
  flowerId: string;
}): JSX.Element {
  const [favorite, setFavorite] = useState<boolean>(false);

  useEffect(() => {
    const isFavorite: string | null = window.localStorage.getItem(
      `${flowerId}-isFavorite`
    );
    isFavorite !== null && setFavorite(JSON.parse(isFavorite));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    favorite
      ? window.localStorage.setItem(
          `${flowerId}-isFavorite`,
          JSON.stringify(favorite)
        )
      : window.localStorage.removeItem(`${flowerId}-isFavorite`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [favorite]);
  return (
    <div className="text-primary-wine ml-auto">
      {favorite ? (
        <FaStar
          size={26}
          className="cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            e.nativeEvent.preventDefault();
            setFavorite((prev) => !prev);
          }}
        />
      ) : (
        <FaRegStar
          size={26}
          className="cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            e.nativeEvent.preventDefault();
            setFavorite((prev) => !prev);
          }}
        />
      )}
    </div>
  );
}
