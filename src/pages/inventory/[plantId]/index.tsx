import { FlowerData } from "@/components/FlowerItem";
import Layout from "@/components/Layout";
import Image from "next/image";
import React from "react";
import { FaTrash } from "react-icons/fa";
import { useMutation, useQueryClient } from "react-query";
import * as api from "../../../api/flowerApi";

export const getServerSideProps = (context: { query: FlowerData }) => {
  if (context.query?.name) {
    const {
      id = "Unknown",
      name = "Unknown",
      scientificName = "Unknown",
      color = "Unknown",
      image = "Unknown",
    } = context.query || {};
    return {
      props: {
        id: id,
        name: name,
        scientificName: scientificName,
        color: color,
        image: image,
      },
    };
  } else {
    return {
      redirect: {
        permanent: false,
        destination: "/inventory",
      },
    };
  }
};

export default function Flower({
  id,
  name,
  scientificName,
  color,
  image,
}: FlowerData) {
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation(api.deleteFlower, {
    onSuccess: (data) => {
      //data is the id?
      console.log(data);
      //find the flower to delete?
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
    <Layout>
      <div className="flex gap-2 flex-col md:flex-row w-full">
        <div>
          <h2>{name}</h2>
          <div className="max-w-xl h-48 sm:h-96 relative object-cover">
            <Image src={image} alt={name} fill />
          </div>
        </div>
        <div className="flex flex-col w-full">
          <span>Id: {id}</span>
          <span>Scientific name: {scientificName}</span>
          <span>Color: {color}</span>
          <FaTrash onClick={() => DeleteFunc(id)} />
        </div>
      </div>
    </Layout>
  );
}
