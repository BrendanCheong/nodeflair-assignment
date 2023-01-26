// library
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

// components
import Panels from "@components/Panels";

// types
import type { MockData } from "@interfaces/MockData";

// data
import mockData from "@data/mockData";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          NodeFlair Jobs | #1 TECH job portal in Asia (Singapore, Malaysia,
          India)
        </title>
        <meta name="description" content="NodeFlair Job Listings" />
        <meta charSet="utf-8" />
        <meta content="ie=edge" httpEquiv="x-ua-compatible" />
        <meta
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
          name="viewport"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-gray-200 w-full">
        <main className="px-3 max-w-[1104px] mx-auto w-full align-top text-left font-bold text-lg">
          <div className="flex flex-start w-full">
            <Panels data={mockData.records} />
          </div>
        </main>
      </div>

    </>
  );
};

export default Home;
