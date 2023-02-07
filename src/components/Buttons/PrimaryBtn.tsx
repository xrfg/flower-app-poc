import React from "react";

type BtnProps = {
  text: string;
  onClick(event: React.MouseEvent<HTMLButtonElement>): void;
};

export default function PrimaryBtn({ text, onClick }: BtnProps): JSX.Element {
  return (
    <button
      type="button"
      onClick={onClick}
      name="Go to Flower Inventory"
      className="bg-primary-mint capitalize rounded-lg shadow-md py-1.5 px-3 text-primary-wine border border-primary-wine font-medium hover:opacity-90 duration-150 text-sm"
    >
      {text}
    </button>
  );
}
