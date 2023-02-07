import FlowerList from "@/components/FlowerList";
import Layout from "@/components/Layout";
import React from "react";

export default function inventory() {
  return (
    <Layout>
      <div className="flex gap-2 flex-col items-start">
        <h4 className="font-semibold text-primary-wine">Inventory</h4>
        <FlowerList />
      </div>
    </Layout>
  );
}
