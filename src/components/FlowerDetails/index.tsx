import React from "react";
import { FaTrash } from "react-icons/fa";
import { useMutation, useQueryClient } from "react-query";
import Image from "next/image";
import { NextRouter, useRouter } from "next/router";

import { FavoriteStar } from "@/components";

import * as api from "../../api/flowerApi";
import { FlowerData } from "../FlowerItem";

const dataContainer = "border border-b-primary-wine";
const dataTitle = "text-primary-wine text-base";
const dataValue = "font-semibold";

export default function FlowerDetails({
  id,
  name,
  color,
  scientificName,
  image,
}: FlowerData): JSX.Element {
  const router: NextRouter = useRouter();
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation(api.deleteFlower, {
    onError: (error: Error) => {
      window.alert(`${error?.message}.`);
    },
    onSuccess: ({ success }: { success: boolean }) => {
      window.alert(
        `Success: ${success}. Flower with an ID of ${id} and name ${name}, has been successfully removed from the inventory!`
      );
      queryClient.invalidateQueries("flowers");
      router.push("/inventory");
    },
  });

  const RemovePlant = (plantId: string) => {
    mutate(plantId);
  };

  isLoading && <span>Removing from inventory...</span>;

  return (
    <div className="flex relative gap-2 p-3 md:p-4 mt-4 pb-3 md:pb-6 bg-primary-mint rounded-xl shadow-md flex-col md:flex-row w-full h-full md:w-full items-center">
      <div className="w-full md:w-[49%] flex justify-center flex-col gap-2 items-center">
        <h2 className="font-bold text-xl">{name}</h2>
        <div className="relative h-64 w-64 md:h-80 md:w-80 rounded-xl shadow-md overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          />
        </div>
      </div>
      <div className="flex flex-col text-lg self-stretch h-full w-full md:w-[49%]">
        <div className="flex gap-2 items-center">
          <FavoriteStar flowerId={id} />
          <FaTrash
            className="cursor-pointer"
            color="red"
            size={22}
            onClick={() => RemovePlant(id)}
          />
        </div>
        <div className={dataContainer}>
          <span className={dataTitle}>ID:</span>{" "}
          <span className={dataValue}>{id}</span>
        </div>
        <div className={dataContainer}>
          <span className={dataTitle}>Scientific name:</span>{" "}
          <span className={dataValue}>{scientificName}</span>
        </div>
        <div>
          <span className={dataTitle}>Color:</span>{" "}
          <span className={dataValue}>{color}</span>
        </div>
      </div>
    </div>
  );
}
