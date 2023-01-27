// library
import { type NextPage } from "next";
import Head from "next/head";

// components
import Panels from "@components/Panels";

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
      <main className="bg-gray-200 w-full">
        <div className="px-3 max-w-[1104px] mx-auto w-full h-full align-top text-left font-bold text-lg">
          <div className="flex flex-start w-full h-full">
            <Panels jobs={mockData.records} />
          </div>
        </div>
      </main>

    </>
  );
};

export default Home;
