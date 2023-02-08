import React from "react";

export default function PageHeader({ pageTitle }: { pageTitle: string }) {
  return (
    <h4 className="font-semibold text-primary-wine self-start mb-1">
      {pageTitle}
    </h4>
  );
}
