import React from "react";
import { Layout, FlowerList, PageHeader } from "@/components";

export default function inventory() {
  return (
    <Layout>
      <div className="flex gap-2 flex-col items-start">
        <PageHeader pageTitle="Inventory" />
        <FlowerList />
      </div>
    </Layout>
  );
}
