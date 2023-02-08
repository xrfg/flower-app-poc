import Head from "next/head";
import { Layout, PageHeader, PrimaryBtn } from "@/components";
import Link from "next/link";
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
