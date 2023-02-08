import { FlowerData } from "@/components/FlowerItem";
import React from "react";
import { FlowerDetails, GoBackBtn, Layout, PageHeader } from "@/components";

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
  color,
  scientificName,
  image,
}: FlowerData) {
  return (
    <Layout>
      <PageHeader pageTitle="Flower details" />
      <GoBackBtn />
      <FlowerDetails
        id={id}
        color={color}
        scientificName={scientificName}
        image={image}
        name={name}
      />
    </Layout>
  );
}
