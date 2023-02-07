import React from "react";

export interface FlowerData {
  color: string;
  id: string;
  image: string;
  name: string;
  scientificName: string;
}

export default function Flower({
  flower,
}: {
  flower: FlowerData;
}): JSX.Element {
  return (
    <li>
      <span>Flower {flower.id}</span>
      <span>{flower.name}</span>
    </li>
  );
}
