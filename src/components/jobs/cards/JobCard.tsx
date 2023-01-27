// lib
import { Fragment } from "react";
import Image from "next/image";

// components
import TechStack from "../TechStack";

const JobCard = () => {
  return (
    <Fragment>
      <div className="bg-white mb-2 w-full rounded-md shadow-sm border-light-gray border-2 hover:border-primary hover:-translate-y-1 transform transition-[0.2s] inline hover:shadow-lg cursor-pointer">
      <div className="h-full w-full flex flex-col rounded-t-md p-8 align-top">
      <div className="flex-col flex flex-nowrap justify-start">
        <div className="justify-between items-start flex">
          <div className=" block overflow-x-hidden m-0 align-middle float-left rounded-sm">
            <Image
              src={"https://nodeflair.com/companies/240.png"}
              alt={"TikTok"}
              width={50}
              height={50}
            />
          </div>
          <div className="bg-green-200 text-primary font-semibold ml-auto text-left rounded-md items-center justify-center px-2 py-1 h-10">
            <span className="w-full h-full">Backend</span>
        </div>
        </div>
        <div className="mt-0 basis-auto flex-shrink align-top text-ellipsis font-normal">
          <p className="overflow-hidden text-ellipsis whitespace-normal space-x-3">
            <span className="whitespace-pre-wrap text-left text-md">Tiktok</span>
            <span className="whitespace-pre-wrap text-left text-md">3.6 &nbsp;★</span>
          </p>
          <h2 className="overflow-hidden text-ellipsis mb-0 font-bold">
            Algorithm Engineer Intern (Speech Recognition) - 2023
          </h2>
        </div>
      </div>
      <div className="w-full mb-auto text-sm align-top">
        <div className="text-light-gray whitespace-pre-wrap my-0 mb-1 flex flex-row space-x-4">
          <span className="font-bold text-primary text-sm align-top">
            2 days ago
          </span>
          <div className="flex flex-row text-slate-400 text-sm">
            <svg className="h-[1em] mt-[0.15em] overflow-visible box-content" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
            </svg>
            &nbsp;
            Singapore
          </div>
        </div>
        <div >
          <p className=" flex flex-row space-x-2 mb-[0.15em] font-semibold mt-0 align-top text-sm text-left text-dark-gray">
            <span className='pt-1'>
              S$3,000 - S$5,000 /mth
            </span>
            <span className="uppercase rounded-md bg-light-gray py-1 px-2 text-sm text-dark-gray">
              EST
            </span>
          </p>
        </div>
      </div>
      <hr className="my-1"/>
      <div className='whitespace-nowrap overflow-hidden pt-2 mb-0 w-full text-sm min-h-[2.5rem] bg-white rounded-b-lg text-ellipsis space-x-2 h-2/6 text-center'>
        {Array(20).fill(<TechStack />)}
      </div>
    </div>     
      </div>
    </Fragment>
  );
};

export default JobCard;
