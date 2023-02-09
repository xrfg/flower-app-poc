import React from "react";
import { useInfiniteQuery } from "react-query";

import * as api from "../../api/flowerApi";
import PrimaryBtn from "../Buttons/PrimaryBtn";
import FlowerItem from "../FlowerItem";
import { FlowerData } from "../FlowerItem";

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
    <div className="w-full flex flex-col items-center gap-4">
      <ul className="flex flex-row flex-wrap gap-3 justify-center w-full">
        {data?.pages.map((page: PageData) =>
          page.data.map((flower: FlowerData) => {
            return <FlowerItem key={flower.id} flower={flower} />;
          })
        )}
      </ul>
      {hasNextPage && (
        <PrimaryBtn onClick={() => fetchNextPage()}>Load More</PrimaryBtn>
      )}
    </div>
  );
}
