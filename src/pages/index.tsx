import Head from "next/head";
import RoutingBtn from "@/components/Buttons/PrimaryBtn";
import Layout from "@/components/Layout";
import Link from "next/link";
import PrimaryBtn from "@/components/Buttons/PrimaryBtn";
import { FaArrowCircleRight } from "react-icons/fa";
import React from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Flower APP PoC</title>
        <meta
          name="description"
          content="Coding Challenge from Squareball performed by Roxana Martins"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="pt-8">
          <Link href="/inventory">
            <PrimaryBtn>
              Inventory
              <FaArrowCircleRight />
            </PrimaryBtn>
          </Link>
        </div>
      </Layout>
    </>
  );
}
