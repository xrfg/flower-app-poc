import { useRouter } from "next/router";
import React from "react";
import { FaArrowCircleLeft } from "react-icons/fa";

export default function GoBackBtn(): JSX.Element {
  const router = useRouter();
  const goBack = () => {
    router.back();
  };
  return (
    <button
      type="button"
      onClick={goBack}
      className="bg-secondary-sand self-start capitalize text-sm rounded-lg shadow-md py-1 px-2.5 gap-1.5   text-primary-wine border border-primary-wine flex items-center hover:bg-secondary-lightSand duration-150 font-medium"
    >
      <FaArrowCircleLeft />
      Back
    </button>
  );
}
