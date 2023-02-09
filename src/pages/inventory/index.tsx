import React from "react";

import { FlowerList, Layout, PageHeader } from "@/components";

export default function inventory(): JSX.Element {
  return (
    <Layout>
      <div className="flex gap-2 flex-col items-start">
        <PageHeader pageTitle="Inventory" />
        <FlowerList />
      </div>
    </Layout>
  );
}
