import React from "react";

export declare interface BtnProps {
  children?: React.ReactNode;
  onClick?(event: React.MouseEvent<HTMLButtonElement>): void;
}

export default function PrimaryBtn(props: BtnProps): JSX.Element {
  return (
    <button
      type="button"
      onClick={props?.onClick}
      className="bg-secondary-sand capitalize rounded-lg shadow-md py-2 px-3.5 gap-2 text-primary-wine border border-primary-wine flex items-center hover:bg-secondary-lightSand duration-150 font-medium"
    >
      {props?.children}
    </button>
  );
}
