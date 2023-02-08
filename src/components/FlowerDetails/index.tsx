import Image from "next/image";
import React from "react";
import { FaTrash } from "react-icons/fa";
import { useMutation, useQueryClient } from "react-query";
import * as api from "../../api/flowerApi";
import { FlowerData } from "../FlowerItem";

export default function FlowerDetails({
  id,
  name,
  color,
  scientificName,
  image,
}: FlowerData) {
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation(api.deleteFlower, {
    onSuccess: (data) => {
      //data is the id?
      console.log(data);
      //find the flowerDetails to delete?
      const newFlowersArr: any[] = [];
      queryClient.setQueryData("flowers", newFlowersArr);
      //move out of the page...
    },
  });

  const DeleteFunc = (plantId: string) => {
    mutate(plantId);
  };

  if (isLoading) {
    <span>Removing from inventory...</span>;
  }
  return (
    <div className="flex gap-2 flex-col md:flex-row w-full">
      <div className="w-1/2">
        <h2 className="font-bold">{name}</h2>
        <div className="max-w-xl h-48 sm:h-96 relative object-cover">
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
      <div className="flex flex-col w-1/2">
        <span>Id: {id}</span>
        <span>Scientific name: {scientificName}</span>
        <span>Color: {color}</span>
        <FaTrash onClick={() => DeleteFunc(id)} />
      </div>
    </div>
  );
}
