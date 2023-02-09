import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import Head from "next/head";
import Link from "next/link";

import { Layout, PageHeader, PrimaryBtn } from "@/components";

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
        <PageHeader pageTitle="Home" />
        <Link href="/inventory">
          <PrimaryBtn>
            Inventory
            <FaArrowCircleRight />
          </PrimaryBtn>
        </Link>
      </Layout>
    </>
  );
}
