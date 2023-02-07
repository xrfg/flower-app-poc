import React from "react";
import { useInfiniteQuery } from "react-query";
import * as api from "../../api/flowerApi";
import PrimaryBtn from "../Buttons/PrimaryBtn";
import Flower, { FlowerData } from "../Flower";

type PageData = {
  data: FlowerData[];
  meta: {
    hasNextPage: boolean;
  };
};

export default function FlowerList(): JSX.Element {
  const { data, isLoading, isError, hasNextPage, fetchNextPage } =
    useInfiniteQuery(
      "flowers",
      ({ pageParam = 1 }) => api.getFlowers(pageParam),
      {
        getNextPageParam: (
          lastPage: PageData,
          allPages
        ): number | undefined => {
          const thereIsNextPage = lastPage.meta.hasNextPage;
          const nextPage = allPages.length + 1;
          return thereIsNextPage ? nextPage : undefined;
        },
      }
    );
  if (isLoading) {
    return <span>Loading flowers...</span>;
  }
  if (isError) {
    return <span>Something went wrong!</span>;
  }

  return (
    <div>
      <ul>
        {data?.pages.map((page: PageData) =>
          page.data.map((flower: FlowerData) => {
            return <Flower key={flower.id} flower={flower} />;
          })
        )}
      </ul>
      {hasNextPage && (
        <PrimaryBtn onClick={() => fetchNextPage()} text="Load More" />
      )}
    </div>
  );
}
